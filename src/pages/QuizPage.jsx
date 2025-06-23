import React, { useEffect, useState, useRef } from 'react';
import questionsData from '../data/questions';
import { useNavigate } from 'react-router-dom';

function QuizPage() {
  const [player, setPlayer] = useState(null);
  const [questions, setQuestions] = useState([]);
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState(null);
  const [showAnswer, setShowAnswer] = useState(false);
  const [timer, setTimer] = useState(15);
  const [score, setScore] = useState(0); // for display only
  const scoreRef = useRef(0); // for accurate value during timeout

  const navigate = useNavigate();

  // Load player and questions
  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem('playerData'));
    if (stored) {
      setPlayer(stored);
      const qset = questionsData[stored.category][stored.difficulty];
      setQuestions(qset || []);
    }
  }, []);

  // Timer countdown
  useEffect(() => {
    if (showAnswer) return;
    const interval = setInterval(() => {
      setTimer((prev) => {
        if (prev === 1) {
          clearInterval(interval);
          handleNext(); // auto move if timeout
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, [current, showAnswer]);

  // Handle option click
  const handleOptionClick = (option) => {
    if (!showAnswer) {
      setSelected(option);
      setShowAnswer(true);

      const isCorrect = option === questions[current].correct;
      if (isCorrect) {
        scoreRef.current += 1;
        setScore(scoreRef.current); // update for display
      }

      setTimeout(() => {
        handleNext();
      }, 1500);
    }
  };

  // Move to next question or end quiz
  const handleNext = () => {
    setSelected(null);
    setShowAnswer(false);
    setTimer(15);

    if (current + 1 < questions.length) {
      setCurrent(current + 1);
    } else {
      const result = {
        name: player.name,
        score: scoreRef.current,
        total: questions.length,
        date: new Date().toLocaleString(),
      };
      const old = JSON.parse(localStorage.getItem('quizHistory')) || [];
      localStorage.setItem('quizHistory', JSON.stringify([...old, result]));
      navigate('/score');
    }
  };

  if (!player || questions.length === 0) {
    return <div style={{ paddingTop: '100px', textAlign: 'center' }}>Loading questions...</div>;
  }

  const currentQ = questions[current];

  return (
    <div style={{ paddingTop: '100px', textAlign: 'center' }}>
      <h2>Question {current + 1} of {questions.length}</h2>
      <h3>{currentQ.question}</h3>
      <p style={{ fontWeight: 'bold' }}>⏱️ Time Left: {timer}s</p>
      <p><strong>Score:</strong> {score}</p>
      <div style={{ marginTop: '20px' }}>
        {currentQ.options.map((opt, i) => (
          <button
            key={i}
            onClick={() => handleOptionClick(opt)}
            style={{
              margin: '10px',
              padding: '10px 20px',
              backgroundColor: showAnswer
                ? opt === currentQ.correct
                  ? 'green'
                  : opt === selected
                  ? 'red'
                  : ''
                : '',
              color: showAnswer ? 'white' : 'black',
              cursor: showAnswer ? 'default' : 'pointer',
              border: '1px solid #aaa',
              borderRadius: '5px'
            }}
            disabled={showAnswer}
          >
            {opt}
          </button>
        ))}
      </div>
    </div>
  );
}

export default QuizPage;
