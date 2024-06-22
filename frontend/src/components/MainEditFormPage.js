import React from 'react';
import { Link } from 'react-router-dom';

const App = () => {
  const styles = {
    body: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      backgroundColor: '#f0f8ff',
      margin: 0,
      flexDirection: 'column',
    },
    button: {
      display: 'inline-block',
      padding: '15px 30px',
      margin: '10px',
      fontSize: '16px',
      color: 'white',
      textDecoration: 'none',
      borderRadius: '5px',
      transition: 'background-color 0.3s ease',
    },
    button1: {
      backgroundColor: '#ff5733',
    },
    button2: {
      backgroundColor: '#33c3ff',
    },
    button3: {
      backgroundColor: '#33ff57',
    },
  };

  return (
    <div style={styles.body}>
      <Link to="/page1" style={{ ...styles.button, ...styles.button1 }}>Button 1</Link>
      <Link to="/page2" style={{ ...styles.button, ...styles.button2 }}>Button 2</Link>
      <Link to="/page3" style={{ ...styles.button, ...styles.button3 }}>Button 3</Link>
    </div>
  );
}

export default App;
