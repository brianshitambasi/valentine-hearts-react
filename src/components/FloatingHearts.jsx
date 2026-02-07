import React from 'react';

const FloatingHearts = ({ hearts }) => {
  const styles = {
    container: {
      position: 'fixed',
      width: '100%',
      height: '100%',
      top: 0,
      left: 0,
      pointerEvents: 'none',
      zIndex: 1,
    },
    heart: {
      position: 'absolute',
      bottom: '-50px',
      opacity: 0,
      userSelect: 'none',
      pointerEvents: 'none',
    }
  };

  // Inline CSS for the animation
  const floatAnimation = `
    @keyframes float {
      0% {
        transform: translateY(100vh) rotate(0deg);
        opacity: 0;
      }
      10% {
        opacity: 0.7;
      }
      90% {
        opacity: 0.7;
      }
      100% {
        transform: translateY(-100px) rotate(360deg);
        opacity: 0;
      }
    }
  `;

  return (
    <>
      <style>{floatAnimation}</style>
      <div style={styles.container}>
        {hearts.map((heart) => (
          <div
            key={heart.id}
            style={{
              ...styles.heart,
              left: `${heart.left}%`,
              fontSize: `${heart.size}px`,
              color: heart.color,
              animation: `float ${heart.duration}s linear ${heart.delay}s forwards`,
            }}
          >
            ❤️
          </div>
        ))}
      </div>
    </>
  );
};

export default FloatingHearts;