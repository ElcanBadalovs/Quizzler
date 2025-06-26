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

// 🛠️ Təhlükəsiz formatHTML funksiyası
const formatHTML = (text) => {
  if (typeof text !== "string") return "";
  return text.replace(/\n/g, "<br />");
};

const StandartQuiz = () => {
  const navigate = useNavigate();
  const [quizQuestions, setQuizQuestions] = useState([]);
  const [answers, setAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);
  const [results, setResults] = useState({ correct: 0, incorrect: 0 });
  const [isDisabled, setIsDisabled] = useState(false);
  const [selectedRange, setSelectedRange] = useState(null);

  const ranges = [
    { label: "0-50", start: 0, end: 50 },
    { label: "51-100", start: 51, end: 100 },
    { label: "101-150", start: 101, end: 150 },
    { label: "151-200", start: 151, end: 200 },
    { label: "201-250", start: 201, end: 250 },
    { label: "251-300", start: 251, end: 300 },
    { label: "301-350", start: 301, end: 350 },
    { label: "351-400", start: 351, end: 400 },
    { label: "401-450", start: 401, end: 450 },
    { label: "451-500", start: 451, end: 500 },
  ];

  useEffect(() => {
    if (selectedRange === null) return;

    const localCounts = loadCountsFromStorage();
    Questions.forEach((q) => {
      const savedCount = localCounts[q.id.toString()];
      q.count = savedCount !== undefined ? savedCount : 0;
    });

    const selectedQuestions = [...Questions]
      .filter((q) => q.id >= selectedRange.start && q.id <= selectedRange.end)
      .sort((a, b) => (a.count || 0) - (b.count || 0))
      .slice(0, 50)
      .map((question) => ({
        ...question,
        answers: Array.isArray(question.answers)
          ? shuffleArray([...question.answers])
          : [],
      }));

    setQuizQuestions(selectedQuestions);
    window.MathJax?.typesetPromise().catch((err) => console.error(err));
  }, [selectedRange]);

  useEffect(() => {
    window.MathJax?.typesetPromise().catch((err) => console.error(err));
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
    setSelectedRange(null);
  };

  const handleHome = () => {
    navigate("/");
  };

  return (
    <div className="quiz-app">
      <h1 className="quiz-title">Quiz App</h1>

      {selectedRange === null && (
        <div className="range-selection">
          <h2>Select Question Range</h2>
          <div className="range-buttons">
            {ranges.map((range) => (
              <button
                key={range.label}
                className="range-button"
                onClick={() => setSelectedRange(range)}
              >
                {range.label}
              </button>
            ))}
          </div>
        </div>
      )}

      {selectedRange !== null && (
        <>
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
                <span dangerouslySetInnerHTML={{ __html: formatHTML(q.Question || "") }}></span>
              </h3>

              {!Array.isArray(q.answers) || q.answers.length === 0 ? (
                <div style={{ color: "red" }}>
                  <strong>⚠ Sualın cavabları tapılmadı — ID: {q.id}</strong>
                </div>
              ) : (
                q.answers.map((answer, answerIndex) => {
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
                      } ${
                        showResults && isSelected && isCorrect
                          ? "highlight-correct"
                          : ""
                      }`}
                      disabled={isDisabled}
                    >
                      <span
                        dangerouslySetInnerHTML={{
                          __html: formatHTML(answer.answer || ""),
                        }}
                      ></span>
                    </button>
                  );
                })
              )}
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
        </>
      )}
    </div>
  );
};

export default StandartQuiz;
