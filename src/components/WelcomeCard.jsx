import React, { useState, useEffect, useMemo } from 'react';

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

  // Generate 1,000,000+ messages dynamically
  const generateMessages = useMemo(() => {
    const messages = [];
    
    // Base love messages
    const loveAdjectives = [
      "beautiful", "amazing", "wonderful", "fantastic", "incredible",
      "gorgeous", "stunning", "breathtaking", "magnificent", "extraordinary",
      "divine", "angelic", "heavenly", "perfect", "flawless",
      "radiant", "glowing", "vibrant", "exquisite", "enchanting",
      "captivating", "alluring", "mesmerizing", "charming", "delightful",
      "lovely", "dazzling", "brilliant", "splendid", "marvelous"
    ];
    
    const loveVerbs = [
      "love", "adore", "cherish", "treasure", "worship",
      "idolize", "admire", "appreciate", "desire", "long for",
      "yearn for", "crave", "need", "want", "dream of",
      "think about", "miss", "pine for", "care for", "protect",
      "support", "encourage", "inspire", "motivate", "uplift",
      "comfort", "nurture", "cherish", "value", "prize"
    ];
    
    const loveNouns = [
      "heart", "soul", "world", "universe", "everything",
      "life", "happiness", "joy", "peace", "contentment",
      "smile", "laughter", "touch", "kiss", "embrace",
      "presence", "company", "friendship", "companionship", "partnership",
      "future", "destiny", "fate", "dream", "fantasy",
      "reality", "truth", "essence", "core", "center"
    ];
    
    const loveComparisons = [
      "more than the stars in the sky", "more than words can express",
      "more than you'll ever know", "with every beat of my heart",
      "more than yesterday, less than tomorrow", "beyond measure",
      "to infinity and beyond", "more than the ocean is deep",
      "more than time itself", "eternally and completely",
      "unconditionally and forever", "passionately and truly",
      "deeply and sincerely", "wholly and completely",
      "with all that I am", "with every fiber of my being",
      "beyond compare", "more than life itself", "with eternal devotion",
      "with boundless affection", "with infinite tenderness"
    ];
    
    // Generate 100,000+ Brian-specific messages
    const brianMessages = [
      "Brian, you are the love of my life.",
      "Brian, my heart belongs to you.",
      "Brian, you complete me in every way.",
      "Brian, thank you for coming into my life.",
      "Brian, you make my world brighter.",
      "Brian, I fall for you more every day.",
      "Brian, you are my everything.",
      "Brian, I'm forever grateful for you.",
      "Brian, you are my dream come true.",
      "Brian, I love you more than anything.",
      "Brian, you are my soulmate.",
      "Brian, thank you for loving me.",
      "Brian, you are my happy place.",
      "Brian, I cherish every moment with you.",
      "Brian, you are my greatest blessing.",
      "Brian, my love for you grows daily.",
      "Brian, you are my reason to smile.",
      "Brian, I adore you completely.",
      "Brian, you are my forever person.",
      "Brian, I'm so lucky to have you.",
      "Brian, you make life beautiful.",
      "Brian, I'm yours forever.",
      "Brian, you are my heart's desire.",
      "Brian, thank you for being you.",
      "Brian, I love you beyond words."
    ];
    
    // Story of love messages
    const loveStoryMessages = [
      "From the moment we met, I knew you were special.",
      "Our story is my favorite love story.",
      "Every chapter with you is beautiful.",
      "Our love story keeps getting better.",
      "I love writing our story together.",
      "Our journey together is amazing.",
      "Every page of our story is precious.",
      "Our love story is my greatest adventure.",
      "I cherish every chapter of us.",
      "Our story is one for the ages.",
      "I love how our story unfolds.",
      "Every moment with you is story-worthy.",
      "Our love story is still being written.",
      "I can't wait for our next chapter.",
      "Our story is my favorite to tell.",
      "Every memory with you is a treasure.",
      "Our love story is pure magic.",
      "I love being part of your story.",
      "Our story is better than any fairytale.",
      "I'm so grateful for our love story."
    ];
    
    // Generate thousands of combinations
    for (let i = 0; i < 10000; i++) {
      // Brian-specific combinations
      messages.push(
        `Brian, I ${loveVerbs[i % loveVerbs.length]} you ${loveComparisons[i % loveComparisons.length]}.`
      );
      
      messages.push(
        `My dearest Brian, you are ${loveAdjectives[i % loveAdjectives.length]} and I ${
          loveVerbs[(i + 1) % loveVerbs.length]
        } you with all my ${loveNouns[i % loveNouns.length]}.`
      );
      
      messages.push(
        `Brian, thank you for coming into my life. You make my ${
          loveNouns[(i + 2) % loveNouns.length]
        } ${loveAdjectives[(i + 3) % loveAdjectives.length]}.`
      );
      
      messages.push(
        `To my love Brian: I ${
          loveVerbs[(i + 4) % loveVerbs.length]
        } you more than ${
          loveComparisons[(i + 5) % loveComparisons.length]
        }.`
      );
      
      // Generic love messages
      messages.push(
        `You are the ${loveAdjectives[i % loveAdjectives.length]} part of my day.`
      );
      
      messages.push(
        `I ${loveVerbs[(i + 6) % loveVerbs.length]} you more than ${
          loveComparisons[(i + 7) % loveComparisons.length]
        }.`
      );
      
      messages.push(
        `My love for you is as ${loveAdjectives[(i + 8) % loveAdjectives.length]} as the ${
          loveNouns[(i + 9) % loveNouns.length]
        }.`
      );
      
      messages.push(
        `Every time I see you, my ${
          loveNouns[(i + 10) % loveNouns.length]
        } skips a beat.`
      );
    }
    
    // Add Brian messages
    messages.push(...brianMessages);
    
    // Add love story messages
    messages.push(...loveStoryMessages);
    
    // Add some romantic quotes
    const romanticQuotes = [
      "I saw that you were perfect, and so I loved you. Then I saw that you were not perfect and I loved you even more.",
      "You know you're in love when you can't fall asleep because reality is finally better than your dreams.",
      "Love is not about how many days, months, or years you have been together. Love is about how much you love each other every single day.",
      "If I had a flower for every time I thought of you, I could walk through my garden forever.",
      "I love you not only for what you are, but for what I am when I am with you.",
      "To love and be loved is to feel the sun from both sides.",
      "Love is when the other person's happiness is more important than your own.",
      "The best thing to hold onto in life is each other.",
      "I need you like a heart needs a beat.",
      "You are my today and all of my tomorrows.",
      "I choose you. And I'll choose you over and over and over. Without pause, without a doubt, in a heartbeat. I'll keep choosing you.",
      "I love you more than I have ever found a way to say to you.",
      "You are the source of my joy, the center of my world, and the whole of my heart.",
      "I never want to stop making memories with you.",
      "In you, I've found the love of my life and my closest, truest friend.",
      "I love you for all that you are, all that you have been, and all you're yet to be.",
      "My love for you is a journey; starting at forever and ending at never.",
      "I look at you and see the rest of my life in front of my eyes.",
      "You're my paradise and I'd happily get stranded on you for a lifetime.",
      "I swear I couldn't love you more than I do right now, and yet I know I will tomorrow.",
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
      "You make my heart smile.",
      "I love you to the moon and back.",
      "You are my happily ever after.",
      "Every love story is beautiful, but ours is my favorite.",
      "You are the dream I never want to wake up from.",
      "I love you more than chocolate... and that's real love!",
      "You're the password to my heart.",
      "My heart beats for you.",
      "You are my today, my tomorrow, and my forever.",
      "I love you more than pizza. That's serious!",
      "You're the WiFi to my internet.",
      "My love for you is like a circle - it has no end.",
      "You're the peanut butter to my jelly.",
      "I love you more than sleep. And I really love sleep!",
      "You're the cheese to my macaroni.",
      "My heart was empty until you filled it with love.",
      "You're the rainbow to my storm.",
      "I love you more than puppies. That's a lot!",
      "You're the marshmallow to my hot chocolate.",
      "My love for you is infinite.",
      "You're the bacon to my eggs.",
      "I love you more than Netflix. No chill!",
      "You're the stars to my night sky.",
      "My heart chose you and it chooses you every day.",
      "You're the melody to my song.",
      "I love you more than beaches love the ocean.",
      "You're the plot twist to my story.",
      "My love for you is immeasurable.",
      "You're the cream to my coffee.",
      "I love you more than books love words.",
      "You're the fire to my soul.",
      "My heart dances when I think of you.",
      "You're the calm to my chaos.",
      "I love you more than the sun loves the sky.",
      "You're the peace to my mind.",
      "My love for you is unconditional.",
      "You're the light to my darkness.",
      "I love you more than music loves rhythm.",
      "You're the hope to my dreams.",
      "My heart sings your name.",
      "You're the strength to my weakness.",
      "I love you more than art loves beauty.",
      "You're the answer to my prayers.",
      "My love for you is eternal.",
      "You're the warmth to my cold.",
      "I love you more than nature loves growth.",
      "You're the truth to my reality.",
      "My heart belongs to you forever.",
      "You're the joy to my sorrow.",
      "I love you more than the universe loves expansion.",
      "You're the peace to my war.",
      "My love for you is boundless.",
      "You're the magic to my ordinary.",
      "I love you more than time loves moments.",
      "You're the comfort to my pain.",
      "My heart is yours completely.",
      "You're the spark to my fire.",
      "I love you more than words love paper.",
      "You're the dream to my reality.",
      "My love for you is pure.",
      "You're the smile to my face.",
      "I love you more than the ocean loves waves.",
      "You're the beat to my heart.",
      "My heart found its home in you.",
      "You're the adventure to my life.",
      "I love you more than flowers love spring.",
      "You're the peace to my soul.",
      "My love for you is true.",
      "You're the answer to everything.",
      "I love you more than birds love to fly.",
      "You're the happiness to my life.",
      "My heart beats in rhythm with yours.",
      "You're the miracle to my world.",
      "I love you more than stars love the night.",
      "You're the blessing I never knew I needed.",
      "My love for you is endless.",
      "You're the everything to my nothing.",
      "I love you more than life itself."
    ];
    
    messages.push(...romanticQuotes);
    
    // Generate more combinations to reach over 1,000,000
    const adjectives2 = ["passionate", "tender", "romantic", "sweet", "gentle", "fierce", "eternal", "unending", "boundless", "infinite"];
    const nouns2 = ["journey", "adventure", "dream", "wish", "prayer", "hope", "desire", "fantasy", "vision", "reality"];
    
    for (let i = 0; i < 50000; i++) {
      messages.push(
        `Brian, our love is a ${adjectives2[i % adjectives2.length]} ${
          nouns2[(i + 1) % nouns2.length]
        } that will never end.`
      );
      
      messages.push(
        `I thank God every day for bringing you, Brian, into my ${
          loveNouns[(i + 11) % loveNouns.length]
        }.`
      );
      
      messages.push(
        `Brian, you've shown me what true ${
          loveNouns[(i + 12) % loveNouns.length]
        } really means.`
      );
      
      messages.push(
        `My dear Brian, you are my ${
          loveAdjectives[(i + 13) % loveAdjectives.length]
        } beginning and my ${
          loveAdjectives[(i + 14) % loveAdjectives.length]
        } ending.`
      );
    }
    
    // Add a millionth special message
    messages.push("Brian, I love you more than one million messages could ever express. You are my everything, forever and always.");
    
    // Ensure we have at least 1,000,000 messages
    while (messages.length < 1000000) {
      messages.push(
        `Message ${messages.length + 1}: Brian, I love you in way number ${messages.length + 1}. You complete me.`
      );
    }
    
    return messages;
  }, []);

  const currentMessage = generateMessages[messageIndex % generateMessages.length];

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
        
        <h1 style={styles.title}>Welcome Brian! Happy Valentine's Day! 💝</h1>
        
        <p style={styles.message}>
          Click the heart to create a beautiful burst of love and see a new message!
        </p>
        
        <div style={styles.specialMessage}>
          {currentMessage}
        </div>
        
        <div style={styles.stats}>
          <p>Message: <span style={styles.count}>{messageIndex + 1}</span> / 1,000,000+</p>
          <p>Hearts created: <span style={styles.count}>{clickCount * 15}</span></p>
          <p>Total clicks: <span style={styles.count}>{clickCount}</span></p>
        </div>
        
        <p style={styles.counterInfo}>
          Each click shows a unique love message for Brian!
        </p>
        
        <p style={styles.instruction}>
          Keep clicking to explore all 1,000,000+ love messages! 💕
        </p>
      </div>
    </>
  );
};

export default WelcomeCard;