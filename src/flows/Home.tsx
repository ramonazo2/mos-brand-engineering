import { Icon, communicationTypes, type CreationType } from "./shared"

export default function Home({
  selectedType,
  onType,
  onContinue,
}: {
  selectedType: CreationType | null
  onType: (type: CreationType) => void
  onContinue: () => void
}) {
  return (
    <div className="home-view home-view-edited">
      <div className="home-heading">
        <h1>What are you creating?</h1>
        <p>
          Choose what you want to create. We’ll use it to guide the details and
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
      
      <div className="setup-footer home-footer">
        <button
          className="primary-button"
          disabled={!selectedType}
          onClick={onContinue}
        >
          {selectedType === "Site fact sheet"
            ? "Continue to fact sheet"
            : selectedType === "Recognition (Inspire)"
            ? "Continue to recognition"
            : "Choose where it appears"}{" "}
          <Icon name="arrow" size={16} />
        </button>
      </div>
    </div>
  )
}

