import React, { useState } from "react";
import QuizBox from "../layout/QuizBox";
import Footer from "../layout/Footer";
import Shapes from "../layout/Shapes";
import questionsData from "./questions.json"; // Replace with your quiz data source
import Header from "../layout/Header";
import Result from "../layout/Result";
import styles from "../styles/mainquiz.css";
const MainQuiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState([]);
  const [isQuizCompleted, setIsQuizCompleted] = useState(false);
  const [mentalHealthResult, setMentalHealthResult] = useState(null); // State to store mental health result

  const questions = questionsData.questions; // Assuming your data is structured appropriately

  const handleOptionClick = (option) => {
    setSelectedAnswers([...selectedAnswers, option]);
  };

  const handleNextClick = () => {
    if (currentQuestion === questions.length - 1) {
      setIsQuizCompleted(true);
      analyzeMentalHealth();
      return;
    }

    setCurrentQuestion(currentQuestion + 1);
  };

  const analyzeMentalHealth = () => {
    // Analyze the selected answers to determine mental health result
    // This is where you can implement your mental health assessment function
    // For simplicity, let's assume that if any answer indicates potential issues,
    // then the child may need to visit a doctor
    const needDoctor = selectedAnswers.some((answer) => answer === "دائـمًا");

    if (needDoctor) {
      setMentalHealthResult("قد يحتاج طفلك إلى زيارة الطبيب.");
    } else {
      setMentalHealthResult("يبدو أن صحة طفلك النفسية مستقرة أو طبيعية.");
    }
  };

  const currentQuestionData = questions[currentQuestion];
  const totalQuestions = questionsData.questions.length;

  return (
    <div className={styles.quizContainer}>
      <Header />

      {isQuizCompleted ? (
        <Result result={mentalHealthResult} />
      ) : (
        <>
          <QuizBox
            question={currentQuestionData.question}
            options={currentQuestionData.options}
            onOptionClick={handleOptionClick}
            selectedAnswer={selectedAnswers[currentQuestion]}
          />
          <Shapes />
          <Footer
            onNext={handleNextClick}
            disabled={!selectedAnswers[currentQuestion]}
            isQuizCompleted={isQuizCompleted}
            totalQuestions={totalQuestions}
            currentQuestion={currentQuestion}
          />
        </>
      )}
    </div>
  );
};

export default MainQuiz;
