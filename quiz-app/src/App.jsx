import { useState } from 'react'
import QuestionHeader from '@/components/molecules/QuestionHeader'
import AnswerOption from '@/components/molecules/AnswerOption'

export default function App() {
  const [selected, setSelected] = useState(null)

  return (
    <div style={{ padding: 20 }}>
      <QuestionHeader id="q1" category="React" difficulty="easy" text="¿Qué hook añade estado?" />
      {['useState', 'useEffect', 'useRef'].map((answer) => (
        <AnswerOption
          key={answer}
          name="test"
          text={answer}
          checked={selected === answer}
          disabled={false}
          onSelect={setSelected}
        />)
      )}
    </div>
  )
}