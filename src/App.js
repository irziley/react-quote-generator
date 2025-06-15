import React, { useState } from 'react';

const quotes = [
  "You are enough just as you are.",
  "Believe you can and you're halfway there.",
  "Don't be pushed around by the fears in your mind.",
  "The only way out is through.",
  "Your vibe attracts your tribe.",
  "I am not behind. I’m just growing on my own timeline.",
  "Even on quiet days, I am becoming.",
  "Being soft is a strength, not a flaw.",
  "My worth isn't tied to what I produce.",
  "Every step forward counts — even if it’s tiny."
];

function App() {
  const [quote, setQuote] = useState(quotes[0]);

  const getRandomQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setQuote(quotes[randomIndex]);
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Quote Generator</h1>
      <p style={styles.quote}>{quote}</p>
      <button onClick={getRandomQuote} style={styles.button}>New Quote</button>
    </div>
  );
}

const styles = {
  container: {
    height: '100vh',
    background: '#f5f5f5',
    color: '#333',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: 'sans-serif',
    padding: '20px',
    textAlign: 'center'
  },
  heading: {
    fontSize: '2rem',
    marginBottom: '20px'
  },
  quote: {
    fontSize: '1.5rem',
    marginBottom: '30px',
    fontStyle: 'italic'
  },
  button: {
    padding: '10px 20px',
    fontSize: '1rem',
    borderRadius: '8px',
    border: 'none',
    backgroundColor: '#007BFF',
    color: 'white',
    cursor: 'pointer'
  }
};

export default App;