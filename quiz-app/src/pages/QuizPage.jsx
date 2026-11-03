import { useState } from 'react'
import { questions as allQuestions } from '@/data/questions'
import { buildQuiz } from '@/utils/buildQuiz'
import Button from '@/components/atoms/Button'
import ProgressBar from '@/components/atoms/ProgressBar'
import QuestionCard from '@/components/organisms/QuestionCard'
import StartScreen from '@/components/organisms/StartScreen'
import ScorePanel from '@/components/organisms/ScorePanel'
import './QuizPage.css'

const QUIZ_LENGTH = 5

export default function QuizPage() {
  // State
  const [phase, setPhase] = useState('start') // 'start' | 'playing' | 'finished'
  const [questions, setQuestions] = useState(() => buildQuiz(allQuestions, QUIZ_LENGTH))
  const [currentIndex, setCurrentIndex] = useState(0)
  const [userAnswers, setUserAnswers] = useState({}) // { questionId: answerText }

  // Calculated values (NOT stored)
  const question = questions[currentIndex]
  const selected = userAnswers[question.id] ?? null
  const isLast = currentIndex === questions.length - 1
  const score = questions.filter((q) => userAnswers[q.id] === q.correct).length

  // Handlers
  function handleSelect(questionId, answer) {
    setUserAnswers((prev) => ({ ...prev, [questionId]: answer }))
  }

  function handleNext() {
    if (isLast) {
      setPhase('finished')
    } else {
      setCurrentIndex((prev) => prev + 1)
    }
  }

  function startGame() {
    setQuestions(buildQuiz(allQuestions, QUIZ_LENGTH))
    setCurrentIndex(0)
    setUserAnswers({})
    setPhase('playing')
  }

  return (
    <main className="quiz-page">
      <div className="quiz-page__container">
        {phase === 'start' && (
          <StartScreen total={QUIZ_LENGTH} onStart={startGame} />
        )}

        {phase === 'playing' && (
          <>
            <ProgressBar value={currentIndex + 1} max={questions.length} />
            <QuestionCard
              key={question.id}
              question={question}
              selected={selected}
              locked={selected !== null}
              onSelect={handleSelect}
            />
            <div className="quiz-page__actions">
              <Button onClick={handleNext} disabled={selected === null}>
                {isLast ? 'Finish' : 'Next'}
              </Button>
            </div>
          </>
        )}

        {phase === 'finished' && (
          <ScorePanel score={score} total={questions.length} onPlayAgain={startGame} />
        )}
      </div>
    </main>
  )
}