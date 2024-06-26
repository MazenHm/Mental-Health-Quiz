import React from "react";
import "../styles/Footer.css";

const Footer = ({
  onNext,
  disabled,
  isQuizCompleted,
  totalQuestions,
  currentQuestion,
}) => {
  const progress = Math.floor((currentQuestion / (totalQuestions - 1)) * 100);

  const handleNextClick = () => {
    if (!disabled) {
      onNext();
    }
  };


  return (
    <div className="footer">
      <div className="pg-bar">
        <div className="pg-bar-mov" style={{ width: `${progress}%` }}>
        </div>
      </div>
      <button
        className={`c-btn ${disabled ? "disabled" : ""}`}
        onClick={handleNextClick}
      >
        {isQuizCompleted ? "Finish" : "Continue"}
      </button>
    </div>
  );
};

export default Footer;
