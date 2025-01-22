export interface Answer {
    id: number;
    text: string;
}

export interface Question {
    id: number;
    text: string;
    options: Answer[];
    correctAnswer: Answer['id'];
}

export interface UserAnswers {
    [questionId: number]: number | null;
}

export interface QuizState {
    currentQuestionIndex: number;
    userAnswers: UserAnswers;
    questions: Question[];
} 