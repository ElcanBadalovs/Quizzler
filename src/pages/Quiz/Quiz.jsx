import React, { useState, useEffect } from "react";
import Questions from "../../utility/Questions"; // Soruların bulunduğu dosyadan import
import { useNavigate } from "react-router-dom"; // Sayfa yönlendirmesi için import
import "./quiz.scss"; // SCSS dosyasını içeri aktarma

const shuffleArray = (array) => array.sort(() => Math.random() - 0.5);

const App = () => {
  const navigate = useNavigate(); // Sayfa yönlendirmesi için useNavigate
  const [quizQuestions, setQuizQuestions] = useState([]);
  const [answers, setAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);
  const [results, setResults] = useState({ correct: 0, incorrect: 0 });
  const [isDisabled, setIsDisabled] = useState(false); // Butonları disable etmek için

  const userPassword = localStorage.getItem('userPassword');
  if (!userPassword || userPassword !== '3456712') {
    window.location.href = "/"; 
  } 

  useEffect(() => {
    const selectedQuestions = shuffleArray(Questions).slice(0, 5);
    const shuffledQuestions = selectedQuestions.map((question) => ({
      ...question,
      answers: shuffleArray(question.answers),
    }));
    setQuizQuestions(shuffledQuestions);
  }, []);

  const handleAnswerClick = (questionIndex, selectedAnswer) => {
    if (isDisabled) return; // Eğer butonlar disable edilmişse, cevap seçilmesine izin verme
    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      [questionIndex]: selectedAnswer,
    }));
  };

  const handleFinishQuiz = () => {
    let correct = 0;
    let incorrect = 0;

    quizQuestions.forEach((q, index) => {
      const selectedAnswer = answers[index];
      const isCorrect =
        q.answers.find((a) => a.answer === selectedAnswer)?.type === "true";
      if (isCorrect) correct++;
      else incorrect++;
    });

    setResults({ correct, incorrect });
    setShowResults(true);
    setIsDisabled(true); // Cevaplar verildikten sonra butonları disable et
  };

  const handleRestart = () => {
    setAnswers({});
    setResults({ correct: 0, incorrect: 0 });
    setShowResults(false);
    setIsDisabled(false);
    // Yeni soruları getir
    const selectedQuestions = shuffleArray(Questions).slice(0, 5);
    const shuffledQuestions = selectedQuestions.map((question) => ({
      ...question,
      answers: shuffleArray(question.answers),
    }));
    setQuizQuestions(shuffledQuestions);
  };

  const handleHome = () => {
    navigate("/"); // Home sayfasına yönlendirme
  };

  return (
    <div className="quiz-app">
      <h1 className="quiz-title">Quiz App</h1>
      {quizQuestions.map((q, index) => (
        <div
          key={index}
          className={`quiz-question ${
            showResults &&
            answers[index] &&
            q.answers.find((a) => a.answer === answers[index])?.type === "false"
              ? "incorrect-question"
              : ""
          }`}
        >
          <h3 className="question-title">
            {index + 1}. {q.Question}
          </h3>
          {q.answers.map((answer, answerIndex) => {
            const isSelected = answers[index] === answer.answer;
            const isCorrect = answer.type === "true";
            const isIncorrect = answer.type === "false";

            return (
              <button
                key={answerIndex}
                onClick={() => handleAnswerClick(index, answer.answer)}
                className={`answer-button ${
                  isSelected ? "selected-answer" : ""
                } ${
                  showResults && isSelected && isIncorrect
                    ? "incorrect-answer"
                    : ""
                } ${showResults && isCorrect ? "correct-answer" : ""}`}
                disabled={isDisabled} // Butonları disable et
              >
                {answer.answer}
              </button>
            );
          })}
        </div>
      ))}
      {!showResults && (
        <button className="finish-button" onClick={handleFinishQuiz}>
          Finish
        </button>
      )}
      {showResults && (
        <div className="results">
          <h2 className="results-title">Results</h2>
          <p>Correct Answers: {results.correct}</p>
          <p>Incorrect Answers: {results.incorrect}</p>
        </div>
      )}
      {showResults && (
        <div className="result-buttons">
          <button className="restart-button" onClick={handleRestart}>
            Restart
          </button>
          <button className="home-button" onClick={handleHome}>
            Home
          </button>
        </div>
      )}
    </div>
  );
};

export default App;
