import React from 'react';
import bgImage from '../assets/omnitrix.jpeg'; 
import { Link } from 'react-router-dom';


function HomePage() {
  return (
    <div
      style={{
        paddingTop: '120px',
        textAlign: 'center',
        fontFamily: "'Orbitron', sans-serif",
        color: 'white',
        minHeight: '100vh',
        backgroundImage: `url(${bgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed'
      }}
    >
      <div style={{
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
        padding: '40px 20px',
        borderRadius: '12px',
        maxWidth: '800px',
        margin: 'auto',
        boxShadow: '0 0 20px rgba(0, 255, 0, 0.3)'
      }}>
        <h1 style={{
  fontSize: '52px',
  color: '#006400', 
  textShadow: '1px 1px 4px rgba(0,0,0,0.6)', 
  marginBottom: '20px',
  fontWeight: 'bold'
}}>
  Welcome to the Quiz!
</h1>


        <p style={{
          fontSize: '20px',
          color: '#eeeeee',
          marginBottom: '30px'
        }}>
          Transform your brain and test your alien-level knowledge across General Knowledge, Science, and History.<br />
          Choose wisely... and don’t let the clock run out! ⏱️
        </p>
<Link to="/add-player">
  <button style={{
    marginTop: '30px',
    padding: '12px 30px',
    fontSize: '18px',
    backgroundColor: '#006400',
    color: 'white',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    boxShadow: '0 0 10px rgba(0, 100, 0, 0.6)',
    transition: 'transform 0.2s ease'
  }}
    onMouseOver={(e) => e.currentTarget.style.transform = "scale(1.05)"}
    onMouseOut={(e) => e.currentTarget.style.transform = "scale(1)"}
  >
   Start Quiz
  </button>
</Link>
      </div>
    </div>
  );
}

export default HomePage;
