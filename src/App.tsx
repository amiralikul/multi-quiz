import { useState, useCallback } from 'react';
import QuestionCard from './components/QuestionCard/QuestionCard';
import Navigation from './components/Navigation/Navigation';
import Score from './components/Score/Score';
import { quizQuestions } from './data/quizData';
import { UserAnswers } from './types/quiz';

const App = () => {
    const [currentQuestionIndex, setCurrentQuestion] = useState(0);
    const [userAnswers, setUserAnswers] = useState<UserAnswers>({});
    const [showScore, setShowScore] = useState(false);

    const handleAnswerSelect = useCallback((answerId: number) => {
        const currentQuestion = quizQuestions[currentQuestionIndex];
        setUserAnswers(prev => ({
            ...prev,
            [currentQuestion.id]: answerId
        }));
    }, [currentQuestionIndex]);

    const handleNext = () => {
        setCurrentQuestion(prev => prev + 1);
    };

    const handlePrevious = () => {
        setCurrentQuestion(prev => prev - 1);
    };

    const handleSubmit = () => {
        setShowScore(true);
    };

    const calculateScore = useCallback(() => {
        return quizQuestions.reduce((acc, question) => {
            return acc + (userAnswers[question.id] === question.correctAnswer ? 1 : 0);
        }, 0) / quizQuestions.length * 100;
    }, [userAnswers]);

    const currentQuestion = quizQuestions[currentQuestionIndex];

    if (showScore) {
        return <Score score={calculateScore()} />;
    }

    return (
        <div className="max-w-3xl mx-auto p-8">
            <div className="text-center mb-8 text-lg text-gray-600">
                Question {currentQuestionIndex + 1} of {quizQuestions.length}
            </div>
            <QuestionCard
                question={currentQuestion}
                selectedAnswer={userAnswers[currentQuestion.id] ?? null}
                onAnswerSelect={handleAnswerSelect}
            />
            <Navigation
                currentQuestionIndex={currentQuestionIndex}
                totalQuestions={quizQuestions.length}
                onPrevious={handlePrevious}
                onNext={handleNext}
                onSubmit={handleSubmit}
                isNextDisabled={!userAnswers[currentQuestion.id]}
            />
        </div>
    );
};

export default App;
