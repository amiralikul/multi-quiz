import React from 'react';

interface ScoreProps {
    score: number;
}

const Score = ({ score }: ScoreProps) => {
    return (
        <div className="text-center p-8">
            <h2 className="text-2xl mb-4 text-gray-800">Quiz ended</h2>
            <p className="text-2xl text-blue-500">Your score: {score}%</p>
        </div>
    );
};

export default Score; 