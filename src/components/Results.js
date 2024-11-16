import React from "react";

const Results = ({ name, score, questions, onReset, loading }) => {
    return (
        <div className="bg-white shadow-lg rounded-lg p-6 max-w-md w-full text-center">
            {loading ? (
                <div className="text-xl text-blue-600">Loading your results...</div>
            ) : (
                <>
                    <h2 className="text-2xl font-bold text-green-600 mb-4">
                        Thank you, {name}!
                    </h2>
                    <p className="text-xl text-gray-700 mb-6">
                        Your score is: <span className="font-bold">{score}</span> / {questions.length}
                    </p>
                    <button
                        onClick={onReset}
                        className="bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700 transition"
                    >
                        Try Again
                    </button>
                </>
            )}
        </div>
    );
};

export default Results;
