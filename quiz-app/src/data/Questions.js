export const questions = [
    {
        id: 1,
        category: 'JavaScript',
        difficulty: 'easy',
        text: 'Which keyword declares a block-scoped variable that can be reassigned?',
        correct: 'let',
        incorrect: ['var', 'const', 'static']
    },
    {
        id: 2,
        category: 'HTML',
        difficulty: 'easy',
        text: 'Which HTML element defines the most important heading?',
        correct: '<h1>',
        incorrect: ['<head>', '<header>', '<h6>']
    },
    {
        id: 3,
        category: 'CSS',
        difficulty: 'easy',
        text: 'Which CSS property changes the color of the text?',
        correct: 'color',
        incorrect: ['font-color', 'text-color', 'foreground']
    },
    {
        id: 4,
        category: 'JavaScript',
        difficulty: 'medium',
        text: 'What does typeof null return in JavaScript?',
        correct: 'object',
        incorrect: ['null', 'undefined', 'number']
    },
    {
        id: 5,
        category: 'React',
        difficulty: 'medium',
        text: 'Which hook adds local state to a function component?',
        correct: 'useState',
        incorrect: ['useEffect', 'useRef', 'useContext']
    },
    {
        id: 6,
        category: 'CSS',
        difficulty: 'medium',
        text: 'In the CSS box model, which layer sits between the content and the border?',
        correct: 'padding',
        incorrect: ['margin', 'outline', 'gap']
    },
    {
        id: 7,
        category: 'JavaScript',
        difficulty: 'medium',
        text: 'Which array method returns a new array with every item transformed?',
        correct: 'map',
        incorrect: ['forEach', 'push', 'splice']
    },
    {
        id: 8,
        category: 'React',
        difficulty: 'hard',
        text: 'What happens if you mutate a state object directly instead of creating a new one?',
        correct: 'React may not detect the change and skip the re-render',
        incorrect: [
            'The component unmounts',
            'React throws a syntax error',
            'The state resets to its initial value'
        ]
    },
    {
        id: 9,
        category: 'HTTP',
        difficulty: 'easy',
        text: 'Which HTTP status code means "Not Found"?',
        correct: '404',
        incorrect: ['200', '301', '500']
    },
    {
        id: 10,
        category: 'JavaScript',
        difficulty: 'hard',
        text: 'What is the result of [] + [] in JavaScript?',
        correct: 'An empty string',
        incorrect: ['0', 'An empty array', 'undefined']
    }
];