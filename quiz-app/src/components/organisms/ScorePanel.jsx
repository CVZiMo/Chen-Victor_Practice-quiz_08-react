import Button from '../atoms/Button'
import './ScorePanel.css'

// The message is calculated, never stored in state
function getMessage(score, total) {
  if (total === 0) return ''
  const ratio = score / total
  if (ratio === 1) return 'Perfect! You nailed it.'
  if (ratio >= 0.6) return 'Good job! You know your stuff.'
  return 'Keep practising, you will get there.'
}

export default function ScorePanel({ score, total, onPlayAgain }) {
  return (
    <section className="score-panel">
      <h2 className="score-panel__score">
        Your score: {score} / {total}
      </h2>
      <p className="score-panel__message">{getMessage(score, total)}</p>
      <Button onClick={onPlayAgain}>Play again</Button>
    </section>
  )
}