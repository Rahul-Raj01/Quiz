import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function ScorePage() {
  const [result, setResult] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const history = JSON.parse(localStorage.getItem('quizHistory')) || [];
    const latest = history[history.length - 1];
    setResult(latest);
  }, []);

  const getMessage = () => {
    if (!result) return '';
    const percent = (result.score / result.total) * 100;
    if (percent >= 80) return '🔥 Quiz Champion!';
    if (percent >= 50) return '😎 Good Effort!';
    return '☕ More caffeine maybe?';
  };

  const handleReplay = () => {
    localStorage.removeItem('playerData');
    navigate('/add-player');
  };

  if (!result) {
    return <div style={{ paddingTop: '100px', textAlign: 'center' }}>Loading results...</div>;
  }

  return (
    <div style={{ paddingTop: '100px', textAlign: 'center' }}>
      <h2>🎉 Quiz Completed!</h2>
      <p><strong>Name:</strong> {result.name}</p>
      <p><strong>Score:</strong> {result.score} / {result.total}</p>
      <p><strong>Date:</strong> {result.date}</p>
      <h3 style={{ color: 'purple' }}>{getMessage()}</h3>

      <button onClick={handleReplay} style={{ marginTop: '20px', padding: '10px 20px' }}>
        🔁 Play Again
      </button>
    </div>
  );
}

export default ScorePage;
