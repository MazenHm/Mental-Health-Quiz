import React from "react";
import "../styles/QuizBox.css";

const QuizBox = ({
  question,
  options,
  onOptionClick,
  selectedAnswer,
  errorMessage,
}) => {
  const handleClick = (option) => {
    onOptionClick(option);
  };

  return (
    <div className="quiz-box">
      <h5 className="text-d"> تشير إلى إلزامية إختيار خانة "*"</h5>
      <div className="question-box">
        <h1 className="q-title">{question}</h1>
        {errorMessage && <p className="error-message">{errorMessage}</p>}
        <div className="options">
          {options.map((option, index) => (
            <div
              key={index}
              className={`option ${
                selectedAnswer === option ? "selected" : ""
              }`}
              onClick={() => handleClick(option)}
            >
              <div className="cercle">
                <i className="fas fa-check"></i>
              </div>
              <h5 className="answer">{option}</h5>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default QuizBox;
