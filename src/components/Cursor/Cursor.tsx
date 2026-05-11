import { useState, useEffect } from 'react';
import styles from './Cursor.module.css';

const Cursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    // 터치 기기인지 확인
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    if (isTouchDevice) {
      setIsHidden(true);
      return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      // requestAnimationFrame을 사용하여 성능 최적화
      requestAnimationFrame(() => {
        setPosition({ x: e.clientX, y: e.clientY });
        
        const target = e.target as HTMLElement;
        if (target) {
          setIsPointer(window.getComputedStyle(target).cursor === 'pointer');
        }
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  if (isHidden) return null;

  return (
    <div 
      className={`${styles.cursor} ${isPointer ? styles.pointer : ''}`}
      style={{ 
        transform: `translate3d(${position.x - 10}px, ${position.y - 10}px, 0) scale(${isPointer ? 2.5 : 1})`,
        backgroundColor: isPointer ? 'rgba(255, 62, 0, 0.3)' : 'var(--accent-color)',
        border: isPointer ? '2px solid var(--accent-color)' : 'none'
      }}
    />
  );
};

export default Cursor;
