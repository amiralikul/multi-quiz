import React from 'react';
import { describe, test, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import App from '../App';

import { quizQuestions } from '../data/quizData';

describe('Quiz App', () => {
    test('renders first question', () => {
        render(<App />);
        expect(screen.getByText(quizQuestions[0].text)).toBeInTheDocument();
    });

    test('next button is disabled initially', () => {
        render(<App />);
        const nextButton = screen.getByText('Next');
        expect(nextButton).toBeDisabled();
    });

    test('next button enables after selecting an answer', () => {
        render(<App />);
        const firstOption = screen.getAllByRole('button')[0];
        fireEvent.click(firstOption);
        const nextButton = screen.getByText('Next');
        expect(nextButton).not.toBeDisabled();
    });

    test('previous button is not shown on first question', () => {
        render(<App />);
        expect(screen.queryByText('Previous')).not.toBeInTheDocument();
    });

    test('shows submit button on last question', () => {
        render(<App />);
        for (let i = 0; i < quizQuestions.length - 1; i++) {
            const option = screen.getAllByRole('button')[0];
            fireEvent.click(option);
            const nextButton = screen.getByText('Next');
            fireEvent.click(nextButton);
        }
        expect(screen.getByText('Submit')).toBeInTheDocument();
        expect(screen.queryByText('Next')).not.toBeInTheDocument();
    });

    test('shows score after submitting', () => {
        render(<App />);
        for (let i = 0; i < quizQuestions.length - 1; i++) {
            const option = screen.getAllByRole('button')[0];
            fireEvent.click(option);
            const nextButton = screen.getByText('Next');
            fireEvent.click(nextButton);
        }
        const lastOption = screen.getAllByRole('button')[0];
        fireEvent.click(lastOption);
        const submitButton = screen.getByText('Submit');
        fireEvent.click(submitButton);
        expect(screen.getByText(/Quiz ended/i)).toBeInTheDocument();
    });
}); 