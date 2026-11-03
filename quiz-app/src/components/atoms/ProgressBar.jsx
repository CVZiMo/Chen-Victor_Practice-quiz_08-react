import './ProgressBar.css'

export default function ProgressBar({ value, max }) {
  const percentage = max > 0 ? (value / max) * 100 : 0

    return (
    <div className="progress-bar">
        <div
        className="progress-bar__track"
        role="progressbar"
        aria-valuemin={0}
        aria-valuemax={max}
        aria-valuenow={value}
        aria-label="Quiz progress"
        >
        <div className="progress-bar__fill" style={{ width: `${percentage}%` }} />
        </div>
        <span className="progress-bar__label">
        Question {value} of {max}
        </span>
    </div>
    )
}