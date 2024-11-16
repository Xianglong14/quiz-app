import React, { useState } from "react";
import { questions } from "./data";
import Question from "./components/Question";
import Results from "./components/Results";

const App = () => {
  const [name, setName] = useState("");
  const [score, setScore] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleAnswerSelect = (questionId, answer) => {
    setSelectedAnswers((prev) => ({
      ...prev,
      [questionId]: answer,
    }));
  };

  const handleSubmit = () => {
    if (!name) {
      alert("Please enter your name before submitting!");
      return;
    }

    let calculatedScore = 0;
    questions.forEach((q) => {
      if (selectedAnswers[q.id] === q.correct) {
        calculatedScore++;
      }
    });
    setScore(calculatedScore);
    setSubmitted(true);
    setLoading(true);

    setTimeout(() => {
      setLoading(false);  // After delay, set loading to false
    }, 2000); 
  };

  const handleReset = () => {
    setScore(0);
    setSelectedAnswers({});
    setSubmitted(false);
    setName("");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-500 to-teal-400 p-6">
      {!submitted ? (
        <div className="bg-white shadow-lg rounded-lg p-6 max-w-2xl w-full">
          <h1 className="text-2xl font-bold text-center mb-6 text-blue-700">Rounding Off Quiz</h1>
          <label className="block font-semibold mb-2" htmlFor="name">
            Enter your name:
          </label>
          <input
            type="text"
            id="name"
            className="w-full p-3 border border-gray-300 rounded-lg mb-6"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your name"
          />
          {questions.map((q) => (
            <Question
              key={q.id}
              question={q}
              onAnswerSelect={handleAnswerSelect}
              selectedAnswer={selectedAnswers[q.id]}
            />
          ))}
          <div className="flex justify-between my-6">
            <button
              onClick={handleSubmit}
              className="bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700 transition"
            >
              Submit
            </button>
            <button
              onClick={handleReset}
              className="bg-gray-300 text-gray-700 py-2 px-6 rounded-lg hover:bg-gray-400 transition"
            >
              Reset
            </button>
          </div>
        </div>
      ) : (
        <Results
          name={name}
          score={score}
          questions={questions}
          onReset={handleReset}
          loading={loading}  // Pass loading state to Results
        />
      )}

      {/* Copyright Section */}
      <footer className="fixed bottom-0 left-0 w-full bg-gray-800 text-white text-center py-4">
        <p className="text-sm">&copy; 2024 <a href="https://www.mathinenglish.com" target="_blank" rel="noopener noreferrer" className="underline">www.mathinenglish.com</a></p>
      </footer>
    </div>
  );
};

export default App;
