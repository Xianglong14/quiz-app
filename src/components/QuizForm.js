import React, { useState } from "react";
import { questions } from "../data";

const QuizForm = ({ setScore, setName }) => {
    const [answers, setAnswers] = useState({});
    const [name, setNameState] = useState("");

    const handleAnswer = (questionId, answer) => {
        setAnswers({ ...answers, [questionId]: answer });
    };

    const resetQuiz = () => {
        setAnswers({});
        setNameState("");
    };

    const submitQuiz = () => {
        if (!name.trim()) {
            alert("Please enter your name!");
            return;
        }

        let score = 0;
        questions.forEach((q) => {
            if (answers[q.id] === q.correct) score++;
        });
        setScore(score);
        setName(name);
    };

    return (
        <div className="quiz-form">
            <h1>Rounding Off to Nearest 10</h1>
            <label>
                Name:
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setNameState(e.target.value)}
                />
            </label>
            {questions.map((q) => (
                <div key={q.id} className="question">
                    <h2>{q.question}</h2>
                    {q.options.map((opt) => (
                        <label key={opt}>
                            <input
                                type="radio"
                                name={`question-${q.id}`}
                                value={opt}
                                checked={answers[q.id] === opt}
                                onChange={() => handleAnswer(q.id, opt)}
                            />
                            {opt}
                        </label>
                    ))}
                </div>
            ))}
            <button onClick={resetQuiz}>Reset</button>
            <button onClick={submitQuiz}>Submit</button>
        </div>
    );
};

export default QuizForm;
