import { forwardRef } from "react"
import imgLogoTab from "@/imports/EditableFactSheetApp/85bb0f90b6d6b1a7fe67b6f3f20787409c3dd744.png"
import imgDefaultPhoto from "@/imports/EditableFactSheetApp/e42587ddd4e5acdc0675039c91f07b1244f54a52.png"
import svgPaths from "@/imports/InfographicMosaicSkEconomicImpact/svg-tecvhvavyo"

// A4 at 96 dpi
export const PAGE_W = 794
export const PAGE_H = 1123

// ── exact values from the Figma import ──────────────────────────────────────
const LABEL_SIZE = 17.311 // field subheading px
const LABEL_COLOR = "#3c3c3c"
const LABEL_TRACK = "-0.5193px"
const LABEL_LH = "25.966px"
const VALUE_SIZE = 12.502 // field body px
const VALUE_LH = "18.128px"
const SECTION_PY = 8.655 // vertical padding per field row
const HORIZ_PAD = 52 // left padding (≈ logo left offset)
// ────────────────────────────────────────────────────────────────────────────

export interface FactSheetData {
  facilityName: string
  facilityPhotoUrl: string
  overview: string
  facilityLocation: string
  yearOperationsBegan: string
  activities: string
  capacity: string
  averageProduction: string
  products: string
  finishedProductDestination: string
  modeOfTransportation: string
  employees: string
  keyHighlight: string
}

interface FactSheetField {
  key: keyof FactSheetData
  label: string
}

const FIELDS: FactSheetField[] = [
  { key: "facilityLocation", label: "Facility location" },
  { key: "yearOperationsBegan", label: "Year operations began" },
  { key: "activities", label: "Activities" },
  { key: "capacity", label: "Capacity" },
  { key: "averageProduction", label: "Average production (annual)" },
  { key: "products", label: "Products" },
  { key: "finishedProductDestination", label: "Finished product destination" },
  { key: "modeOfTransportation", label: "Mode of transportation" },
  { key: "employees", label: "Employees" },
]

// ── Social icon helpers ──────────────────────────────────────────────────────
function Facebook() {
  return (
    <div
      style={{
        width: 22,
        height: 22,
        position: "relative",
        overflow: "hidden",
        flexShrink: 0,
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "8.33%",
          bottom: "8.33%",
          left: "29.17%",
          right: "29.17%",
        }}
      >
        <svg
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
          }}
          fill="none"
          viewBox="0 0 10 20"
        >
          <path
            clipRule="evenodd"
            d={svgPaths.p3a648400}
            fill="white"
            fillRule="evenodd"
          />
        </svg>
      </div>
    </div>
  )
}

function Linkedin() {
  return (
    <div
      style={{
        width: 22,
        height: 22,
        position: "relative",
        overflow: "hidden",
        flexShrink: 0,
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "8.33%",
          bottom: "16.67%",
          left: "8.33%",
          right: "8.33%",
        }}
      >
        <svg
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
          }}
          fill="none"
          viewBox="0 0 20 18"
        >
          <path
            clipRule="evenodd"
            d={svgPaths.pf768280}
            fill="white"
            fillRule="evenodd"
          />
          <path
            clipRule="evenodd"
            d={svgPaths.p18257500}
            fill="white"
            fillRule="evenodd"
          />
          <path d={svgPaths.p26160c00} fill="white" />
        </svg>
      </div>
    </div>
  )
}

function Instagram() {
  return (
    <div
      style={{
        width: 22,
        height: 22,
        position: "relative",
        overflow: "hidden",
        flexShrink: 0,
      }}
    >
      <div style={{ position: "absolute", inset: "12.5%" }}>
        <svg
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
          }}
          fill="none"
          viewBox="0 0 18 18"
        >
          <path
            clipRule="evenodd"
            d={svgPaths.p166ba780}
            fill="white"
            fillRule="evenodd"
          />
        </svg>
      </div>
    </div>
  )
}

function XIcon() {
  return (
    <div
      style={{
        width: 22,
        height: 22,
        position: "relative",
        overflow: "hidden",
        flexShrink: 0,
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "8.33%",
          bottom: "8.33%",
          left: "4.17%",
          right: "8.33%",
        }}
      >
        <svg
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
          }}
          fill="none"
          viewBox="0 0 21 20"
        >
          <path d={svgPaths.p33f42600} fill="white" />
        </svg>
      </div>
    </div>
  )
}

// ── Main component ───────────────────────────────────────────────────────────
interface Props {
  data: FactSheetData
}

const HEADER_H = 211 // matches Figma Container29 height

const FactSheet = forwardRef<HTMLDivElement, Props>(({ data }, ref) => {
  const photoSrc = data.facilityPhotoUrl || imgDefaultPhoto

  return (
    <div
      ref={ref}
      id="fact-sheet-print"
      style={{
        width: PAGE_W,
        height: PAGE_H,
        fontFamily: "'Open Sans', sans-serif",
        overflow: "hidden",
        position: "relative",
        backgroundColor: "#fff",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* ── HEADER: photo + gradient + logo ─────────────────────── */}
      <div
        style={{
          position: "relative",
          width: "100%",
          height: HEADER_H,
          flexShrink: 0,
          overflow: "hidden",
        }}
      >
        {/* Facility photo as real <img> so html2canvas captures it */}
        <img
          alt=""
          src={photoSrc}
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center",
            display: "block",
          }}
        />
        {/* Gradient overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundColor: "rgba(255,255,255,0)",
          }}
        />
        {/* Logo — left offset = 50% of its width (106.75px → left ≈ 53px) */}
        <img
          alt="Mosaic logo"
          src={imgLogoTab}
          style={{
            position: "absolute",
            top: 0,
            left: 52.89,
            width: 106.75,
            height: 99.056,
            objectFit: "contain",
            display: "block",
          }}
        />
      </div>

      {/* ── FACILITY NAME ────────────────────────────────────────── */}
      <div
        style={{
          flexShrink: 0,
          backgroundColor: "#fff",
          paddingLeft: HORIZ_PAD,
          paddingRight: HORIZ_PAD,
          paddingTop: 24,
          paddingBottom: 24,
        }}
      >
        <p
          style={{
            fontSize: 48,
            fontWeight: 400,
            color: "#000",
            letterSpacing: "-2.4px",
            lineHeight: "normal",
            margin: 0,
          }}
        >
          {data.facilityName}
        </p>
      </div>

      {/* ── OVERVIEW + KEY HIGHLIGHT (side-by-side) ──────────────── */}
      <div
        style={{
          flexShrink: 0,
          backgroundColor: "#fff",
          display: "flex",
          gap: 23.081,
          paddingLeft: HORIZ_PAD,
          paddingRight: HORIZ_PAD,
          paddingTop: 6,
          paddingBottom: 6,
        }}
      >
        {/* Overview */}
        <div style={{ flex: "1 0 0", minWidth: 0 }}>
          <p
            style={{
              fontSize: 24,
              fontWeight: 400,
              color: "#f0be10",
              letterSpacing: "-1.2px",
              lineHeight: "normal",
              margin: 0,
            }}
          >
            Overview
          </p>
          <div style={{ paddingTop: 7.694 }}>
            <p
              style={{
                fontSize: 14,
                fontWeight: 300,
                fontStyle: "normal",
                color: "#1e1e1e",
                lineHeight: "normal",
                margin: 0,
              }}
            >
              {data.overview}
            </p>
          </div>
        </div>

        {/* Key highlight */}
        <div style={{ flex: "1 0 0", minWidth: 0 }}>
          <p
            style={{
              fontSize: 24,
              fontWeight: 400,
              color: "#f0be10",
              letterSpacing: "-1.2px",
              lineHeight: "normal",
              margin: 0,
            }}
          >
            Key highlight
          </p>
          <div style={{ paddingTop: 7.694 }}>
            <p
              style={{
                fontSize: 14,
                fontWeight: 300,
                fontStyle: "normal",
                color: "#1e1e1e",
                lineHeight: "normal",
                margin: 0,
              }}
            >
              {data.keyHighlight}
            </p>
          </div>
        </div>
      </div>

      {/* ── FACT FIELDS (single full-width column) ───────────────── */}
      <div
        style={{
          flex: 1,
          backgroundColor: "#fff",
          borderRight: "0.962px solid #ddeaf3",
          overflowY: "hidden",
          paddingLeft: HORIZ_PAD,
          paddingRight: 38.468,
          paddingBottom: 6,
        }}
      >
        {FIELDS.map(({ key, label }, i) => (
          <div
            key={key}
            style={{
              paddingTop: SECTION_PY,
              paddingBottom: SECTION_PY,
              borderBottom:
                i < FIELDS.length - 1 ? "0.962px solid #e8f0f5" : "none",
            }}
          >
            <p
              style={{
                fontSize: LABEL_SIZE,
                fontWeight: 400,
                color: LABEL_COLOR,
                letterSpacing: LABEL_TRACK,
                lineHeight: LABEL_LH,
                margin: 0,
              }}
            >
              {label}
            </p>
            <div style={{ paddingTop: 2.885 }}>
              <p
                style={{
                  fontSize: VALUE_SIZE,
                  fontWeight: 400,
                  color: "#1e1e1e",
                  lineHeight: VALUE_LH,
                  margin: 0,
                }}
              >
                {data[key] as string}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
})

FactSheet.displayName = "FactSheet"
export default FactSheet
