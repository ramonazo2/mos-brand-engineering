import { useEffect, useRef, useState } from "react"
import Home from "./flows/Home"
import OutputSelection from "./flows/OutputSelection"
import CampaignEditor from "./flows/CampaignEditor"
import RecognitionEditor from "./flows/RecognitionEditor"
import FactSheetEditor from "./flows/FactSheetEditor"
import { DEFAULT_CAMPAIGN, DEFAULT_EVENT_CAMPAIGN, DEFAULT_RECOGNITION_DATA, DEFAULT_FACT_DATA, type View, type Channel, type CreationType } from "./flows/shared"

function Breadcrumbs({
  crumbs,
}: {
  crumbs: { label: string; onClick?: () => void }[]
}) {
  return (
    <nav className="breadcrumbs" aria-label="Breadcrumb">
        {crumbs.map((crumb, index) => (
          <span key={crumb.label}>
            {index > 0 && <span className="crumb-divider">/</span>}
            {crumb.onClick ? (
              <button onClick={crumb.onClick}>{crumb.label}</button>
            ) : (
              <span className="current" aria-current="page">{crumb.label}</span>
            )}
          </span>
        ))}
    </nav>
  )
}

export default function App() {
  const [view, setView] = useState<View>("home")
  const [transitionPhase, setTransitionPhase] = useState<"idle" | "leaving" | "entering">("idle")
  const transitionTimer = useRef<ReturnType<typeof setTimeout> | null>(null)
  const [channel, setChannel] = useState<Channel | null>(null)
  const [selectedType, setSelectedType] = useState<CreationType | null>(null)
  const communicationType = selectedType === "Site fact sheet" ? null : selectedType
  const [response, setResponse] = useState("Learn more")
  const [campaignData, setCampaignData] = useState(DEFAULT_CAMPAIGN)
  const [eventData, setEventData] = useState(DEFAULT_EVENT_CAMPAIGN)
  const [recognitionData, setRecognitionData] = useState(
    DEFAULT_RECOGNITION_DATA,
  )
  const [factData, setFactData] = useState(DEFAULT_FACT_DATA)

  useEffect(() => () => {
    if (transitionTimer.current) clearTimeout(transitionTimer.current)
  }, [])

  const navigate = (nextView: View) => {
    if (nextView === view) return
    if (transitionTimer.current) clearTimeout(transitionTimer.current)
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setTransitionPhase("idle")
      setView(nextView)
      return
    }
    setTransitionPhase("leaving")
    transitionTimer.current = setTimeout(() => {
      setView(nextView)
      setTransitionPhase("entering")
      transitionTimer.current = setTimeout(() => setTransitionPhase("idle"), 420)
    }, 200)
  }

  const goHome = () => navigate("home")

  const title =
    view === "home"
      ? "Create communication"
      : view === "setup"
        ? "Choose output"
        : view === "factsheet"
          ? "Site fact sheet"
          : communicationType ?? "Create communication"

  const breadcrumbs = (
    <Breadcrumbs
      crumbs={
        view === "setup"
          ? [{ label: "Home", onClick: goHome }, { label: title }]
          : view === "campaign" && communicationType !== "Recognition (Inspire)"
            ? [{ label: "Home", onClick: goHome }, { label: "Choose output", onClick: () => navigate("setup") }, { label: title }]
            : [{ label: "Home", onClick: goHome }, { label: title }]
      }
    />
  )

  return (
    <div className="app-shell">
      <div className="app-main">
        <div className={`app-content ${view === "home" ? "home-content" : ""} page-${transitionPhase}`}>
          {view === "home" && (
            <Home
              selectedType={selectedType}
              onType={(type) => {
                setSelectedType(type)
                setChannel(null)
                setResponse("Learn more")
              }}
              onContinue={() => {
                if (selectedType === "Site fact sheet") {
                  navigate("factsheet")
                } else if (communicationType === "Recognition (Inspire)") {
                  setChannel("viva")
                  navigate("campaign")
                } else {
                  navigate("setup")
                }
              }}
            />
          )}
          {view === "setup" && communicationType && (
            <OutputSelection
              breadcrumbs={breadcrumbs}
              channel={channel}
              type={communicationType}
              onChannel={setChannel}
              onContinue={() => {
                if (channel) navigate("campaign")
              }}
            />
          )}
          {view === "campaign" &&
            channel === "viva" &&
            communicationType === "Recognition (Inspire)" && (
              <RecognitionEditor
                breadcrumbs={breadcrumbs}
                data={recognitionData}
                onData={setRecognitionData}
              />
            )}
          {view === "campaign" &&
            channel &&
            communicationType &&
            communicationType !== "Recognition (Inspire)" && (
              <CampaignEditor
                breadcrumbs={breadcrumbs}
                channel={channel}
                type={communicationType}
                response={response}
                onResponse={setResponse}
                data={
                  communicationType === "Event promotion"
                    ? eventData
                    : campaignData
                }
                onData={
                  communicationType === "Event promotion"
                    ? setEventData
                    : setCampaignData
                }
              />
            )}
          {view === "factsheet" && (
            <FactSheetEditor breadcrumbs={breadcrumbs} data={factData} onData={setFactData} />
          )}
        </div>
      </div>
    </div>
  )
}
