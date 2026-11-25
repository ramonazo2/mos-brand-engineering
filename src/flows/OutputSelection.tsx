import { Icon, channelOptions, type Channel, type CommunicationType } from "./shared"

export default function OutputSelection({
  breadcrumbs,
  channel,
  type,
  onChannel,
  onContinue,
}: {
  breadcrumbs: React.ReactNode
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
        <div className="preview-toolbar setup-toolbar">
          {breadcrumbs}
          <strong>{type}</strong>
        </div>
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

