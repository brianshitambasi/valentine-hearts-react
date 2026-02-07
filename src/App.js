import React, { useState, useEffect, useRef, useCallback } from 'react';
import FloatingHearts from './components/FloatingHearts';
import HeartBurst from './components/HeartBurst';
import WelcomeCard from './components/WelcomeCard';
import './App.css';

function App() {
  const [hearts, setHearts] = useState([]);
  const [floatingHearts, setFloatingHearts] = useState([]);
  const [clickCount, setClickCount] = useState(0);
  const containerRef = useRef(null);

  const getRandomColor = useCallback(() => {
    const colors = ['#ff3366', '#ff6699', '#ff99bb', '#ff0066'];
    return colors[Math.floor(Math.random() * colors.length)];
  }, []);

  const addFloatingHeart = useCallback(() => {
    const newHeart = {
      id: `floating-${Date.now()}-${Math.random()}`,
      left: Math.random() * 100,
      size: 15 + Math.random() * 30,
      color: getRandomColor(),
      duration: 8 + Math.random() * 15,
      delay: Math.random() * 3,
    };
    setFloatingHearts(prev => {
      // Keep last 50 hearts
      const updated = [...prev, newHeart];
      return updated.slice(-50);
    });
  }, [getRandomColor]);

  // Create initial floating hearts
  useEffect(() => {
    const initialHearts = Array.from({ length: 15 }, (_, i) => ({
      id: `initial-${i}`,
      left: Math.random() * 100,
      size: 15 + Math.random() * 25,
      color: getRandomColor(),
      duration: 8 + Math.random() * 12,
      delay: Math.random() * 5,
    }));
    setFloatingHearts(initialHearts);
  }, [getRandomColor]);

  // Add new floating hearts periodically
  useEffect(() => {
    const interval = setInterval(() => {
      addFloatingHeart();
    }, 2000);

    return () => clearInterval(interval);
  }, [addFloatingHeart]);

  const handleHeartClick = useCallback((position) => {
    setClickCount(prev => prev + 1);
    
    // Create burst hearts
    const newHearts = Array.from({ length: 15 }, (_, i) => ({
      id: `burst-${Date.now()}-${i}-${Math.random()}`,
      startX: position.x,
      startY: position.y,
      angle: Math.random() * Math.PI * 2,
      distance: 100 + Math.random() * 200,
      color: getRandomColor(),
      duration: 800 + Math.random() * 800,
      size: 15 + Math.random() * 20,
    }));
    
    setHearts(prev => {
      const updated = [...prev, ...newHearts];
      // Keep last 50 hearts
      return updated.slice(-50);
    });
    
    // Clean up burst hearts after animation
    setTimeout(() => {
      setHearts(prev => prev.filter(h => !h.id.includes('burst')));
    }, 2000);
  }, [getRandomColor]);

  // Responsive adjustments
  useEffect(() => {
    const handleResize = () => {
      // Clear and recreate floating hearts on resize
      const newHearts = Array.from({ length: 10 }, (_, i) => ({
        id: `resize-${Date.now()}-${i}`,
        left: Math.random() * 100,
        size: 15 + Math.random() * 25,
        color: getRandomColor(),
        duration: 8 + Math.random() * 12,
        delay: Math.random() * 5,
      }));
      setFloatingHearts(newHearts);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [getRandomColor]);

  return (
    <div className="app" ref={containerRef}>
      <FloatingHearts hearts={floatingHearts} />
      <HeartBurst hearts={hearts} />
      <WelcomeCard 
        onHeartClick={handleHeartClick} 
        clickCount={clickCount} 
      />
    </div>
  );
}

export default App;