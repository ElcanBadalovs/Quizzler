import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home.jsx';
import Quiz from './pages/Quiz/Quiz.jsx';
import Error from './pages/Error/Error.jsx'
import './style.scss'
import StandartQuiz from './pages/StandartQuiz/StandartQuiz.jsx';
import RepeatQuiz from './pages/RepeatQuiz/RepeatQuiz.jsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/standart-quiz" element={<StandartQuiz />} />
        <Route path="/repeat-quiz" element={<RepeatQuiz />} />

        <Route path="/error" element={<Error />} />
      </Routes>
    </Router>
  );
}

export default App;
