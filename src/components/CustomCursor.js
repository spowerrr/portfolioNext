'use client';

import { useState, useEffect, useRef } from 'react';

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [targetPosition, setTargetPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isVisible, setIsVisible] = useState(true); // Ensure cursor is visible by default
  const [cursorSize, setCursorSize] = useState({ width: 20, height: 20 });
  const [magneticElement, setMagneticElement] = useState(null);
  const requestRef = useRef(null);
  const cursorRef = useRef(null);

  // Smooth animation function using requestAnimationFrame
  const animateCursor = () => {
    // Apply easing to cursor movement
    const ease = 0.15;
    const dx = targetPosition.x - position.x;
    const dy = targetPosition.y - position.y;
    
    // Update position with easing
    setPosition(prev => ({
      x: prev.x + dx * ease,
      y: prev.y + dy * ease
    }));
    
    // Ensure cursor is visible
    if (cursorRef.current) {
      cursorRef.current.style.display = 'block';
      cursorRef.current.style.opacity = '1';
    }
    
    // Continue animation loop
    requestRef.current = requestAnimationFrame(animateCursor);
  };
  
  useEffect(() => {
    // Show cursor immediately and when mouse enters document
    const handleMouseEnter = () => {
      setIsVisible(true);
      document.body.classList.add('cursor-hidden');
      if (cursorRef.current) {
        cursorRef.current.style.display = 'block';
        cursorRef.current.style.opacity = '1';
      }
    };
    
    // Handle mouse leave to hide cursor when mouse leaves the window
    const handleMouseLeave = () => {
      if (cursorRef.current) {
        cursorRef.current.style.opacity = '0';
      }
    };
    
    // Set cursor visible immediately
    setIsVisible(true);
    document.body.classList.add('cursor-hidden');
    if (cursorRef.current) {
      cursorRef.current.style.display = 'block';
      cursorRef.current.style.opacity = '1';
    }
    
    // Track cursor position with smooth animation
    const updateCursorPosition = (e) => {
      setTargetPosition({ x: e.clientX, y: e.clientY });
      if (cursorRef.current) {
        cursorRef.current.style.display = 'block';
        cursorRef.current.style.opacity = '1';
      }
    };

    // Handle hover states for interactive elements
    const handleElementMouseEnter = (e) => {
      setIsHovering(true);
      
      // Add magnetic effect for interactive elements
      if (e.currentTarget.classList.contains('magnetic')) {
        setMagneticElement(e.currentTarget);
      }
    };
    
    const handleElementMouseLeave = () => {
      setIsHovering(false);
      setMagneticElement(null);
    };
    
    // Handle mouse down/up for click effect
    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);
    
    // Start animation loop
    requestRef.current = requestAnimationFrame(animateCursor);

    // Add event listeners
    document.addEventListener('mousemove', updateCursorPosition);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);
    
    // Add hover effect to interactive elements
    const interactiveElements = document.querySelectorAll('a, button, .card, input, textarea, select, [role="button"]');
    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', handleElementMouseEnter);
      el.addEventListener('mouseleave', handleElementMouseLeave);
      
      // Add magnetic class to interactive elements
      if (el.tagName.toLowerCase() === 'a' || el.tagName.toLowerCase() === 'button' || el.classList.contains('card')) {
        el.classList.add('magnetic');
      }
    });
    
    // Handle magnetic effect
    const handleMouseMove = (e) => {
      if (magneticElement) {
        const rect = magneticElement.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        const distanceX = e.clientX - centerX;
        const distanceY = e.clientY - centerY;
        const distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);
        
        // Apply magnetic effect only when cursor is close to the element
        if (distance < 100) {
          const strength = 0.3;
          const magnetX = centerX + distanceX * strength;
          const magnetY = centerY + distanceY * strength;
          setTargetPosition({ x: magnetX, y: magnetY });
        }
      }
    };
    
    document.addEventListener('mousemove', handleMouseMove);

    // Cleanup function
    return () => {
      document.removeEventListener('mousemove', updateCursorPosition);
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
      
      // Remove cursor-hidden class from body
      document.body.classList.remove('cursor-hidden');
      
      interactiveElements.forEach(el => {
        el.removeEventListener('mouseenter', handleElementMouseEnter);
        el.removeEventListener('mouseleave', handleElementMouseLeave);
      });
      
      // Cancel animation frame
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current);
      }
    };
  }, []);

  // Dynamic cursor styles based on state
  const cursorClasses = `
    custom-cursor 
    ${isHovering ? 'hover' : ''} 
    ${isClicking ? 'clicking' : ''}
    ${isVisible ? 'visible' : ''}
    ${magneticElement ? 'magnetic-active' : ''}
  `;

  return (
    <>
      <div 
        ref={cursorRef}
        className={cursorClasses}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          opacity: 1, // Explicitly set opacity to ensure visibility
          display: 'block', // Ensure display is set to block
        }}
      >
        <div className="cursor-dot"></div>
        <div className="cursor-ring"></div>
      </div>

      <style jsx global>{`
        /* Hide default cursor when custom cursor is visible */
        body.cursor-hidden {
          cursor: none !important;
        }
        
        body.cursor-hidden a,
        body.cursor-hidden button,
        body.cursor-hidden .card,
        body.cursor-hidden input,
        body.cursor-hidden textarea,
        body.cursor-hidden select,
        body.cursor-hidden [role="button"] {
          cursor: none !important;
        }

        /* Custom cursor styles */
        .custom-cursor {
          position: fixed;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          pointer-events: none;
          transform: translate(-50%, -50%);
          z-index: 99999;
          opacity: 1 !important;
          display: block !important;
          transition: opacity 0.3s ease, transform 0.2s ease;
          will-change: transform, opacity;
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;
          visibility: visible !important;
          mix-blend-mode: difference;
        }

        .custom-cursor.visible {
          opacity: 1 !important;
          display: block !important;
        }

        .cursor-dot {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 8px;
          height: 8px;
          background-color: white;
          border-radius: 50%;
          transition: transform 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275), background-color 0.3s ease;
          box-shadow: 0 0 10px rgba(255, 255, 255, 0.8);
          will-change: transform;
          z-index: 100000;
        }
        
        .cursor-ring {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 40px;
          height: 40px;
          border: 2px solid white;
          border-radius: 50%;
          transition: width 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275), 
                      height 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275), 
                      border-color 0.3s ease, 
                      transform 0.3s ease;
          box-shadow: 0 0 15px rgba(255, 255, 255, 0.4);
          will-change: transform, width, height;
          z-index: 99999;
        }

        .custom-cursor.hover .cursor-ring {
          width: 60px;
          height: 60px;
          border-color: rgba(255, 255, 255, 0.7);
          backdrop-filter: blur(2px);
        }

        .custom-cursor.hover .cursor-dot {
          transform: translate(-50%, -50%) scale(1.5);
          background-color: white;
        }
        
        .custom-cursor.magnetic-active .cursor-ring {
          width: 70px;
          height: 70px;
          border-color: rgba(91, 192, 190, 0.9);
          transition: width 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275), 
                      height 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }

        .custom-cursor.clicking .cursor-ring {
          transform: translate(-50%, -50%) scale(0.9);
        }

        .custom-cursor.clicking .cursor-dot {
          transform: translate(-50%, -50%) scale(0.8);
        }
        
        /* Add animation for cursor ring */
        @keyframes pulse {
          0% { transform: translate(-50%, -50%) scale(1); opacity: 0.8; }
          50% { transform: translate(-50%, -50%) scale(1.15); opacity: 0.6; }
          100% { transform: translate(-50%, -50%) scale(1); opacity: 0.8; }
        }
        
        /* Add animation for cursor dot */
        @keyframes dotPulse {
          0% { transform: translate(-50%, -50%) scale(1); }
          50% { transform: translate(-50%, -50%) scale(1.2); }
          100% { transform: translate(-50%, -50%) scale(1); }
        }
        
        .custom-cursor.hover .cursor-dot {
          animation: dotPulse 2s ease-in-out infinite;
        }
        
        .custom-cursor.hover.magnetic-active .cursor-ring {
          animation: pulse 1.5s ease-in-out infinite;
        }
      `}</style>
    </>
  );
}