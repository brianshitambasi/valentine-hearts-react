import React, { useEffect, useState } from 'react';

const HeartBurst = ({ hearts }) => {
  const [activeHearts, setActiveHearts] = useState([]);

  useEffect(() => {
    setActiveHearts(hearts);
  }, [hearts]);

  const styles = {
    container: {
      position: 'fixed',
      width: '100%',
      height: '100%',
      top: 0,
      left: 0,
      pointerEvents: 'none',
      zIndex: 2,
    },
    heart: {
      position: 'absolute',
      fontSize: '20px',
      pointerEvents: 'none',
      userSelect: 'none',
    },
    burstAnimation: `@keyframes burst {
      0% {
        transform: translate(0, 0) scale(1) rotate(0deg);
        opacity: 1;
      }
      100% {
        opacity: 0;
      }
    }`
  };

  return (
    <>
      <style>{styles.burstAnimation}</style>
      <div className="heart-burst-container" style={styles.container}>
        {activeHearts.map((heart) => {
          const endX = Math.cos(heart.angle) * heart.distance;
          const endY = Math.sin(heart.angle) * heart.distance;
          
          return (
            <div
              key={heart.id}
              className="burst-heart"
              style={{
                ...styles.heart,
                left: `${heart.startX}px`,
                top: `${heart.startY}px`,
                fontSize: `${heart.size}px`,
                color: heart.color,
                animation: `burst ${heart.duration}ms cubic-bezier(0.215, 0.610, 0.355, 1) forwards`,
                transformOrigin: 'center',
                '--end-x': `${endX}px`,
                '--end-y': `${endY}px`,
              }}
            >
              ❤️
            </div>
          );
        })}
      </div>
    </>
  );
};

export default HeartBurst;