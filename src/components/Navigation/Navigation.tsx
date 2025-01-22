import React from 'react';
import Button from '../Button/Button';

interface NavigationProps {
    currentQuestionIndex: number;
    totalQuestions: number;
    onPrevious: () => void;
    onNext: () => void;
    onSubmit: () => void;
    isNextDisabled: boolean;
}

const Navigation = ({
    currentQuestionIndex,
    totalQuestions,
    onPrevious,
    onNext,
    onSubmit,
    isNextDisabled
}: NavigationProps) => {
    
    const isLastQuestion = currentQuestionIndex === totalQuestions - 1;
    
    return (
        <div className="flex justify-end mt-8">
            {currentQuestionIndex > 0 && (
                <Button 
                    onClick={onPrevious}
                    className="mr-4"
                >
                    Previous
                </Button>
            )}
            {isLastQuestion ? (
                <Button
                    variant="success"
                    onClick={onSubmit}
                    disabled={isNextDisabled}
                >
                    Submit
                </Button>
            ) : (
                <Button
                    onClick={onNext}
                    disabled={isNextDisabled}
                >
                    Next
                </Button>
            )}
        </div>
    );
};

export default Navigation; 