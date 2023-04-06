import React, { useState } from "react";
import "./App.css";

function App() {
  //Properties

  const [showFinalResults, setShowFinalResults] = useState(false);
  const [score, setScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const questions = [
    {
      text: "What is the capital of Canada?",
      options: [
        { id: 0, text: "Toronto", isCorrect: false },
        { id: 1, text: "Vancouver", isCorrect: false },
        { id: 2, text: "Montreal", isCorrect: false },
        { id: 3, text: "Ottawa", isCorrect: true },
      ],
    },
    {
      text: "What is the highest mountain in the world?",
      options: [
        { id: 0, text: "Mount Everest", isCorrect: true },
        { id: 1, text: "Mount Kilimanjaro", isCorrect: false },
        { id: 2, text: "Mount Fuji", isCorrect: false },
        { id: 3, text: "Mount McKinley", isCorrect: false },
      ],
    },
    {
      text: "What is the smallest planet in our solar system?",
      options: [
        { id: 0, text: "Mercury", isCorrect: true },
        { id: 1, text: "Venus", isCorrect: false },
        { id: 2, text: "Mars", isCorrect: false },
        { id: 3, text: "Pluto", isCorrect: false },
      ],
    },
    {
      text: "What is the currency used in Japan?",
      options: [
        { id: 0, text: "Euro", isCorrect: false },
        { id: 1, text: "Yen", isCorrect: true },
        { id: 2, text: "Dollar", isCorrect: false },
        { id: 3, text: "Pound", isCorrect: false },
      ],
    },
    {
      text: "Who is the author of the Harry Potter book series?",
      options: [
        { id: 0, text: "Stephen King", isCorrect: false },
        { id: 1, text: "J.K. Rowling", isCorrect: true },
        { id: 2, text: "Dan Brown", isCorrect: true },
        { id: 3, text: "George R.R. Martin", isCorrect: false },
      ],
    },
  ];

  //Helper Functions
  const optionClicked = (isCorrect) => {
    console.log(isCorrect);
    if (isCorrect) {
      setScore(score + 1);
    }

    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowFinalResults(true);
    }
  };

  const restartGame = () => {
    setScore(0);
    setCurrentQuestion(0);
    setShowFinalResults(false);
  };

  return (
    <div className="App">
      {/*1. Header */}
      <h1 className="header">Random Questions Quiz</h1>
      {/*2. Current Score */}
      <h2 className="currentScore">Current Score: {score}</h2>

      {showFinalResults ? (
        /*4. Final Results Card */
        <div className="final-results">
          <h1>Final Results</h1>
          <h2>
            {score} out of {questions.length} correct - (
            {(score / questions.length) * 100})
          </h2>
          <button onClick={() => restartGame()} className="button">
            Restart Game
          </button>
        </div>
      ) : (
        /*3. Question Card */
        <div className="question-card">
          <h2>
            Question {currentQuestion + 1} out of {questions.length}
          </h2>
          <h3 className="question-text">{questions[currentQuestion].text}</h3>
          <ul>
            {questions[currentQuestion].options.map((option) => {
              return (
                <li
                  key={option.id}
                  onClick={() => optionClicked(option.isCorrect)}
                >
                  {option.text}
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
}

export default App;

//UseState
//Properties
