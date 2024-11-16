import React from "react";

const Question = ({ question, onAnswerSelect, selectedAnswer }) => {
    return (
        <div className="mb-6">
            <h2 className="text-lg font-medium text-gray-800 mb-3"><span className="text-lg font-medium text-gray-800 mb-3">({question.id})</span> {question.question}</h2>
            {question.options.map((option, index) => (
                <label
                    key={index}
                    className={`flex items-center gap-3 p-3 rounded-lg border ${selectedAnswer === option
                        ? "bg-blue-100 border-blue-600"
                        : "bg-white border-gray-300"
                        } hover:bg-blue-50 transition mb-2 cursor-pointer`}
                >
                    <input
                        type="radio"
                        name={`question-${question.id}`}
                        value={option}
                        checked={selectedAnswer === option}
                        onChange={() => onAnswerSelect(question.id, option)}
                        className="h-5 w-5"
                    />
                    <span className="text-gray-700">{option}</span>
                </label>
            ))}
        </div>
    );
};

export default Question;
