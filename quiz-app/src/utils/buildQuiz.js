import { shuffle } from '@/utils/shuffle'

// Picks `amount` random questions and mixes each one's answers.
export function buildQuiz(allQuestions, amount) {
    return shuffle(allQuestions)
    .slice(0, amount)
    .map((question) => ({
        id: question.id,
        category: question.category,
        difficulty: question.difficulty,
        text: question.text,
        correct: question.correct,
        answers: shuffle([question.correct, ...question.incorrect]),
    }))
}