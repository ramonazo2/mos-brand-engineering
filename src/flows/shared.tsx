import { useLayoutEffect, useState } from "react"
import type { FactSheetData } from "../FactSheet"

export type View = "home" | "setup" | "campaign" | "factsheet"
export type Channel = "viva" | "poster" | "both"
export type CommunicationType = "Event promotion" | "Recognition (Inspire)" | "Announcements & campaigns"
export type CreationType = CommunicationType | "Site fact sheet"

export type IconName = "home" | "plus" | "document" | "template" | "settings" | "viva" | "poster" | "both" | "fact" | "arrow" | "check" | "download"

export interface CampaignData {
  eyebrow: string
  title: string
  description: string
  date: string
  location: string
  callToAction: string
  supportingHeading: string
  bulletPoints: string
  imageUrl: string
}

export type VerticalTemplate = "full-bleed" | "gradient-photo" | "image-top" | "pattern-light"

export type VivaTemplate = "split-image" | "content-heavy" | "text-led"
export type RecognitionTemplate = "photo" | "no-photo"
export type MosaicColor = "maize-green" | "deep-green" | "gray-green" | "deep-blue" | "khaki" | "sky-blue"
export type MosaicPattern = "none" | "people" | "helmet" | "Heart"

export interface RecognitionData {
  name: string
  role: string
  message: string
  photoUrl: string
}

export interface CommunicationOption {
  title: CreationType
  description: string
}

export interface ChannelOption {
  id: Channel
  title: string
  description: string
  meta: string
}

export interface IconProps {
  name: IconName
  size?: number
}

export interface MosaicColorOption {
  id: MosaicColor
  name: string
}

export interface MosaicPatternOption {
  id: MosaicPattern
  name: string
}

export const DEFAULT_FACT_DATA: FactSheetData = {
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

export const DEFAULT_CAMPAIGN: CampaignData = {
  eyebrow: "Security update",
  title: "Headline 2 lines max",
  description:
    "Short description 3–4 lines max. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.",
  date: "",
  location: "All Mosaic employees",
  callToAction: "Learn more",
  supportingHeading: "Additional Copy/Supporting Heading",
  bulletPoints:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit.\nSed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\nUt enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
  imageUrl: "",
}

export const DEFAULT_EVENT_CAMPAIGN: CampaignData = {
  ...DEFAULT_CAMPAIGN,
  title: "Event headline",
  description: "Join us for an upcoming event. Add RSVP details here.",
  location: "",
  callToAction: "CTA Placeholder",
}

export const RECOGNITION_SAMPLE_PHOTO =
  "/assets/recognition/recognition-sample-photo.jpg"

export const DEFAULT_RECOGNITION_DATA: RecognitionData = {
  name: "Name",
  role: "Role",
  message:
    "Recognizing your outstanding contributions, dedication, and commitment to excellence. Your efforts make a meaningful difference and help inspire those around you.",
  photoUrl: RECOGNITION_SAMPLE_PHOTO,
}

export const communicationTypes: CommunicationOption[] = [
  {
    title: "Event promotion",
    description: "Invite employees to an event or gathering.",
  },
  {
    title: "Announcements & campaigns",
    description: "Share updates, programs, surveys, and other internal communications.",
  },
  {
    title: "Recognition (Inspire)",
    description: "Celebrate a person, team or achievement.",
  },
  {
    title: "Site fact sheet",
    description: "Share key information about a site or facility.",
  },
]

export const channelOptions: ChannelOption[] = [
  {
    id: "viva",
    title: "Viva Engage",
    description: "A widescreen graphic for your message.",
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

export const responseOptions = [
  "Be aware — no action required",
  "Learn more",
  "Register or RSVP",
  "Attend",
  "Complete a task",
  "Contact someone",
]

export const campaignCtaOptions = ["Learn more", "Take the survey", "Vote now", "Register"]

export const factFields: {
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

export function Icon({ name, size = 18 }: IconProps) {
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

export const verticalTemplates: {
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
    name: "Text led",
    description: "No image, pure copy",
  },
]

export const vivaTemplates: {
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

export const recognitionTemplates: {
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

export const mosaicColors: MosaicColorOption[] = [
  { id: "maize-green", name: "Maize green" },
  { id: "deep-green", name: "Deep green" },
  { id: "gray-green", name: "Gray green" },
  { id: "deep-blue", name: "Deep blue" },
  { id: "khaki", name: "Khaki" },
  { id: "sky-blue", name: "Sky blue" },
]

export const mosaicPatterns: MosaicPatternOption[] = [
  { id: "none", name: "None" },
  { id: "people", name: "People" },
  { id: "helmet", name: "Helmet" },
  { id: "heart", name: "Heart" },
]

export function MosaicLogo({ wide = false }: { wide?: boolean }) {
  return (
    <img
      className={wide ? "mosaic-logo wide" : "mosaic-logo"}
      src={wide ? "/assets/06ca4.svg" : "/assets/49e24.png"}
      alt="Mosaic"
    />
  )
}

export function useVivaCopyFit(
  previewRef: React.RefObject<HTMLDivElement | null>,
  enabled: boolean,
  contentKey: string,
) {
  const [contentTooLong, setContentTooLong] = useState(false)

  useLayoutEffect(() => {
    if (!enabled) {
      setContentTooLong(false)
      return
    }

    const artboard = previewRef.current?.querySelector<HTMLElement>(".viva-artboard")
    if (!artboard) return

    const regions = Array.from(artboard.querySelectorAll<HTMLElement>(
      ".viva-approved-copy, .text-system-copy, .content-system-primary h2, .content-system-primary p, .content-system-panel h3, .content-system-panel ul, .viva-cta, .recognition-copy, .recognition-no-photo-copy h2, .recognition-no-photo-copy > p",
    ))
    let active = true
    const fitCopy = () => {
      if (!active) return
      const fits = (scale: number) => {
        artboard.style.setProperty("--viva-copy-scale", String(scale))
        return regions.every((region) =>
          region.scrollHeight <= region.clientHeight + 1 &&
          region.scrollWidth <= region.clientWidth + 1,
        )
      }
      if (fits(1.5)) {
        setContentTooLong(false)
        return
      }
      if (!fits(0.6)) {
        setContentTooLong(true)
        return
      }
      let low = 0.6
      let high = 1.5
      for (let iteration = 0; iteration < 10; iteration++) {
        const middle = (low + high) / 2
        if (fits(middle)) low = middle
        else high = middle
      }
      fits(low)
      setContentTooLong(false)
    }
    const observer = new ResizeObserver(fitCopy)
    observer.observe(artboard)
    window.addEventListener("resize", fitCopy)
    fitCopy()
    void document.fonts.ready.then(fitCopy)
    document.fonts.addEventListener("loadingdone", fitCopy)
    return () => {
      active = false
      observer.disconnect()
      window.removeEventListener("resize", fitCopy)
      document.fonts.removeEventListener("loadingdone", fitCopy)
    }
  }, [previewRef, enabled, contentKey])

  return contentTooLong
}

