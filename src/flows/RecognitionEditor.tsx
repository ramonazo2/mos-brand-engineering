import { useRef, useState } from "react"
import { getFontEmbedCSS, toJpeg } from "html-to-image"
import { Icon, assetUrl, useVivaCopyFit, recognitionTemplates, RECOGNITION_SAMPLE_PHOTO, type RecognitionData, type RecognitionTemplate } from "./shared"

function RecognitionPreview({
  data,
  template,
}: {
  data: RecognitionData
  template: RecognitionTemplate
}) {
  const isPhotoLayout = template === "photo"
  const employeeName = data.name.trim()

  return (
    <div
      className={`viva-artboard recognition-artboard recognition-${template}`}
    >
      {isPhotoLayout ? (
        <>
          <section className="recognition-copy">
            <img
              className="recognition-logo recognition-logo-black"
              src={assetUrl("recognition/inspire-logo-black.png")}
              alt="INSPIRE"
            />
            <h2>
              <span>{data.name}</span>
              <span className="recognition-role">{data.role}</span>
            </h2>
            <p>{data.message}</p>
          </section>
          <section className="recognition-photo-panel">
            <img
              className="recognition-pattern"
              src={assetUrl("5407e.svg")}
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
            src={assetUrl("5407e.svg")}
            alt=""
          />
          <section className="recognition-no-photo-copy">
            <img
              className="recognition-logo recognition-logo-white"
              src={assetUrl("recognition/inspire-logo-white.png")}
              alt="INSPIRE"
            />
            <span className="recognition-website">inspire.mosaicco.com</span>
            <h2>
              <span>{data.name}</span>
              <span className="recognition-role">{data.role}</span>
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

export default function RecognitionEditor({
  breadcrumbs,
  data,
  onData,
}: {
  breadcrumbs: React.ReactNode
  data: RecognitionData
  onData: (data: RecognitionData) => void
}) {
  const [template, setTemplate] = useState<RecognitionTemplate>("photo")
  const previewRef = useRef<HTMLDivElement>(null)
  const imageInputRef = useRef<HTMLInputElement>(null)
  const [exporting, setExporting] = useState(false)
  const contentTooLong = useVivaCopyFit(
    previewRef,
    true,
    JSON.stringify([template, data.name, data.role, data.message]),
  )

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
              <b>Name</b>
            </span>
            <input
              value={data.name}
              onChange={(event) => update("name", event.target.value)}
            />
          </label>
          <label className="editor-field">
            <span>
              <b>Role</b>
            </span>
            <input
              value={data.role}
              onChange={(event) => update("role", event.target.value)}
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
          {breadcrumbs}
          <strong>Viva Engage</strong>
        </div>
        <div className="artboard-stage viva">
          <div ref={previewRef} className="export-surface">
            <RecognitionPreview data={data} template={template} />
          </div>
        </div>
        <div className="export-bar">
          {contentTooLong ? (
            <span className="poster-copy-error" role="alert">
              Shorten the text to fit the graphic at a readable size before exporting.
            </span>
          ) : (
            <span>Viva Engage · 1920 × 1080 px</span>
          )}
          <div className="button-row">
            <button
              className="primary-button"
              disabled={exporting || contentTooLong}
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

