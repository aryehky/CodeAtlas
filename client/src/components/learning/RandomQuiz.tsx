'use client';

import { useState, useEffect } from 'react';
import { Question, quizzesByTopic } from './QuizSection';

export default function RandomQuiz() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [quizComplete, setQuizComplete] = useState(false);
  const [randomQuestions, setRandomQuestions] = useState<Question[]>([]);

  useEffect(() => {
    const allQuestions = Object.values(quizzesByTopic).flat();
    const shuffled = [...allQuestions].sort(() => Math.random() - 0.5).slice(0, 10);
    setRandomQuestions(shuffled);
  }, []);

  if (randomQuestions.length === 0) {
    return (
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-2xl font-bold mb-4">Random Practice Quiz</h2>
        <p>Loading questions...</p>
      </div>
    );
  }

  if (quizComplete) {
    return (
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-2xl font-bold mb-4">Quiz Complete!</h2>
        <p className="text-lg mb-4">
          Your score: {score} out of {randomQuestions.length}
        </p>
        <p className="text-lg mb-4">
          Percentage: {Math.round((score / randomQuestions.length) * 100)}%
        </p>
        <button
          onClick={() => {
            setCurrentQuestionIndex(0);
            setSelectedAnswer(null);
            setShowResult(false);
            setScore(0);
            setQuizComplete(false);
            // Generate new random questions
            const allQuestions = Object.values(quizzesByTopic).flat();
            const shuffled = [...allQuestions].sort(() => Math.random() - 0.5).slice(0, 10);
            setRandomQuestions(shuffled);
          }}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Try Another Quiz
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-2xl font-bold mb-4">Random Practice Quiz</h2>
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <p className="text-gray-600">
            Question {currentQuestionIndex + 1} of {randomQuestions.length}
          </p>
          <p className="text-gray-600">
            Score: {score}/{randomQuestions.length}
          </p>
        </div>
        <p className="text-lg font-medium">{randomQuestions[currentQuestionIndex].question}</p>
        <div className="space-y-2">
          {randomQuestions[currentQuestionIndex].options.map((option, index) => (
            <button
              key={index}
              onClick={() => !showResult && setSelectedAnswer(index)}
              className={`w-full text-left p-3 rounded ${
                selectedAnswer === null
                  ? 'hover:bg-gray-100 bg-gray-50'
                  : showResult
                  ? index === randomQuestions[currentQuestionIndex].correctAnswer
                    ? 'bg-green-100 border-green-500'
                    : index === selectedAnswer
                    ? 'bg-red-100 border-red-500'
                    : 'bg-gray-50'
                  : selectedAnswer === index
                  ? 'bg-blue-100'
                  : 'bg-gray-50'
              }`}
              disabled={showResult}
            >
              {option}
            </button>
          ))}
        </div>
        {!showResult ? (
          <button
            onClick={() => {
              if (selectedAnswer !== null) {
                setShowResult(true);
                if (selectedAnswer === randomQuestions[currentQuestionIndex].correctAnswer) {
                  setScore(score + 1);
                }
              }
            }}
            disabled={selectedAnswer === null}
            className={`mt-4 px-4 py-2 rounded ${
              selectedAnswer === null
                ? 'bg-gray-300 cursor-not-allowed'
                : 'bg-blue-500 hover:bg-blue-600 text-white'
            }`}
          >
            Submit Answer
          </button>
        ) : (
          <button
            onClick={() => {
              if (currentQuestionIndex < randomQuestions.length - 1) {
                setCurrentQuestionIndex(currentQuestionIndex + 1);
                setSelectedAnswer(null);
                setShowResult(false);
              } else {
                setQuizComplete(true);
              }
            }}
            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            {currentQuestionIndex === randomQuestions.length - 1 ? 'Finish Quiz' : 'Next Question'}
          </button>
        )}
      </div>
    </div>
  );
} 