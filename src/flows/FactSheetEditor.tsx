import { useCallback, useEffect, useRef, useState } from "react"
import { getFontEmbedCSS, toJpeg } from "html-to-image"
import FactSheet, { PAGE_H, PAGE_W, type FactSheetData } from "../FactSheet"
import { Icon, factFields, DEFAULT_FACT_DATA } from "./shared"

export default function FactSheetEditor({
  breadcrumbs,
  data,
  onData,
}: {
  breadcrumbs: React.ReactNode
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
          {breadcrumbs}
          <strong>Site fact sheet</strong>
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

