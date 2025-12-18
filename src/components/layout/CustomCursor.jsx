import { useEffect, useRef, useState } from 'react';

const CustomCursor = () => {
  const [isHovering, setIsHovering] = useState(false);
  const cursorDot = useRef(null);
  const cursorRing = useRef(null);

  useEffect(() => {
    let mouseX = 0;
    let mouseY = 0;
    let dotX = 0;
    let dotY = 0;
    let ringX = 0;
    let ringY = 0;

    // Update mouse position instantly
    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    // Throttled hover detection
    let hoverTimeout;
    const handleMouseOver = (e) => {
      clearTimeout(hoverTimeout);
      hoverTimeout = setTimeout(() => {
        if (
          e.target.tagName === 'A' ||
          e.target.tagName === 'BUTTON' ||
          e.target.closest('a') ||
          e.target.closest('button')
        ) {
          setIsHovering(true);
        } else {
          setIsHovering(false);
        }
      }, 50);
    };

    // Smooth animation using requestAnimationFrame
    const animate = () => {
      // Smooth follow effect
      dotX += (mouseX - dotX) * 0.25;
      dotY += (mouseY - dotY) * 0.25;
      ringX += (mouseX - ringX) * 0.15;
      ringY += (mouseY - ringY) * 0.15;

      if (cursorDot.current) {
        cursorDot.current.style.transform = `translate(${dotX - 8}px, ${dotY - 8}px) scale(${isHovering ? 1.5 : 1})`;
      }
      if (cursorRing.current) {
        cursorRing.current.style.transform = `translate(${ringX - 20}px, ${ringY - 20}px) scale(${isHovering ? 1.5 : 1})`;
      }

      requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseover', handleMouseOver);
    animate();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseover', handleMouseOver);
      clearTimeout(hoverTimeout);
    };
  }, [isHovering]);

  return (
    <>
      {/* Main cursor dot */}
      <div
        ref={cursorDot}
        className="fixed top-0 left-0 w-4 h-4 bg-primary-500 rounded-full pointer-events-none z-50 mix-blend-difference transition-transform duration-150"
        style={{ willChange: 'transform' }}
      />
      
      {/* Cursor ring */}
      <div
        ref={cursorRing}
        className="fixed top-0 left-0 w-10 h-10 border-2 border-primary-500/50 rounded-full pointer-events-none z-50 mix-blend-difference transition-transform duration-200"
        style={{ willChange: 'transform' }}
      />
    </>
  );
};

export default CustomCursor;
