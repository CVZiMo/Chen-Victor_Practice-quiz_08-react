import QuestionHeader from '../molecules/QuestionHeader'
import AnswerOption from '../molecules/AnswerOption'
import './QuestionCard.css'

export default function QuestionCard({ question, selected, locked, onSelect }) {
  const headingId = `question-${question.id}`
  const isCorrect = selected === question.correct

  // Decides the visual status of each answer
  function getStatus(answer) {
    if (!locked) return 'idle'
    if (answer === question.correct) return 'correct'
    if (answer === selected) return 'wrong'
    return 'idle'
  }

  const feedbackClass = [
    'question-card__feedback',
    isCorrect ? 'question-card__feedback--correct' : 'question-card__feedback--wrong',
  ].join(' ')

  return (
    <fieldset className="question-card" disabled={locked} aria-labelledby={headingId}>
      <QuestionHeader
        id={headingId}
        category={question.category}
        difficulty={question.difficulty}
        text={question.text}
      />

      <div className="question-card__answers">
        {question.answers.map((answer) => (
          <AnswerOption
            key={answer}
            name={`question-${question.id}`}
            text={answer}
            checked={selected === answer}
            status={getStatus(answer)}
            disabled={locked}
            onSelect={(text) => onSelect(question.id, text)}
          />
        ))}
      </div>

      {locked && (
        <p className={feedbackClass} role="status">
          {isCorrect ? 'Correct!' : `The right answer was: ${question.correct}`}
        </p>
      )}
    </fieldset>
  )
}