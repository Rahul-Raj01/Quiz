import React from 'react';

function AboutPage() {
  return (
    <div style={{ paddingTop: '100px', textAlign: 'center', maxWidth: '700px', margin: 'auto' }}>
      <h2>🧠 About This App</h2>

      <p>This is a quiz app built as part of the KTJ Web Development & AI Workshop 2025.</p>
      <p>It includes player registration, dynamic quiz rendering, score tracking, and a leaderboard using <strong>localStorage</strong>.</p>

      <h3>🛠️ Technologies Used:</h3>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        <li>✅ ReactJS (Functional Components)</li>
        <li>✅ React Router DOM</li>
        <li>✅ Vanilla CSS</li>
        <li>✅ JavaScript (ES6)</li>
        <li>✅ No backend! Data stored using localStorage</li>
      </ul>

      <h3>📚 What I Learned:</h3>
      <p>
        I learned how to manage state in React, use routing to build multi-page SPAs, and store user data using localStorage. 
        I also learned how to make a responsive UI and debug React apps.
      </p>

    

      <p style={{ marginTop: '30px' }}><em>Keep learning. Keep building. 🚀</em></p>
    </div>
  );
}

export default AboutPage;
