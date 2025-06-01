import React, { useEffect, useState } from "react";
import Questions from "../../utility/Questions";
import { useNavigate } from "react-router-dom";
import "./standartQuiz.scss";

const loadCountsFromStorage = () => {
  const data = localStorage.getItem("questionCounts");
  return data ? JSON.parse(data) : {};
};

const saveCountsToStorage = (countsObj) => {
  localStorage.setItem("questionCounts", JSON.stringify(countsObj));
};

const shuffleArray = (array) => array.sort(() => Math.random() - 0.5);

const formatHTML = (text) => text.replace(/\n/g, "<br />");

const StandartQuiz = () => {
  const navigate = useNavigate();
  const [quizQuestions, setQuizQuestions] = useState([]);
  const [answers, setAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);
  const [results, setResults] = useState({ correct: 0, incorrect: 0 });
  const [isDisabled, setIsDisabled] = useState(false);

  useEffect(() => {
    const localCounts = loadCountsFromStorage();
    Questions.forEach((q) => {
      const savedCount = localCounts[q.id.toString()];
      q.count = savedCount !== undefined ? savedCount : 0;
    });

    const selectedQuestions = [...Questions]
      .sort((a, b) => (a.count || 0) - (b.count || 0))
      .slice(0, 50)
      .map((question) => ({
        ...question,
        answers: shuffleArray([...question.answers]),
      }));

    setQuizQuestions(selectedQuestions);

    window.MathJax && window.MathJax.typesetPromise().catch((err) => console.error(err));
  }, []);

  useEffect(() => {
    if (window.MathJax) {
      window.MathJax.typesetPromise().catch((err) => console.error(err));
    }
  }, [quizQuestions, showResults]);

  const handleAnswerClick = (questionIndex, selectedAnswer) => {
    if (isDisabled) return;
    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      [questionIndex]: selectedAnswer,
    }));
  };

  const handleFinishQuiz = () => {
    let correct = 0;
    let incorrect = 0;
    const updatedCounts = {};
    const localCounts = loadCountsFromStorage();

    quizQuestions.forEach((q, index) => {
      const selectedAnswer = answers[index];
      const isCorrect =
        q.answers.find((a) => a.answer === selectedAnswer)?.type === "true";

      const originalQuestion = Questions.find((item) => item.id === q.id);
      const qid = originalQuestion?.id.toString();

      if (isCorrect) {
        correct++;
        if (originalQuestion) {
          originalQuestion.count = (originalQuestion.count || 0) + 1;
          updatedCounts[qid] = originalQuestion.count;
        }
      } else {
        incorrect++;
        if (originalQuestion) {
          originalQuestion.count = (originalQuestion.count || 0) - 1;
          updatedCounts[qid] = originalQuestion.count;
        }
      }
    });

    const mergedCounts = { ...localCounts, ...updatedCounts };
    saveCountsToStorage(mergedCounts);

    setResults({ correct, incorrect });
    setShowResults(true);
    setIsDisabled(true);
  };

  const handleRestart = () => {
    setAnswers({});
    setResults({ correct: 0, incorrect: 0 });
    setShowResults(false);
    setIsDisabled(false);

    const localCounts = loadCountsFromStorage();
    Questions.forEach((q) => {
      const savedCount = localCounts[q.id.toString()];
      q.count = savedCount !== undefined ? savedCount : 0;
    });

    const selectedQuestions = [...Questions]
      .sort((a, b) => (a.count || 0) - (b.count || 0))
      .slice(0, 50)
      .map((question) => ({
        ...question,
        answers: shuffleArray([...question.answers]),
      }));

    setQuizQuestions(selectedQuestions);
  };

  const handleHome = () => {
    navigate("/");
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
            {index + 1}.{" "}
            <span dangerouslySetInnerHTML={{ __html: formatHTML(q.Question) }}></span>
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
                } ${
                  showResults && isCorrect ? "correct-answer" : ""
                } ${showResults && isSelected && isCorrect ? "highlight-correct" : ""}`}
                disabled={isDisabled}
              >
                <span dangerouslySetInnerHTML={{ __html: formatHTML(answer.answer) }}></span>
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

export default StandartQuiz;
