import { useCallback, useEffect, useRef, useState } from "react"
import { getFontEmbedCSS, toJpeg } from "html-to-image"
import FactSheet, { PAGE_H, PAGE_W, type FactSheetData } from "./FactSheet"

type View = "home" | "setup" | "campaign" | "factsheet"
type Channel = "viva" | "poster" | "both"
type CommunicationType = "Event promotion" | "Announcement" | "Program or service" | "Recognition" | "Deadline or reminder" | "Internal campaign"

type IconName = "home" | "plus" | "document" | "template" | "settings" | "viva" | "poster" | "both" | "fact" | "arrow" | "check" | "download"

interface CampaignData {
  eyebrow: string
  title: string
  description: string
  date: string
  location: string
  callToAction: string
  supportingCopy: string
  supportingHeading: string
  bulletPoints: string
  imageUrl: string
}

type VerticalTemplate = "full-bleed" | "gradient-photo" | "image-top" | "pattern-light"

type VivaTemplate = "split-image" | "content-heavy" | "text-led"
type RecognitionTemplate = "photo" | "no-photo"
type MosaicColor = "maize-green" | "deep-green" | "gray-green" | "deep-blue" | "khaki" | "sky-blue"
type MosaicPattern = "none" | "people" | "helmet" | "leaf"

interface RecognitionData {
  firstName: string
  lastName: string
  message: string
  photoUrl: string
}

interface CommunicationOption {
  title: CommunicationType
  description: string
}

interface ChannelOption {
  id: Channel
  title: string
  description: string
  meta: string
}

interface IconProps {
  name: IconName
  size?: number
}

interface MosaicColorOption {
  id: MosaicColor
  name: string
}

interface MosaicPatternOption {
  id: MosaicPattern
  name: string
}

const DEFAULT_FACT_DATA: FactSheetData = {
  facilityName: "Placeholder for site name",
  facilityPhotoUrl: "",
  overview:
    "The company's Paraguayan operations include an administrative office in Asunción, Paraguay's capital and a production site with a port terminal 26 km from the city of Villeta.",
  facilityLocation: "Ruta Alberdi, km 27, Zona Suribi'y, Villeta – Paraguay",
  yearOperationsBegan: "2014",
  activities:
    "Administrative, in addition to port operations involving unloading raw materials and fertilizer blending and bagging.",
  capacity: "500k tons of fertilizer a year",
  averageProduction: "250k tons of fertilizer a year",
  products: "Fertilizer (NPK blend)",
  finishedProductDestination: "Paraguay's domestic market",
  modeOfTransportation: "The products are mainly transported by road.",
  employees: "50–100 direct employees",
  keyHighlight:
    "A compact facility that centralizes port operations for raw material import, fertilizer blending and bagging of the final products.",
}

const DEFAULT_CAMPAIGN: CampaignData = {
  eyebrow: "Security update",
  title: "Headline 2 lines max",
  description:
    "Short description 3–4 lines max. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.",
  date: "",
  location: "All Mosaic employees",
  callToAction: "CTA Placeholder",
  supportingCopy:
    "Starting October 1, all Mosaic devices will require multi-factor authentication. Setup takes less than five minutes and helps protect our systems and your data.",
  supportingHeading: "Additional Copy/Supporting Heading",
  bulletPoints:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit.\nSed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\nUt enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
  imageUrl: "",
}

const RECOGNITION_SAMPLE_PHOTO =
  "/assets/recognition/recognition-sample-photo.jpg"

const DEFAULT_RECOGNITION_DATA: RecognitionData = {
  firstName: "First Name",
  lastName: "Last Name",
  message:
    "Recognizing your outstanding contributions, dedication, and commitment to excellence. Your efforts make a meaningful difference and help inspire those around you.",
  photoUrl: RECOGNITION_SAMPLE_PHOTO,
}

const communicationTypes: CommunicationOption[] = [
  {
    title: "Event promotion",
    description: "Invite employees to an event or gathering.",
  },
  {
    title: "Announcement",
    description: "Share organizational news or a change.",
  },
  {
    title: "Program or service",
    description: "Build awareness of an internal resource.",
  },
  {
    title: "Recognition",
    description: "Celebrate a person, team or achievement.",
  },
  {
    title: "Deadline or reminder",
    description: "Keep an important task or date visible.",
  },
  {
    title: "Internal campaign",
    description: "Support a coordinated company initiative.",
  },
]

const channelOptions: ChannelOption[] = [
  {
    id: "viva",
    title: "Viva Engage",
    description: "A widescreen graphic and supporting post copy.",
    meta: "16:9 · JPG",
  },
  {
    id: "poster",
    title: "Printed poster",
    description: "A print-ready communication for your site.",
    meta: "US Letter · PDF or JPG",
  },
  {
    id: "both",
    title: "Coordinated set",
    description: "Create both assets from one message.",
    meta: "16:9 + US Letter",
  },
]

const responseOptions = [
  "Be aware — no action required",
  "Learn more",
  "Register or RSVP",
  "Attend",
  "Complete a task",
  "Contact someone",
]

const factFields: {
  key: keyof FactSheetData
  label: string
  multiline?: boolean
}[] = [
  { key: "facilityName", label: "Facility name" },
  { key: "overview", label: "Overview", multiline: true },
  { key: "facilityLocation", label: "Facility location", multiline: true },
  { key: "yearOperationsBegan", label: "Year operations began" },
  { key: "activities", label: "Activities", multiline: true },
  { key: "capacity", label: "Capacity" },
  { key: "averageProduction", label: "Average production" },
  { key: "products", label: "Products" },
  { key: "finishedProductDestination", label: "Finished product destination" },
  {
    key: "modeOfTransportation",
    label: "Mode of transportation",
    multiline: true,
  },
  { key: "employees", label: "Employees" },
  { key: "keyHighlight", label: "Key highlight", multiline: true },
]

function Icon({ name, size = 18 }: IconProps) {
  const paths: Record<IconName, React.ReactNode> = {
    home: (
      <>
        <path d="M3 10.5 12 3l9 7.5" />
        <path d="M5.5 9v11h13V9M9 20v-6h6v6" />
      </>
    ),
    plus: (
      <>
        <path d="M12 5v14M5 12h14" />
      </>
    ),
    document: (
      <>
        <path d="M7 3h7l4 4v14H7z" />
        <path d="M14 3v5h5M10 12h5M10 16h5" />
      </>
    ),
    template: (
      <>
        <rect x="4" y="4" width="16" height="16" rx="1" />
        <path d="M4 9h16M10 9v11" />
      </>
    ),
    settings: (
      <>
        <circle cx="12" cy="12" r="3" />
        <path d="M19.4 15a1.7 1.7 0 0 0 .34 1.88l.06.06-2.83 2.83-.06-.06A1.7 1.7 0 0 0 15 19.4a1.7 1.7 0 0 0-1 .6 1.7 1.7 0 0 0-.4 1.1V21h-4v-.09A1.7 1.7 0 0 0 8.6 19.4a1.7 1.7 0 0 0-1.88.34l-.06.06-2.83-2.83.06-.06A1.7 1.7 0 0 0 4.6 15a1.7 1.7 0 0 0-.6-1 1.7 1.7 0 0 0-1.1-.4H3v-4h.09A1.7 1.7 0 0 0 4.6 8.6a1.7 1.7 0 0 0-.34-1.88l-.06-.06 2.83-2.83.06.06A1.7 1.7 0 0 0 9 4.6a1.7 1.7 0 0 0 1-.6 1.7 1.7 0 0 0 .4-1.1V3h4v.09A1.7 1.7 0 0 0 15.4 4.6a1.7 1.7 0 0 0 1.88-.34l.06-.06 2.83 2.83-.06.06A1.7 1.7 0 0 0 19.4 9c.16.37.37.7.6 1 .3.3.7.4 1.1.4h.09v4h-.09a1.7 1.7 0 0 0-1.7.6Z" />
      </>
    ),
    viva: (
      <>
        <rect x="3" y="4" width="18" height="16" rx="2" />
        <circle cx="8" cy="10" r="2" />
        <path d="M5.5 16c.6-1.7 1.4-2.5 2.5-2.5s1.9.8 2.5 2.5M13 9h5M13 13h5M13 17h3" />
      </>
    ),
    poster: (
      <>
        <path d="M6 3h12v18H6z" />
        <path d="M9 7h6M9 11h6M9 15h4" />
      </>
    ),
    both: (
      <>
        <rect x="3" y="4" width="12" height="15" rx="1" />
        <path d="M9 4V2h12v15h-6M6 8h6M6 12h6M6 16h4" />
      </>
    ),
    fact: (
      <>
        <path d="M7 3h10v18H7z" />
        <path d="M10 7h4M10 11h4M10 15h4M10 18h3" />
      </>
    ),
    arrow: (
      <>
        <path d="M5 12h14M14 7l5 5-5 5" />
      </>
    ),
    check: <path d="m5 12 4 4L19 6" />,
    download: (
      <>
        <path d="M12 3v12M7 10l5 5 5-5M5 21h14" />
      </>
    ),
  }

  return (
    <svg
      aria-hidden="true"
      fill="none"
      height={size}
      viewBox="0 0 24 24"
      width={size}
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
    >
      {paths[name]}
    </svg>
  )
}

function Header({
  crumbs,
  action,
  onHome,
}: {
  crumbs: string[]
  action?: React.ReactNode
  onHome: () => void
}) {
  return (
    <header className="app-header">
      <button
        className="header-brand"
        onClick={onHome}
        aria-label="Mosaic home"
      >
        <img src="/assets/039ea.png" alt="Mosaic" />
      </button>
      <div className="breadcrumbs">
        {crumbs.map((crumb, index) => (
          <span
            key={crumb}
            className={index === crumbs.length - 1 ? "current" : ""}
          >
            {index > 0 && <span className="crumb-divider">/</span>}
            {crumb}
          </span>
        ))}
      </div>
      {action}
    </header>
  )
}

function Home({
  selectedType,
  onType,
  onContinue,
  onFactSheet,
}: {
  selectedType: CommunicationType | null
  onType: (type: CommunicationType) => void
  onContinue: () => void
  onFactSheet: () => void
}) {
  return (
    <div className="home-view home-view-edited">
      <div className="home-heading">
        <h1>What are you communicating?</h1>
        <p>
          Choose the kind of message. We’ll use it to guide the details and
          recommend an on-brand design.
        </p>
      </div>
      <div className="type-grid home-intent-grid">
        {communicationTypes.map((option) => (
          <button
            key={option.title}
            className={`type-option ${selectedType === option.title ? "selected" : ""}`}
            aria-pressed={selectedType === option.title}
            onClick={() => onType(option.title)}
          >
            <span className="selection-dot">
              {selectedType === option.title && <span />}
            </span>
            <strong>{option.title}</strong>
            <p>{option.description}</p>
          </button>
        ))}
      </div>
      {selectedType === "Recognition" && (
        <p className="recognition-flow-note">
          Recognition creates a Viva Engage post using one of two approved
          INSPIRE layouts.
        </p>
      )}
      <div className="setup-footer home-footer">
        <button className="secondary-button" onClick={onFactSheet}>
          Create a site fact sheet
        </button>
        <button
          className="primary-button"
          disabled={!selectedType}
          onClick={onContinue}
        >
          {selectedType === "Recognition"
            ? "Continue to recognition"
            : "Choose where it appears"}{" "}
          <Icon name="arrow" size={16} />
        </button>
      </div>
    </div>
  )
}

function OutputSelection({
  channel,
  type,
  onChannel,
  onContinue,
}: {
  channel: Channel | null
  type: CommunicationType
  onChannel: (value: Channel) => void
  onContinue: () => void
}) {
  const channelLabel =
    channelOptions.find((option) => option.id === channel)?.title ??
    "Choose an output"
  return (
    <div className="setup-layout">
      <aside className="outline-panel">
        <p className="panel-label">Your brief</p>
        <ol className="steps">
          <li className="complete">
            <span>
              <Icon name="check" size={14} />
            </span>
            <div>
              <small>Communication type</small>
              <strong>{type}</strong>
            </div>
          </li>
          <li className="active">
            <span>2</span>
            <div>
              <small>Output</small>
              <strong>{channelLabel}</strong>
            </div>
          </li>
          <li>
            <span>3</span>
            <div>
              <small>Next</small>
              <strong>Message details</strong>
            </div>
          </li>
        </ol>
      </aside>
      <main className="setup-content">
        <div className="setup-section">
          <span className="section-number">01</span>
          <div>
            <h2>Where will people see this?</h2>
            <p>
              Choose an output. Your message will be prepared for the selected
              channel.
            </p>
          </div>
        </div>
        <div className="type-grid channel-grid">
          {channelOptions.map((option) => (
            <button
              key={option.id}
              className={`type-option ${channel === option.id ? "selected" : ""}`}
              aria-pressed={channel === option.id}
              onClick={() => onChannel(option.id)}
            >
              <span className="selection-dot">
                {channel === option.id && <span />}
              </span>
              <strong>{option.title}</strong>
              <p>{option.description}</p>
              <small>{option.meta}</small>
            </button>
          ))}
        </div>
        <div className="setup-footer channel-footer">
          <p>
            We’ll use your message type to guide the content in the next step.
          </p>
          <button
            className="primary-button"
            disabled={!channel}
            onClick={onContinue}
          >
            Continue to message <Icon name="arrow" size={16} />
          </button>
        </div>
      </main>
    </div>
  )
}

const verticalTemplates: {
  id: VerticalTemplate
  name: string
  description: string
}[] = [
  {
    id: "full-bleed",
    name: "Full image",
    description: "High-impact, concise message",
  },
  {
    id: "gradient-photo",
    name: "Photo gradient",
    description: "Readable copy over imagery",
  },
  {
    id: "image-top",
    name: "Image + text",
    description: "Balanced content and image",
  },
  {
    id: "pattern-light",
    name: "Light pattern",
    description: "Text-led communication",
  },
]

const vivaTemplates: {
  id: VivaTemplate
  name: string
  description: string
}[] = [
  {
    id: "split-image",
    name: "Split image",
    description: "Message + replaceable image",
  },
  {
    id: "content-heavy",
    name: "Content heavy",
    description: "Primary + supporting content",
  },
  {
    id: "text-led",
    name: "Text led",
    description: "Announcements + updates",
  },
]

const recognitionTemplates: {
  id: RecognitionTemplate
  name: string
  description: string
}[] = [
  {
    id: "photo",
    name: "With photo",
    description: "Recognize someone with their photo",
  },
  {
    id: "no-photo",
    name: "Without photo",
    description: "A bold, text-led recognition",
  },
]

const mosaicColors: MosaicColorOption[] = [
  { id: "maize-green", name: "Maize green" },
  { id: "deep-green", name: "Deep green" },
  { id: "gray-green", name: "Gray green" },
  { id: "deep-blue", name: "Deep blue" },
  { id: "khaki", name: "Khaki" },
  { id: "sky-blue", name: "Sky blue" },
]

const mosaicPatterns: MosaicPatternOption[] = [
  { id: "none", name: "None" },
  { id: "people", name: "People" },
  { id: "helmet", name: "Helmet" },
  { id: "leaf", name: "Leaf" },
]

function MosaicLogo({ wide = false }: { wide?: boolean }) {
  return (
    <img
      className={wide ? "mosaic-logo wide" : "mosaic-logo"}
      src={wide ? "/assets/06ca4.svg" : "/assets/49e24.png"}
      alt="Mosaic"
    />
  )
}

function VivaPreview({
  data,
  template,
  showCta,
  panelColor,
  textColor,
  contentPattern,
  textPattern,
}: {
  data: CampaignData
  template: VivaTemplate
  showCta: boolean
  panelColor: MosaicColor
  textColor: MosaicColor
  contentPattern: MosaicPattern
  textPattern: MosaicPattern
}) {
  const getPatternAsset = (pattern: MosaicPattern, contentHeavy = false) => {
    if (pattern === "none") return ""
    if (pattern === "people") {
      return contentHeavy ? "/assets/98c9a.svg" : "/assets/5407e.svg"
    }
    if (pattern === "helmet") return "/assets/baf6e.svg"
    return "/assets/5cf47.svg"
  }

  if (template === "content-heavy") {
    const patternAsset = getPatternAsset(contentPattern, true)
    const points = data.bulletPoints.split("\n").filter(Boolean).slice(0, 4)
    return (
      <div
        className={`viva-artboard viva-content-system mosaic-bg-${panelColor}`}
      >
        <MosaicLogo wide />
        <section className="content-system-primary">
          <h2>{data.title}</h2>
          <p>{data.description}</p>
        </section>
        <section className="content-system-panel">
          {patternAsset && (
            <img
              className={`system-pattern pattern-${contentPattern}`}
              src={patternAsset}
              alt=""
            />
          )}
          <h3>{data.supportingHeading}</h3>
          <ul>
            {points.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        </section>
      </div>
    )
  }

  if (template === "text-led") {
    const patternAsset = getPatternAsset(textPattern)
    return (
      <div
        className={`viva-artboard viva-text-system mosaic-bg-${textColor} ${
          showCta ? "has-cta" : ""
        }`}
      >
        <MosaicLogo wide />
        {patternAsset && (
          <img
            className={`system-pattern pattern-${textPattern}`}
            src={patternAsset}
            alt=""
          />
        )}
        <section className="text-system-copy">
          <h2>{data.title}</h2>
          <p>{data.description}</p>
          {showCta && (
            <div className="viva-cta">
              <span>{data.callToAction}</span>
            </div>
          )}
        </section>
      </div>
    )
  }

  const image = data.imageUrl || "/assets/81e9f.png"

  return (
    <div
      className={`viva-artboard viva-approved-light ${
        showCta ? "has-cta" : ""
      }`}
    >
      <MosaicLogo wide />
      <section className="viva-approved-copy">
        <h2>{data.title}</h2>
        <p>{data.description}</p>
        {showCta && (
          <div className="viva-cta">
            <span>{data.callToAction}</span>
          </div>
        )}
      </section>
      <img className="viva-approved-photo" src={image} alt="" />
    </div>
  )
}

function RecognitionPreview({
  data,
  template,
}: {
  data: RecognitionData
  template: RecognitionTemplate
}) {
  const isPhotoLayout = template === "photo"
  const employeeName = `${data.firstName} ${data.lastName}`.trim()

  return (
    <div
      className={`viva-artboard recognition-artboard recognition-${template}`}
    >
      {isPhotoLayout ? (
        <>
          <section className="recognition-copy">
            <img
              className="recognition-logo recognition-logo-black"
              src="/assets/recognition/inspire-logo-black.png"
              alt="INSPIRE"
            />
            <h2>
              <span>{data.firstName}</span>
              <span>{data.lastName}</span>
            </h2>
            <p>{data.message}</p>
          </section>
          <section className="recognition-photo-panel">
            <img
              className="recognition-pattern"
              src="/assets/5407e.svg"
              alt=""
            />
            <span className="recognition-website">inspire.mosaicco.com</span>
            <div className="recognition-photo-frame">
              <img
                className={
                  data.photoUrl === RECOGNITION_SAMPLE_PHOTO
                    ? "recognition-sample-photo"
                    : ""
                }
                src={data.photoUrl}
                alt={employeeName ? `${employeeName} recognition portrait` : ""}
              />
            </div>
            <p className="recognition-hashtags">
              #InspireSpotlight | #DestacadoInspire | #DestaqueInspire |
              #Inspire聚焦
            </p>
          </section>
        </>
      ) : (
        <>
          <img
            className="recognition-pattern"
            src="/assets/5407e.svg"
            alt=""
          />
          <section className="recognition-no-photo-copy">
            <img
              className="recognition-logo recognition-logo-white"
              src="/assets/recognition/inspire-logo-white.png"
              alt="INSPIRE"
            />
            <span className="recognition-website">inspire.mosaicco.com</span>
            <h2>
              <span>{data.firstName}</span>
              <span>{data.lastName}</span>
            </h2>
            <p>{data.message}</p>
            <span className="recognition-hashtags">
              #InspireSpotlight | #DestacadoInspire | #DestaqueInspire |
              #Inspire聚焦
            </span>
          </section>
        </>
      )}
    </div>
  )
}

function RecognitionEditor({
  data,
  onData,
}: {
  data: RecognitionData
  onData: (data: RecognitionData) => void
}) {
  const [template, setTemplate] = useState<RecognitionTemplate>("photo")
  const previewRef = useRef<HTMLDivElement>(null)
  const imageInputRef = useRef<HTMLInputElement>(null)
  const [exporting, setExporting] = useState(false)

  const update = (key: keyof RecognitionData, value: string) =>
    onData({ ...data, [key]: value })

  const uploadPhoto = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (!file) return
    const reader = new FileReader()
    reader.onload = () => {
      if (typeof reader.result === "string") update("photoUrl", reader.result)
    }
    reader.readAsDataURL(file)
    event.target.value = ""
  }

  const exportJpg = async () => {
    if (!previewRef.current) return
    setExporting(true)
    try {
      await document.fonts.ready
      const fontEmbedCSS = await getFontEmbedCSS(previewRef.current)
      const url = await toJpeg(previewRef.current, {
        backgroundColor: "#ffffff",
        fontEmbedCSS,
        pixelRatio: 3,
        quality: 0.96,
      })
      const link = document.createElement("a")
      link.download = "mosaic-inspire-recognition.jpg"
      link.href = url
      link.click()
    } finally {
      setExporting(false)
    }
  }

  return (
    <div className="editor-layout">
      <aside className="field-panel">
        <div className="panel-heading">
          <p>INSPIRE recognition</p>
          <span>Viva Engage · 16:9</span>
        </div>
        <div className="field-scroll">
          <label className="editor-field">
            <span>
              <b>First name</b>
            </span>
            <input
              value={data.firstName}
              onChange={(event) => update("firstName", event.target.value)}
            />
          </label>
          <label className="editor-field">
            <span>
              <b>Last name</b>
            </span>
            <input
              value={data.lastName}
              onChange={(event) => update("lastName", event.target.value)}
            />
          </label>
          <label className="editor-field">
            <span>
              <b>Recognition message</b>
            </span>
            <textarea
              rows={5}
              value={data.message}
              onChange={(event) => update("message", event.target.value)}
            />
          </label>
          <div className="template-picker">
            <span className="template-picker-label">
              Approved layout
              <small>INSPIRE · Viva Engage</small>
            </span>
            <div className="template-options">
              {recognitionTemplates.map((option) => (
                <button
                  key={option.id}
                  className={template === option.id ? "selected" : ""}
                  aria-pressed={template === option.id}
                  onClick={() => setTemplate(option.id)}
                >
                  <span
                    className={`template-thumb thumb-recognition-${option.id}`}
                  />
                  <b>{option.name}</b>
                  <small>{option.description}</small>
                </button>
              ))}
            </div>
          </div>
          {template === "photo" && (
            <div className="campaign-image-control recognition-image-control">
              <span>
                <b>Employee photo</b>
                <small>Optional · upload a portrait</small>
              </span>
              <div>
                <button onClick={() => imageInputRef.current?.click()}>
                  {data.photoUrl === RECOGNITION_SAMPLE_PHOTO
                    ? "Upload photo"
                    : "Replace photo"}
                </button>
                {data.photoUrl !== RECOGNITION_SAMPLE_PHOTO && (
                  <button
                    onClick={() =>
                      update("photoUrl", RECOGNITION_SAMPLE_PHOTO)
                    }
                  >
                    Use sample photo
                  </button>
                )}
              </div>
              <input
                hidden
                ref={imageInputRef}
                type="file"
                accept="image/*"
                onChange={uploadPhoto}
              />
            </div>
          )}
        </div>
      </aside>
      <main className="preview-workspace">
        <div className="preview-toolbar">
          <strong>INSPIRE recognition · Live preview</strong>
        </div>
        <div className="artboard-stage viva">
          <div ref={previewRef} className="export-surface">
            <RecognitionPreview data={data} template={template} />
          </div>
        </div>
        <div className="export-bar">
          <span>Viva Engage · 1920 × 1080 px</span>
          <div className="button-row">
            <button
              className="primary-button"
              disabled={exporting}
              onClick={exportJpg}
            >
              <Icon name="download" size={15} />{" "}
              {exporting ? "Exporting…" : "Export JPG"}
            </button>
          </div>
        </div>
      </main>
    </div>
  )
}

function PosterPreview({
  data,
  template,
  backgroundColor,
}: {
  data: CampaignData
  template: VerticalTemplate
  backgroundColor: MosaicColor
}) {
  const defaults: Record<VerticalTemplate, string> = {
    "full-bleed": "/assets/e9a47.png",
    "gradient-photo": "/assets/679d8.png",
    "image-top": "/assets/06001.png",
    "pattern-light": "",
  }
  const image = data.imageUrl || defaults[template]

  if (template === "full-bleed" || template === "gradient-photo") {
    return (
      <div className={`poster-artboard poster-${template}`}>
        <img className="poster-background-image" src={image} alt="" />
        <div className="poster-photo-overlay" />
        <MosaicLogo />
        <section className="approved-poster-copy">
          <h2>{data.title}</h2>
          <p>{data.description}</p>
        </section>
      </div>
    )
  }

  if (template === "image-top") {
    return (
      <div
        className={`poster-artboard poster-image-top mosaic-bg-${backgroundColor}`}
      >
        <img className="poster-hero-image" src={image} alt="" />
        <MosaicLogo />
        <section className="approved-poster-copy">
          <h2>{data.title}</h2>
          <p>{data.description}</p>
        </section>
      </div>
    )
  }

  return (
    <div
      className={`poster-artboard poster-pattern-light mosaic-bg-${backgroundColor}`}
    >
      <MosaicLogo />
      <img className="poster-pattern-image" src="/assets/1dd2a.svg" alt="" />
      <section className="approved-poster-copy">
        <h2>{data.title}</h2>
        <p>{data.description}</p>
      </section>
    </div>
  )
}

function CampaignEditor({
  channel,
  type,
  response,
  onResponse,
  data,
  onData,
}: {
  channel: Channel
  type: CommunicationType
  response: string
  onResponse: (value: string) => void
  data: CampaignData
  onData: (data: CampaignData) => void
}) {
  const [preview, setPreview] = useState<"viva" | "poster">(
    channel === "poster" ? "poster" : "viva",
  )
  const previewRef = useRef<HTMLDivElement>(null)
  const imageInputRef = useRef<HTMLInputElement>(null)
  const [exporting, setExporting] = useState(false)
  const [verticalTemplate, setVerticalTemplate] =
    useState<VerticalTemplate>("image-top")
  const [posterColor, setPosterColor] = useState<MosaicColor>("gray-green")
  const [vivaTemplate, setVivaTemplate] = useState<VivaTemplate>("split-image")
  const [showCta, setShowCta] = useState(false)
  const [panelColor, setPanelColor] = useState<MosaicColor>("deep-blue")
  const [textColor, setTextColor] = useState<MosaicColor>("gray-green")
  const [contentPattern, setContentPattern] = useState<MosaicPattern>("people")
  const [textPattern, setTextPattern] = useState<MosaicPattern>("people")

  const update = (key: keyof CampaignData, value: string) =>
    onData({ ...data, [key]: value })

  const uploadImage = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (!file) return
    const reader = new FileReader()
    reader.onload = () => {
      if (typeof reader.result === "string") update("imageUrl", reader.result)
    }
    reader.readAsDataURL(file)
    event.target.value = ""
  }

  const exportJpg = async () => {
    if (!previewRef.current) return
    setExporting(true)
    try {
      await document.fonts.ready
      const fontEmbedCSS = await getFontEmbedCSS(previewRef.current)
      const url = await toJpeg(previewRef.current, {
        backgroundColor: "#ffffff",
        fontEmbedCSS,
        pixelRatio: 3,
        quality: 0.96,
      })
      const link = document.createElement("a")
      link.download = `mosaic-${preview}-${type.toLowerCase().replace(/\s+/g, "-")}.jpg`
      link.href = url
      link.click()
    } finally {
      setExporting(false)
    }
  }

  const exportPosterPdf = () => {
    const artboard = previewRef.current?.firstElementChild
    if (!artboard) return
    const printWindow = window.open("", "_blank", "width=900,height=1200")
    if (!printWindow) return
    const styles = Array.from(
      document.head.querySelectorAll("style, link[rel='stylesheet']"),
    )
      .map((node) => node.outerHTML)
      .join("")
    printWindow.document.write(
      `<html><head>${styles}<style>@page{size:letter portrait;margin:0}html,body{margin:0;width:8.5in;height:11in;overflow:hidden}.poster-artboard{width:8.5in!important;height:11in!important;aspect-ratio:auto!important}</style></head><body>${artboard.outerHTML}</body></html>`,
    )
    printWindow.document.close()
    printWindow.onload = () => printWindow.print()
  }

  const fields: {
    key: keyof CampaignData
    label: string
    multiline?: boolean
    hint?: string
  }[] = [
    { key: "eyebrow", label: "Topic label", hint: `${data.eyebrow.length}/32` },
    { key: "title", label: "Headline", hint: `${data.title.length}/52` },
    {
      key: "description",
      label: "Short description",
      multiline: true,
      hint: `${data.description.length}/150`,
    },
    { key: "date", label: "Date or timing" },
    { key: "location", label: "Audience or location" },
    { key: "callToAction", label: "Call to action", hint: response },
    {
      key: "supportingCopy",
      label: "Viva Engage post copy",
      multiline: true,
      hint: `${data.supportingCopy.length}/500`,
    },
    {
      key: "supportingHeading",
      label: "Supporting heading",
      hint: `${data.supportingHeading.length}/60`,
    },
    {
      key: "bulletPoints",
      label: "Supporting points",
      multiline: true,
      hint: "One per line · up to 4",
    },
  ]

  const visibleFields = fields.filter((field) => {
    if (preview === "poster") {
      return !["supportingHeading", "bulletPoints"].includes(field.key)
    }
    if (field.key === "supportingCopy") return true
    if (vivaTemplate === "content-heavy") {
      return [
        "title",
        "description",
        "supportingHeading",
        "bulletPoints",
      ].includes(field.key)
    }
    if (field.key === "callToAction") return showCta
    return ["title", "description"].includes(field.key)
  })

  return (
    <div className="editor-layout">
      <aside className="field-panel">
        <div className="panel-heading">
          <p>{type}</p>
          <span>{response}</span>
        </div>
        <div className="field-scroll">
          <label className="editor-field campaign-response-field">
            <span>
              <b>Desired response</b>
              <small>What should employees do?</small>
            </span>
            <select
              className="campaign-response-select"
              value={response}
              onChange={(event) => onResponse(event.target.value)}
            >
              {responseOptions.map((option) => (
                <option key={option}>{option}</option>
              ))}
            </select>
          </label>
          <div className="template-picker">
            <span className="template-picker-label">
              Approved layout
              <small>
                {preview === "viva" ? "16:9 Viva Engage" : "US Letter"}
              </small>
            </span>
            <div className="template-options">
              {(preview === "viva" ? vivaTemplates : verticalTemplates).map(
                (template) => {
                  const selected =
                    preview === "viva"
                      ? vivaTemplate === template.id
                      : verticalTemplate === template.id
                  return (
                    <button
                      key={template.id}
                      className={selected ? "selected" : ""}
                      onClick={() => {
                        if (preview === "viva") {
                          setVivaTemplate(template.id as VivaTemplate)
                        } else {
                          setVerticalTemplate(template.id as VerticalTemplate)
                        }
                      }}
                    >
                      <span className={`template-thumb thumb-${template.id}`} />
                      <b>{template.name}</b>
                      <small>{template.description}</small>
                    </button>
                  )
                },
              )}
            </div>
          </div>
          {preview === "viva" && vivaTemplate !== "content-heavy" && (
            <div className="template-property">
              <span>
                <b>Call to action</b>
                <small>Optional component property</small>
              </span>
              <button
                className={`property-switch ${showCta ? "on" : ""}`}
                aria-pressed={showCta}
                onClick={() => setShowCta((current) => !current)}
              >
                <span />
                {showCta ? "On" : "Off"}
              </button>
            </div>
          )}
          {preview === "viva" && vivaTemplate !== "split-image" && (
            <>
              <div className="template-property">
                <span>
                  <b>
                    {vivaTemplate === "content-heavy"
                      ? "Side panel color"
                      : "Background color"}
                  </b>
                  <small>Mosaic Design System</small>
                </span>
                <div className="property-choice-grid colors">
                  {mosaicColors.map((color) => {
                    const selectedColor =
                      vivaTemplate === "content-heavy" ? panelColor : textColor
                    return (
                      <button
                        key={color.id}
                        className={selectedColor === color.id ? "selected" : ""}
                        onClick={() =>
                          vivaTemplate === "content-heavy"
                            ? setPanelColor(color.id)
                            : setTextColor(color.id)
                        }
                      >
                        <span className={`color-dot mosaic-bg-${color.id}`} />
                        {color.name}
                      </button>
                    )
                  })}
                </div>
              </div>
              <div className="template-property">
                <span>
                  <b>Background pattern</b>
                  <small>Approved icon system</small>
                </span>
                <div className="property-choice-grid patterns">
                  {mosaicPatterns.map((pattern) => {
                    const selectedPattern =
                      vivaTemplate === "content-heavy"
                        ? contentPattern
                        : textPattern
                    return (
                      <button
                        key={pattern.id}
                        className={
                          selectedPattern === pattern.id ? "selected" : ""
                        }
                        onClick={() =>
                          vivaTemplate === "content-heavy"
                            ? setContentPattern(pattern.id)
                            : setTextPattern(pattern.id)
                        }
                      >
                        {pattern.name}
                      </button>
                    )
                  })}
                </div>
              </div>
            </>
          )}
          {preview === "poster" &&
            (verticalTemplate === "image-top" ||
              verticalTemplate === "pattern-light") && (
              <div className="template-property">
                <span>
                  <b>Background color</b>
                  <small>Mosaic Design System</small>
                </span>
                <div className="property-choice-grid colors">
                  {mosaicColors.map((color) => (
                    <button
                      key={color.id}
                      className={posterColor === color.id ? "selected" : ""}
                      onClick={() => setPosterColor(color.id)}
                    >
                      <span className={`color-dot mosaic-bg-${color.id}`} />
                      {color.name}
                    </button>
                  ))}
                </div>
              </div>
            )}
          {((preview === "poster" && verticalTemplate !== "pattern-light") ||
            (preview === "viva" && vivaTemplate === "split-image")) && (
            <div className="campaign-image-control">
              <span>
                <b>Campaign image</b>
                <small>Optional · approved photo</small>
              </span>
              <div>
                <button onClick={() => imageInputRef.current?.click()}>
                  {data.imageUrl ? "Replace image" : "Upload image"}
                </button>
                {data.imageUrl && (
                  <button onClick={() => update("imageUrl", "")}>
                    Use template image
                  </button>
                )}
              </div>
              <input
                hidden
                ref={imageInputRef}
                type="file"
                accept="image/*"
                onChange={uploadImage}
              />
            </div>
          )}
          {visibleFields.map((field, index) => (
            <label className="editor-field" key={field.key}>
              <span>
                <b>
                  {index + 1}. {field.label}
                </b>
                <small>{field.hint}</small>
              </span>
              {field.multiline ? (
                <textarea
                  value={data[field.key]}
                  rows={field.key === "supportingCopy" ? 4 : 3}
                  onChange={(e) => update(field.key, e.target.value)}
                />
              ) : (
                <input
                  value={data[field.key]}
                  onChange={(e) => update(field.key, e.target.value)}
                />
              )}
            </label>
          ))}
        </div>
      </aside>
      <main className="preview-workspace">
        <div className="preview-toolbar">
          <div className="preview-tabs">
            {channel !== "poster" && (
              <button
                className={preview === "viva" ? "active" : ""}
                onClick={() => setPreview("viva")}
              >
                Viva Engage
              </button>
            )}
            {channel !== "viva" && (
              <button
                className={preview === "poster" ? "active" : ""}
                onClick={() => setPreview("poster")}
              >
                Poster
              </button>
            )}
          </div>
        </div>
        <div className={`artboard-stage ${preview}`}>
          <div ref={previewRef} className="export-surface">
            {preview === "viva" ? (
              <VivaPreview
                data={data}
                template={vivaTemplate}
                showCta={showCta}
                panelColor={panelColor}
                textColor={textColor}
                contentPattern={contentPattern}
                textPattern={textPattern}
              />
            ) : (
              <PosterPreview
                data={data}
                template={verticalTemplate}
                backgroundColor={posterColor}
              />
            )}
          </div>
        </div>
        {preview === "viva" && (
          <div className="post-copy-card">
            <div>
              <strong>Suggested post copy</strong>
              <span>Supporting details stay outside the graphic.</span>
            </div>
            <p>{data.supportingCopy}</p>
          </div>
        )}
        <div className="export-bar">
          <span>
            {preview === "viva"
              ? "Widescreen · 1920 × 1080 px"
              : "US Letter · 8.5 × 11 in"}
          </span>
          <div className="button-row">
            {preview === "poster" && (
              <button className="secondary-button" onClick={exportPosterPdf}>
                Export PDF
              </button>
            )}
            <button
              className="primary-button"
              disabled={exporting}
              onClick={exportJpg}
            >
              <Icon name="download" size={15} />{" "}
              {exporting ? "Exporting…" : "Export JPG"}
            </button>
          </div>
        </div>
      </main>
    </div>
  )
}

function FactSheetEditor({
  data,
  onData,
}: {
  data: FactSheetData
  onData: (data: FactSheetData) => void
}) {
  const sheetRef = useRef<HTMLDivElement>(null)
  const previewAreaRef = useRef<HTMLDivElement>(null)
  const fileRef = useRef<HTMLInputElement>(null)
  const [scale, setScale] = useState(0.65)
  const [exporting, setExporting] = useState(false)

  const computeScale = useCallback(() => {
    if (!previewAreaRef.current) return
    const width = previewAreaRef.current.clientWidth - 96
    const height = previewAreaRef.current.clientHeight - 96
    setScale(Math.min(width / PAGE_W, height / PAGE_H, 0.72))
  }, [])

  useEffect(() => {
    computeScale()
    window.addEventListener("resize", computeScale)
    return () => window.removeEventListener("resize", computeScale)
  }, [computeScale])

  const update = (key: keyof FactSheetData, value: string) =>
    onData({ ...data, [key]: value })

  const uploadPhoto = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (!file) return
    const reader = new FileReader()
    reader.onload = () =>
      typeof reader.result === "string" &&
      update("facilityPhotoUrl", reader.result)
    reader.readAsDataURL(file)
  }

  const exportJpg = async () => {
    if (!sheetRef.current) return
    setExporting(true)
    try {
      await document.fonts.ready
      const fontEmbedCSS = await getFontEmbedCSS(sheetRef.current)
      const url = await toJpeg(sheetRef.current, {
        width: PAGE_W,
        height: PAGE_H,
        pixelRatio: 3,
        quality: 0.96,
        backgroundColor: "#ffffff",
        fontEmbedCSS,
      })
      const link = document.createElement("a")
      link.download = "mosaic-site-fact-sheet.jpg"
      link.href = url
      link.click()
    } finally {
      setExporting(false)
    }
  }

  const printPdf = () => {
    if (!sheetRef.current) return
    const printWindow = window.open("", "_blank", "width=900,height=1200")
    if (!printWindow) return
    const styles = Array.from(
      document.head.querySelectorAll("style, link[rel='stylesheet']"),
    )
      .map((node) => node.outerHTML)
      .join("")
    printWindow.document.write(
      `<html><head>${styles}<style>@page{size:A4;margin:0}body{margin:0}</style></head><body>${sheetRef.current.outerHTML}</body></html>`,
    )
    printWindow.document.close()
    printWindow.onload = () => printWindow.print()
  }

  return (
    <div className="editor-layout">
      <aside className="field-panel">
        <div className="panel-heading">
          <p>Site fact sheet</p>
          <span>Content fields · Design locked</span>
        </div>
        <div className="field-scroll">
          <label className="editor-field">
            <span>
              <b>Facility photo</b>
              <small>Landscape image</small>
            </span>
            <button
              className="upload-button"
              onClick={() => fileRef.current?.click()}
            >
              {data.facilityPhotoUrl ? "Replace photo" : "Upload photo"}
            </button>
            <input
              ref={fileRef}
              hidden
              type="file"
              accept="image/*"
              onChange={uploadPhoto}
            />
          </label>
          {factFields.map((field, index) => (
            <label className="editor-field" key={field.key}>
              <span>
                <b>
                  {index + 1}. {field.label}
                </b>
              </span>
              {field.multiline ? (
                <textarea
                  rows={3}
                  value={data[field.key]}
                  onChange={(e) => update(field.key, e.target.value)}
                />
              ) : (
                <input
                  value={data[field.key]}
                  onChange={(e) => update(field.key, e.target.value)}
                />
              )}
            </label>
          ))}
          <button
            className="reset-button"
            onClick={() => onData(DEFAULT_FACT_DATA)}
          >
            Reset to defaults
          </button>
        </div>
      </aside>
      <main className="preview-workspace fact-workspace">
        <div className="preview-toolbar">
          <strong>Live preview</strong>
        </div>
        <div ref={previewAreaRef} className="fact-stage">
          <div
            style={{
              width: PAGE_W * scale,
              height: PAGE_H * scale,
              position: "relative",
            }}
          >
            <div
              style={{
                transform: `scale(${scale})`,
                transformOrigin: "top left",
                position: "absolute",
                boxShadow: "0 12px 35px rgba(24, 42, 50, .14)",
              }}
            >
              <FactSheet ref={sheetRef} data={data} />
            </div>
          </div>
        </div>
        <div className="export-bar">
          <span>US Letter · Brand-approved layout</span>
          <div className="button-row">
            <button className="secondary-button" onClick={printPdf}>
              Export PDF
            </button>
            <button
              className="primary-button"
              disabled={exporting}
              onClick={exportJpg}
            >
              <Icon name="download" size={15} />{" "}
              {exporting ? "Exporting…" : "Export JPG"}
            </button>
          </div>
        </div>
      </main>
    </div>
  )
}

export default function App() {
  const [view, setView] = useState<View>("home")
  const [channel, setChannel] = useState<Channel | null>(null)
  const [communicationType, setCommunicationType] =
    useState<CommunicationType | null>(null)
  const [response, setResponse] = useState("Learn more")
  const [campaignData, setCampaignData] = useState(DEFAULT_CAMPAIGN)
  const [recognitionData, setRecognitionData] = useState(
    DEFAULT_RECOGNITION_DATA,
  )
  const [factData, setFactData] = useState(DEFAULT_FACT_DATA)

  const goHome = () => setView("home")

  const title =
    view === "home"
      ? "Create communication"
      : view === "setup"
        ? "Choose output"
        : view === "factsheet"
          ? "Site fact sheet"
          : communicationType ?? "Create communication"

  return (
    <div className="app-shell">
      <div className="app-main">
        <Header
          onHome={goHome}
          crumbs={
            view === "home"
              ? ["Home", title]
              : view === "setup"
                ? ["Create", communicationType ?? "Communication", title]
                : ["Create", title]
          }
          action={
            view !== "home" ? (
              <button className="text-button" onClick={goHome}>
                Save & close
              </button>
            ) : (
              <button
                className="header-create-button"
                aria-label="Create communication"
                onClick={goHome}
              >
                <img src="/assets/89657.svg" alt="" />
              </button>
            )
          }
        />
        <div className={`app-content ${view === "home" ? "home-content" : ""}`}>
          {view === "home" && (
            <Home
              selectedType={communicationType}
              onType={(type) => {
                setCommunicationType(type)
                setChannel(null)
                setResponse("Learn more")
              }}
              onContinue={() => {
                if (communicationType === "Recognition") {
                  setChannel("viva")
                  setView("campaign")
                } else {
                  setView("setup")
                }
              }}
              onFactSheet={() => setView("factsheet")}
            />
          )}
          {view === "setup" && communicationType && (
            <OutputSelection
              channel={channel}
              type={communicationType}
              onChannel={setChannel}
              onContinue={() => {
                if (channel) setView("campaign")
              }}
            />
          )}
          {view === "campaign" &&
            channel === "viva" &&
            communicationType === "Recognition" && (
              <RecognitionEditor
                data={recognitionData}
                onData={setRecognitionData}
              />
            )}
          {view === "campaign" &&
            channel &&
            communicationType &&
            communicationType !== "Recognition" && (
              <CampaignEditor
                channel={channel}
                type={communicationType}
                response={response}
                onResponse={setResponse}
                data={campaignData}
                onData={setCampaignData}
              />
            )}
          {view === "factsheet" && (
            <FactSheetEditor data={factData} onData={setFactData} />
          )}
        </div>
      </div>
    </div>
  )
}
