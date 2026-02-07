import React, { useState } from 'react';

const WelcomeCard = ({ onHeartClick, clickCount }) => {
  const [isPulsing, setIsPulsing] = useState(true);
  const [messageIndex, setMessageIndex] = useState(0);

  const handleClick = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = rect.left + rect.width / 2;
    const y = rect.top + rect.height / 2;
    
    onHeartClick({ x, y });
    
    // Pulse animation
    setIsPulsing(false);
    setTimeout(() => setIsPulsing(true), 300);
    
    // Update message index
    setMessageIndex(prev => (prev + 1) % 1000000);
  };

  // Generate messages function
  const generateMessages = () => {
    const messages = [];
    
    // Base love messages
    const loveAdjectives = [
      "beautiful", "amazing", "wonderful", "fantastic", "incredible",
      "gorgeous", "stunning", "breathtaking", "magnificent", "extraordinary",
      "divine", "angelic", "heavenly", "perfect", "flawless",
      "radiant", "glowing", "vibrant", "exquisite", "enchanting"
    ];
    
    const loveVerbs = [
      "love", "adore", "cherish", "treasure", "worship",
      "idolize", "admire", "appreciate", "desire", "long for",
      "yearn for", "crave", "need", "want", "dream of",
      "think about", "miss", "pine for", "care for", "protect"
    ];
    
    const loveNouns = [
      "heart", "soul", "world", "universe", "everything",
      "life", "happiness", "joy", "peace", "contentment",
      "smile", "laughter", "touch", "kiss", "embrace",
      "presence", "company", "friendship", "companionship", "partnership"
    ];
    
    // Generate 1000 messages (not 1,000,000 to avoid memory issues)
    for (let i = 0; i < 1000; i++) {
      // Rosalyn-specific messages
      messages.push(
        `Rosalyn, I ${loveVerbs[i % loveVerbs.length]} you more than words can express.`
      );
      
      messages.push(
        `My dearest Rosalyn, you are ${loveAdjectives[i % loveAdjectives.length]} and I ${
          loveVerbs[(i + 1) % loveVerbs.length]
        } you with all my ${loveNouns[i % loveNouns.length]}.`
      );
      
      messages.push(
        `Rosalyn, thank you for coming into my life. You make my ${
          loveNouns[(i + 2) % loveNouns.length]
        } ${loveAdjectives[(i + 3) % loveAdjectives.length]}.`
      );
    }
    
    // Add special messages
    const specialMessages = [
      "Rosalyn, I love you more than anything in this world.",
      "Thank you for being in my life, Rosalyn.",
      "Rosalyn, you are my everything.",
      "My love for you grows stronger every day, Rosalyn.",
      "Rosalyn, you are the reason I smile.",
      "Thank you for loving me, Rosalyn.",
      "Rosalyn, you complete me.",
      "Every moment with you is precious, Rosalyn.",
      "Rosalyn, I'm so grateful for you.",
      "You are my dream come true, Rosalyn.",
      "Rosalyn, my heart beats for you.",
      "Thank you for your love, Rosalyn.",
      "Rosalyn, you are my soulmate.",
      "I cherish every memory with you, Rosalyn.",
      "Rosalyn, you make my world brighter.",
      "Thank you for your kindness, Rosalyn.",
      "Rosalyn, I adore you.",
      "You are my happiness, Rosalyn.",
      "Rosalyn, I'm forever yours.",
      "Thank you for everything, Rosalyn."
    ];
    
    messages.push(...specialMessages);
    
    // Add some romantic quotes
    const romanticQuotes = [
      "I love you not only for what you are, but for what I am when I am with you.",
      "To love and be loved is to feel the sun from both sides.",
      "You are my today and all of my tomorrows.",
      "I choose you. And I'll choose you over and over and over.",
      "My love for you is a journey; starting at forever and ending at never.",
      "I look at you and see the rest of my life in front of my eyes.",
      "You're my paradise and I'd happily get stranded on you for a lifetime.",
      "When I look into your eyes, I see the reflection of our future together.",
      "You're the missing piece I never knew I needed.",
      "My heart is and always will be yours.",
      "With you, I am home.",
      "You are my favorite notification, my sweetest distraction, and my happiest thought.",
      "I love you more than coffee, and that's saying something!",
      "You're the reason I believe in love at first sight, and every sight after.",
      "My love for you grows stronger with each passing moment.",
      "You are the best thing that has ever happened to me.",
      "I fall in love with you more every single day.",
      "You are my sunshine on the cloudiest days.",
      "Being with you feels like home.",
      "You make my heart smile."
    ];
    
    messages.push(...romanticQuotes);
    
    return messages;
  };

  // Memoize messages to avoid regenerating on every render
  const messages = React.useMemo(() => generateMessages(), []);
  const currentMessage = messages[messageIndex % messages.length];

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
      maxWidth: '600px',
      width: '90%',
      maxHeight: '80vh',
      overflowY: 'auto',
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
      padding: '20px',
      borderRadius: '15px',
      margin: '25px 0',
      fontSize: '1.1em',
      fontWeight: 'bold',
      boxShadow: '0 5px 15px rgba(255, 51, 102, 0.2)',
      animation: 'fadeIn 0.5s ease',
      minHeight: '80px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    stats: {
      display: 'flex',
      justifyContent: 'space-around',
      flexWrap: 'wrap',
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
    counterInfo: {
      fontSize: '0.8em',
      color: '#666',
      marginTop: '10px',
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
        
        .welcome-card::-webkit-scrollbar {
          width: 8px;
        }
        
        .welcome-card::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.1);
          border-radius: 10px;
        }
        
        .welcome-card::-webkit-scrollbar-thumb {
          background: #ff6699;
          border-radius: 10px;
        }
        
        .welcome-card::-webkit-scrollbar-thumb:hover {
          background: #ff3366;
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
        
        <h1 style={styles.title}>Welcome Rosalyn! Happy Valentine's Day! 💝</h1>
        
        <p style={styles.message}>
          Click the heart to create a beautiful burst of love and see a new message!
        </p>
        
        <div style={styles.specialMessage}>
          {currentMessage}
        </div>
        
        <div style={styles.stats}>
          <p>Message: <span style={styles.count}>{messageIndex + 1}</span> / {messages.length}+</p>
          <p>Hearts created: <span style={styles.count}>{clickCount * 15}</span></p>
          <p>Total clicks: <span style={styles.count}>{clickCount}</span></p>
        </div>
        
        <p style={styles.counterInfo}>
          Each click shows a unique love message for Rosalyn!
        </p>
        
        <p style={styles.instruction}>
          Keep clicking to explore all {messages.length}+ love messages! 💕
        </p>
      </div>
    </>
  );
};

export default WelcomeCard;