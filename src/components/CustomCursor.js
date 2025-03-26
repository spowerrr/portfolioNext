'use client';

import { useState, useEffect, useRef } from 'react';

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [followerPosition, setFollowerPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const cursorRef = useRef(null);
  const followerRef = useRef(null);
  const velocityRef = useRef({ x: 0, y: 0 });
  const lastPositionRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const updateCursorPosition = (e) => {
      lastPositionRef.current = position;
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    const handleElementMouseEnter = () => setIsHovering(true);
    const handleElementMouseLeave = () => setIsHovering(false);

    // Add event listeners
    document.addEventListener('mousemove', updateCursorPosition);
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);

    // Add hover effect to interactive elements
    const interactiveElements = document.querySelectorAll('a, button, .card, input, textarea, select, [role="button"]');
    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', handleElementMouseEnter);
      el.addEventListener('mouseleave', handleElementMouseLeave);
    });

    // Smooth follower animation
    const animateFollower = () => {
      if (followerRef.current) {
        const currentX = followerRef.current.offsetLeft;
        const currentY = followerRef.current.offsetTop;
        const targetX = position.x;
        const targetY = position.y + 5; // Reduced offset for faster following

        // Direct movement with high easing factor
        const newX = currentX + (targetX - currentX) * 0.9;
        const newY = currentY + (targetY - currentY) * 0.9;

        setFollowerPosition({ x: newX, y: newY });
      }
      requestAnimationFrame(animateFollower);
    };

    animateFollower();

    // Cleanup
    return () => {
      document.removeEventListener('mousemove', updateCursorPosition);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
      interactiveElements.forEach(el => {
        el.removeEventListener('mouseenter', handleElementMouseEnter);
        el.removeEventListener('mouseleave', handleElementMouseLeave);
      });
    };
  }, [position]);

  return (
    <>
      <div 
        ref={cursorRef}
        className={`custom-cursor ${isHovering ? 'hover' : ''} ${isClicking ? 'clicking' : ''}`}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
        }}
      >
        <div className="cursor-pointer"></div>
      </div>

      <div
        ref={followerRef}
        className={`cursor-follower ${isHovering ? 'hover' : ''} ${isClicking ? 'clicking' : ''}`}
        style={{
          left: `${followerPosition.x}px`,
          top: `${followerPosition.y}px`,
        }}
      />

      <style jsx global>{`
        /* Hide default cursor */
        body {
          cursor: none !important;
        }

        /* Custom cursor styles */
        .custom-cursor {
          position: fixed;
          width: 40px;
          height: 40px;
          pointer-events: none;
          z-index: 9999;
          transform: translate(-50%, -50%);
          transition: transform 0.1s ease;
        }

        .cursor-pointer {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 0;
          height: 0;
          border-style: solid;
          border-width: 8px 0 8px 12px;
          border-color: transparent transparent transparent var(--secondary-color);
          transform: translate(-50%, -50%);
          transition: all 0.15s ease;
          filter: drop-shadow(0 0 5px var(--secondary-color));
        }

        .cursor-follower {
          position: fixed;
          width: 6px;
          height: 6px;
          background-color: var(--secondary-color);
          border-radius: 50%;
          pointer-events: none;
          z-index: 9998;
          transform: translate(-50%, -50%);
          transition: all 0.15s ease;
          filter: drop-shadow(0 0 5px var(--secondary-color));
          will-change: transform;
        }

        /* Hover effect */
        .custom-cursor.hover .cursor-pointer {
          border-left-color: var(--primary-color);
          transform: translate(-50%, -50%) scale(1.2);
          filter: drop-shadow(0 0 8px var(--primary-color));
        }

        .cursor-follower.hover {
          width: 10px;
          height: 10px;
          background-color: var(--primary-color);
          filter: drop-shadow(0 0 8px var(--primary-color));
        }

        /* Click effect */
        .custom-cursor.clicking .cursor-pointer {
          transform: translate(-50%, -50%) scale(0.8);
          border-left-color: var(--accent-color);
          filter: drop-shadow(0 0 10px var(--accent-color));
        }

        .cursor-follower.clicking {
          transform: translate(-50%, -50%) scale(0.8);
          background-color: var(--accent-color);
          filter: drop-shadow(0 0 10px var(--accent-color));
        }
      `}</style>
    </>
  );
}