import { useLayoutEffect, useRef, useState } from "react"
import { getFontEmbedCSS, toJpeg } from "html-to-image"
import { jsPDF } from "jspdf"
import { Icon, MosaicLogo, useVivaCopyFit, verticalTemplates, vivaTemplates, mosaicColors, mosaicPatterns, responseOptions, campaignCtaOptions, type CampaignData, type Channel, type CommunicationType, type VerticalTemplate, type VivaTemplate, type MosaicColor, type MosaicPattern } from "./shared"

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
    const points = data.bulletPoints.split("\n").filter(Boolean)
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

function PosterPreview({
  data,
  template,
  backgroundColor,
  isEvent,
}: {
  data: CampaignData
  template: VerticalTemplate
  backgroundColor: MosaicColor
  isEvent: boolean
}) {
  const defaults: Record<VerticalTemplate, string> = {
    "full-bleed": "/assets/e9a47.png",
    "gradient-photo": "/assets/679d8.png",
    "image-top": "/assets/06001.png",
    "pattern-light": "",
  }
  const image = data.imageUrl || defaults[template]
  const copy = (
    <section
      className={`approved-poster-copy ${isEvent ? "event-poster-copy" : ""}`}
    >
      <h2>{data.title}</h2>
      <p className={isEvent ? "event-poster-description" : undefined}>
        {data.description}
      </p>
      {isEvent && data.date.trim() && (
        <div className="event-poster-date">{data.date}</div>
      )}
      {isEvent && data.location.trim() && (
        <div className="event-poster-location">{data.location}</div>
      )}
    </section>
  )

  if (template === "full-bleed" || template === "gradient-photo") {
    return (
      <div
        className={`poster-artboard poster-${template} ${isEvent ? "poster-event" : ""}`}
      >
        <img className="poster-background-image" src={image} alt="" />
        <div className="poster-photo-overlay" />
        <MosaicLogo />
        {copy}
      </div>
    )
  }

  if (template === "image-top") {
    return (
      <div
        className={`poster-artboard poster-image-top mosaic-bg-${backgroundColor} ${isEvent ? "poster-event" : ""}`}
      >
        <img className="poster-hero-image" src={image} alt="" />
        <MosaicLogo />
        {copy}
      </div>
    )
  }

  return (
    <div
      className={`poster-artboard poster-pattern-light mosaic-bg-${backgroundColor} ${isEvent ? "poster-event" : ""}`}
    >
      <MosaicLogo />
      <img className="poster-pattern-image" src="/assets/1dd2a.svg" alt="" />
      {copy}
    </div>
  )
}

export default function CampaignEditor({
  breadcrumbs,
  channel,
  type,
  response,
  onResponse,
  data,
  onData,
}: {
  breadcrumbs: React.ReactNode
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
  const [exporting, setExporting] = useState<"jpg" | "pdf" | null>(null)
  const [verticalTemplate, setVerticalTemplate] =
    useState<VerticalTemplate>("image-top")
  const [posterColor, setPosterColor] = useState<MosaicColor>("gray-green")
  const [vivaTemplate, setVivaTemplate] = useState<VivaTemplate>("split-image")
  const [showCta, setShowCta] = useState(false)
  const [panelColor, setPanelColor] = useState<MosaicColor>("deep-blue")
  const [textColor, setTextColor] = useState<MosaicColor>("gray-green")
  const [contentPattern, setContentPattern] = useState<MosaicPattern>("people")
  const [textPattern, setTextPattern] = useState<MosaicPattern>("people")
  const [posterContentTooLong, setPosterContentTooLong] = useState(false)
  const vivaContentTooLong = useVivaCopyFit(
    previewRef,
    preview === "viva",
    JSON.stringify([vivaTemplate, showCta, data.title, data.description, data.callToAction, data.supportingHeading, data.bulletPoints]),
  )
  const isEventPoster = type === "Event promotion" && preview === "poster"

  useLayoutEffect(() => {
    if (preview !== "poster") {
      setPosterContentTooLong(false)
      return
    }

    const artboard =
      previewRef.current?.querySelector<HTMLElement>(".poster-artboard")
    const copy = previewRef.current?.querySelector<HTMLElement>(
      ".approved-poster-copy",
    )
    if (!artboard || !copy) return

    let active = true
    const fitCopy = () => {
      if (!active) return
      const fits = (scale: number) => {
        copy.style.setProperty("--poster-copy-scale", String(scale))
        return copy.scrollHeight <= copy.clientHeight + 1
      }
      const maximum = type === "Event promotion" ? 1.5 : 1
      if (fits(maximum)) {
        setPosterContentTooLong(false)
        return
      }
      const minimum = 0.6
      if (!fits(minimum)) {
        setPosterContentTooLong(true)
        return
      }
      // Find the largest readable scale that fits the available copy area.
      let low = minimum
      let high = maximum
      for (let i = 0; i < 10; i++) {
        const mid = (low + high) / 2
        if (fits(mid)) low = mid
        else high = mid
      }
      fits(low)
      setPosterContentTooLong(false)
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
  }, [
    preview,
    type,
    data.description,
    data.title,
    data.date,
    data.location,
    verticalTemplate,
  ])

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
    setExporting("jpg")
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
      setExporting(null)
    }
  }

  const exportPosterPdf = async () => {
    const artboard = previewRef.current?.firstElementChild
    if (!(artboard instanceof HTMLElement) || !artboard.offsetWidth) {
      window.alert("The poster preview is not ready to export.")
      return
    }

    setExporting("pdf")
    try {
      await document.fonts.ready
      const fontEmbedCSS = await getFontEmbedCSS(artboard)
      const image = await toJpeg(artboard, {
        fontEmbedCSS,
        pixelRatio: 2550 / artboard.offsetWidth,
        quality: 0.96,
      })
      const pdf = new jsPDF({
        orientation: "portrait",
        unit: "in",
        format: "letter",
      })
      pdf.addImage(image, "JPEG", 0, 0, 8.5, 11)
      pdf.save(`mosaic-poster-${type.toLowerCase().replace(/\s+/g, "-")}.pdf`)
    } catch (error) {
      console.error("Could not export poster PDF:", error)
      window.alert("Could not export the poster PDF. Please try again.")
    } finally {
      setExporting(null)
    }
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
    { key: "callToAction", label: "Call to action", hint: type === "Event promotion" ? response : "Edit the text shown on the graphic" },
    {
      key: "supportingHeading",
      label: "Supporting heading",
      hint: `${data.supportingHeading.length}/60`,
    },
    {
      key: "bulletPoints",
      label: "Supporting points",
      multiline: true,
      hint: "One per line",
    },
  ]

  const visibleFields = fields.filter((field) => {
    if (preview === "poster") {
      return (
        ["title", "description"].includes(field.key) ||
        (isEventPoster && ["date", "location"].includes(field.key))
      )
    }
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
          {preview === "viva" && type === "Event promotion" && <span>{response}</span>}
        </div>
        <div className="field-scroll">
          {preview === "viva" && type === "Event promotion" && (
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
          )}
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
          {preview === "viva" && type === "Announcements & campaigns" && vivaTemplate === "content-heavy" && (
            <div className="template-property">
              <span>
                <b>Call to action</b>
                <small>Available in the Split image and Text led layouts.</small>
              </span>
            </div>
          )}
          {preview === "viva" && type === "Announcements & campaigns" && vivaTemplate !== "content-heavy" && showCta && (
            <label className="editor-field">
              <span><b>Suggested action</b></span>
              <select
                className="campaign-response-select"
                value={campaignCtaOptions.includes(data.callToAction) ? data.callToAction : "custom"}
                onChange={(event) => update("callToAction", event.target.value === "custom" ? "" : event.target.value)}
              >
                {campaignCtaOptions.map((option) => (
                  <option key={option} value={option}>{option}</option>
                ))}
                <option value="custom">Custom</option>
              </select>
            </label>
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
                  {index + 1}. {isEventPoster && field.key === "date"
                    ? "Date (optional)"
                    : isEventPoster && field.key === "location"
                      ? "Location (optional)"
                      : field.label}
                </b>
                <small>
                  {isEventPoster && field.key === "description"
                    ? "Auto-sizes to fit · Include RSVP details"
                    : preview === "poster" && field.key === "title"
                      ? "Auto-sizes to fit"
                      : field.hint}
                </small>
              </span>
              {field.multiline ? (
                <textarea
                  value={data[field.key]}
                  rows={3}
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
          {breadcrumbs}
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
                isEvent={type === "Event promotion"}
              />
            )}
          </div>
        </div>
        <div className="export-bar">
          {(preview === "poster" && posterContentTooLong) || (preview === "viva" && vivaContentTooLong) ? (
            <span className="poster-copy-error" role="alert">
              Shorten the text to fit the {preview === "viva" ? "graphic" : "poster"} at a readable size before
              exporting.
            </span>
          ) : (
            <span>
              {preview === "viva"
                ? "Widescreen · 1920 × 1080 px"
                : "US Letter · 8.5 × 11 in"}
            </span>
          )}
          <div className="button-row">
            {preview === "poster" && (
              <button
                className="secondary-button"
                disabled={
                  !!exporting ||
                  (preview === "poster" && posterContentTooLong)
                }
                onClick={exportPosterPdf}
              >
                {exporting === "pdf" ? "Exporting…" : "Export PDF"}
              </button>
            )}
            <button
              className="primary-button"
              disabled={
                !!exporting ||
                (preview === "poster" && posterContentTooLong) ||
                (preview === "viva" && vivaContentTooLong)
              }
              onClick={exportJpg}
            >
              <Icon name="download" size={15} />{" "}
              {exporting === "jpg" ? "Exporting…" : "Export JPG"}
            </button>
          </div>
        </div>
      </main>
    </div>
  )
}

