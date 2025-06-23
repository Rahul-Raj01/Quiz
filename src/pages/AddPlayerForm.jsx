import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function AddPlayerForm() {
  const [name, setName] = useState('');
  const [category, setCategory] = useState('');
  const [difficulty, setDifficulty] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const playerData = {
      name,
      category,
      difficulty,
    };

    localStorage.setItem('playerData', JSON.stringify(playerData));

    console.log("Navigating to /quiz...");
    navigate('/quiz'); 
  };

  const isDisabled = !name || !category || !difficulty;

  return (
    <div style={{ paddingTop: '100px', textAlign: 'center' }}>
      <h2>Enter Quiz Details</h2>
      <form onSubmit={handleSubmit} style={{ display: 'inline-block', textAlign: 'left' }}>
        <label>Player Name:</label><br />
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} /><br /><br />

        <label>Category:</label><br />
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="">--Select--</option>
          <option value="General Knowledge">General Knowledge</option>
          <option value="Science">Science</option>
          <option value="History">History</option>
        </select><br /><br />

        <label>Difficulty:</label><br />
        <select value={difficulty} onChange={(e) => setDifficulty(e.target.value)}>
          <option value="">--Select--</option>
          <option value="Easy">Easy</option>
          <option value="Medium">Medium</option>
          <option value="Hard">Hard</option>
        </select><br /><br />

        <button type="submit" disabled={isDisabled}>Start Quiz</button>
      </form>
    </div>
  );
}

export default AddPlayerForm;
