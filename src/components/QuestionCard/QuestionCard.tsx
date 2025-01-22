import React from 'react';
import { Question } from '../../types/quiz';

interface QuestionCardProps {
    question: Question;
    selectedAnswer: number | null;
    onAnswerSelect: (answerId: number) => void;
}

const QuestionCard = ({ question, selectedAnswer, onAnswerSelect }: QuestionCardProps) => {
    return (
        <div className="p-8 max-w-2xl mx-auto">
            <h2 className="text-2xl mb-6 text-gray-800">{question.text}</h2>
            <div className="flex flex-col gap-4">
                {question.options.map((option) => (
                    <button
                        key={option.id}
                        className={`p-4 border-2 rounded-lg text-left text-base transition-all
                            ${selectedAnswer === option.id 
                                ? 'bg-blue-500 text-white border-blue-600' 
                                : 'border-gray-300 hover:bg-gray-100'}`}
                        onClick={() => onAnswerSelect(option.id)}
                    >
                        {option.text}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default QuestionCard; 