import Button from '../atoms/Button'
import './StartScreen.css'

export default function StartScreen({ total, onStart }) {
  return (
    <section className="start-screen">
      <h1 className="start-screen__title">Web Dev Quiz</h1>
      <p className="start-screen__text">
        Answer {total} random questions and see how much you know.
      </p>
      <Button onClick={onStart}>Start quiz</Button>
    </section>
  )
}