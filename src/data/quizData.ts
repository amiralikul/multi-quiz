import { Question } from '../types/quiz';

export const quizQuestions: Question[] = [
    {
        id: 1,
        text: "What is the output of: typeof null?",
        options: [
            { id: 1, text: "'null'" },
            { id: 2, text: "'undefined'" },
            { id: 3, text: "'object'" },
            { id: 4, text: "'number'" }
        ],
        correctAnswer: 3
    },
    {
        id: 2,
        text: "Which method is used to add elements to the end of an array?",
        options: [
            { id: 1, text: "unshift()" },
            { id: 2, text: "push()" },
            { id: 3, text: "append()" },
            { id: 4, text: "add()" }
        ],
        correctAnswer: 2
    },
    {
        id: 3,
        text: "What is the difference between '==' and '==='?",
        options: [
            { id: 1, text: "No difference" },
            { id: 2, text: "'===' checks both value and type" },
            { id: 3, text: "'==' is faster" },
            { id: 4, text: "'===' is deprecated" }
        ],
        correctAnswer: 2
    },
    {
        id: 4,
        text: "What is a closure in JavaScript?",
        options: [
            { id: 1, text: "A syntax error" },
            { id: 2, text: "A function with access to its outer scope" },
            { id: 3, text: "A way to close browser windows" },
            { id: 4, text: "A method to end loops" }
        ],
        correctAnswer: 2
    },
    {
        id: 5,
        text: "Which of these is not a JavaScript data type?",
        options: [
            { id: 1, text: "undefined" },
            { id: 2, text: "boolean" },
            { id: 3, text: "float" },
            { id: 4, text: "symbol" }
        ],
        correctAnswer: 3
    }
]; 