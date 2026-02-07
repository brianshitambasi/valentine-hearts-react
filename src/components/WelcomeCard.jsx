import React, { useState } from 'react';

const WelcomeCard = ({ onHeartClick, clickCount }) => {
  const [isPulsing, setIsPulsing] = useState(true);

  const handleClick = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = rect.left + rect.width / 2;
    const y = rect.top + rect.height / 2;
    
    onHeartClick({ x, y });
    
    // Pulse animation
    setIsPulsing(false);
    setTimeout(() => setIsPulsing(true), 300);
  };

  const messages = [
    "You fill my world with love!",
    "Every beat of my heart belongs to you!",
    "My love for you grows stronger every day!",
    "You are the sunshine of my life!",
    "I love you more than words can express!"
  ];

  const currentMessage = messages[clickCount % messages.length];

  const styles = {
    card: {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      background: 'rgba(255, 255, 255, 0.95)',
      padding: '40px',
      borderRadius: '25px',
      textAlign: 'center',
      boxShadow: '0 15px 35px rgba(0, 0, 0, 0.2)',
      zIndex: 3,
      maxWidth: '500px',
      width: '90%',
      backdropFilter: 'blur(10px)',
      border: '2px solid rgba(255, 255, 255, 0.3)',
      transition: 'transform 0.3s ease',
    },
    heart: {
      fontSize: '70px',
      color: '#ff3366',
      cursor: 'pointer',
      marginBottom: '20px',
      display: 'inline-block',
      transition: 'all 0.3s ease',
      userSelect: 'none',
      animation: isPulsing ? 'heartbeat 1.2s ease-in-out infinite' : 'none',
    },
    title: {
      color: '#ff3366',
      margin: '0 0 20px 0',
      textShadow: '1px 1px 3px rgba(0, 0, 0, 0.1)',
      fontSize: '2.5em',
    },
    message: {
      color: '#333',
      lineHeight: 1.6,
      fontSize: '1.2em',
      marginBottom: '25px',
    },
    specialMessage: {
      background: 'linear-gradient(135deg, #ff758c, #ff7eb3)',
      color: 'white',
      padding: '15px 25px',
      borderRadius: '15px',
      margin: '25px 0',
      fontSize: '1.1em',
      fontWeight: 'bold',
      boxShadow: '0 5px 15px rgba(255, 51, 102, 0.2)',
      animation: 'fadeIn 0.5s ease',
    },
    stats: {
      display: 'flex',
      justifyContent: 'space-around',
      margin: '20px 0',
      padding: '15px',
      background: 'rgba(255, 255, 255, 0.5)',
      borderRadius: '10px',
    },
    count: {
      fontWeight: 'bold',
      color: '#ff3366',
      fontSize: '1.2em',
    },
    instruction: {
      color: '#888',
      fontSize: '0.9em',
      marginTop: '20px',
      fontStyle: 'italic',
    },
    heartbeatAnimation: `@keyframes heartbeat {
      0%, 100% { transform: scale(1); }
      50% { transform: scale(1.15); }
    }`,
    fadeInAnimation: `@keyframes fadeIn {
      from { opacity: 0; transform: translateY(10px); }
      to { opacity: 1; transform: translateY(0); }
    }`
  };

  return (
    <>
      <style>{`
        ${styles.heartbeatAnimation}
        ${styles.fadeInAnimation}
        
        .welcome-card:hover {
          transform: translate(-50%, -50%) scale(1.02);
        }
        
        .main-heart:hover {
          transform: scale(1.2);
          filter: brightness(1.2);
        }
      `}</style>
      <div className="welcome-card" style={styles.card}>
        <div 
          className="main-heart"
          style={styles.heart}
          onClick={handleClick}
        >
          ❤️
        </div>
        
        <h1 style={styles.title}>Welcome to Valentine's Day!</h1>
        
        <p style={styles.message}>
          Click the heart to create a beautiful burst of love!
        </p>
        
        <div style={styles.specialMessage}>
          {currentMessage}
        </div>
        
        <div style={styles.stats}>
          <p>Hearts created: <span style={styles.count}>{clickCount * 15}</span></p>
          <p>Total clicks: <span style={styles.count}>{clickCount}</span></p>
        </div>
        
        <p style={styles.instruction}>
          Keep clicking to see different love messages!
        </p>
      </div>
    </>
  );
};

export default WelcomeCard;