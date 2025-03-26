'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import ParticleBackground from './ParticleBackground';

export default function Hero() {
  const heroRef = useRef(null);
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  
  const texts = [
    "Engineering Student & Backend Developer",
    "Linux Enthusiast & DevOps Practitioner"
  ];

  useEffect(() => {
    const currentText = texts[currentTextIndex];
    const typingSpeed = isDeleting ? 50 : 100;

    const interval = setInterval(() => {
      if (isDeleting) {
        setText(prev => prev.slice(0, -1));
        if (text === '') {
          setIsDeleting(false);
          setCurrentTextIndex(prev => (prev + 1) % texts.length);
        }
      } else {
        if (text === currentText) {
          setTimeout(() => setIsDeleting(true), 2000);
        } else {
          setText(currentText.slice(0, text.length + 1));
        }
      }
    }, typingSpeed);

    return () => clearInterval(interval);
  }, [text, isDeleting, currentTextIndex]);

  useEffect(() => {
    const heroElement = heroRef.current;
    if (heroElement) {
      const title = heroElement.querySelector('.hero-title');
      const subtitle = heroElement.querySelector('.hero-subtitle');
      const cta = heroElement.querySelector('.cta-container');
      
      title.style.opacity = '1';
      subtitle.style.opacity = '1';
      subtitle.style.transform = 'translateY(0)';
      cta.style.opacity = '1';
      
      title.classList.add('fade-in');
      subtitle.classList.add('slide-up');
      cta.classList.add('fade-in');
    }
  }, []);

  return (
    <section className="hero" id="home" ref={heroRef}>
      <ParticleBackground />
      <div className="container hero-container">
        <div className="hero-content">
          <h1 className="hero-title">MD. Ashikur Rahman Puspo</h1>
          <h2 className="hero-subtitle">
            <span className="typing-text">{text}</span>
            <span className="cursor">|</span>
          </h2>
          <p className="hero-description">
            Engineering student at United International University (2023-present)
          </p>
          <div className="cta-container">
            <Link href="#projects" className="btn primary-btn">View My Work</Link>
            <Link href="#contact" className="btn secondary-btn">Get In Touch</Link>
          </div>
        </div>
        <div className="hero-visual">
          <div className="code-block">
            <pre>
              <code>
{`// Backend expertise
const developer = {
  name: "MD. Ashikur Rahman Puspo",
  education: "UIU Engineering Student (2023-present)",
  languages: ["C", "C++ with DSA", "Go", "Java", "PHP"],
  databases: ["MongoDB", "MySQL"],
  tools: ["Linux (Arch)", "Git", "Docker", "Neovim", "Tmux"],
  passion: "Building scalable systems"
};

// Let's connect
developer.connect();`}
              </code>
            </pre>
          </div>
        </div>
      </div>

      <div className="scroll-indicator">
        <div className="mouse">
          <div className="wheel"></div>
        </div>
        <div className="arrow-down"></div>
      </div>

      <style jsx>{`
        .hero {
          min-height: 100vh;
          display: flex;
          align-items: center;
          position: relative;
          padding-top: 80px;
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(230, 242, 242, 0.1) 100%);
          overflow: hidden;
        }

        .hero-container {
          position: relative;
          z-index: 1;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .hero::before {
          content: '';
          position: absolute;
          top: -50px;
          right: -50px;
          width: 300px;
          height: 300px;
          border-radius: 50%;
          background: rgba(91, 192, 190, 0.1);
          z-index: 0;
        }

        .hero::after {
          content: '';
          position: absolute;
          bottom: -100px;
          left: -100px;
          width: 400px;
          height: 400px;
          border-radius: 50%;
          background: rgba(58, 80, 107, 0.1);
          z-index: 0;
        }

        .hero-content {
          flex: 1;
          max-width: 600px;
        }

        .hero-title {
          font-size: 4rem;
          margin-bottom: 0.5rem;
          color: var(--primary-color);
          opacity: 1;
          transition: opacity 0.8s ease;
        }

        .hero-subtitle {
          font-size: 1.8rem;
          margin-bottom: 1.5rem;
          color: var(--secondary-color);
          opacity: 1;
          transform: translateY(0);
          transition: opacity 0.8s ease, transform 0.8s ease;
          min-height: 2.5rem;
        }

        .typing-text {
          display: inline-block;
        }

        .cursor {
          display: inline-block;
          animation: blink 0.7s infinite;
        }

        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }

        .hero-description {
          font-size: 1.2rem;
          margin-bottom: 2rem;
          color: var(--text-color);
          line-height: 1.6;
        }

        .cta-container {
          display: flex;
          gap: 1.5rem;
          opacity: 1;
          margin-top: 2rem;
          transition: opacity 0.8s ease;
        }

        .btn {
          padding: 1rem 2rem;
          font-size: 1.1rem;
          font-weight: 600;
          border-radius: 8px;
          text-decoration: none;
          transition: all 0.3s ease;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
        }

        .primary-btn {
          background-color: var(--secondary-color);
          color: white;
          border: none;
        }

        .primary-btn:hover {
          background-color: var(--primary-color);
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(91, 192, 190, 0.3);
        }

        .secondary-btn {
          background-color: transparent;
          color: var(--primary-color);
          border: 2px solid var(--primary-color);
        }

        .secondary-btn:hover {
          background-color: var(--primary-color);
          color: white;
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(91, 192, 190, 0.3);
        }

        .hero-visual {
          flex: 1;
          display: flex;
          justify-content: center;
          align-items: center;
          position: relative;
        }

        .code-block {
          background-color: #1a1a2e;
          border-radius: 8px;
          padding: 1.5rem;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
          width: 100%;
          max-width: 500px;
          transform: rotate(2deg);
          transition: transform var(--transition-normal);
          border: 1px solid #4a4a8f;
        }

        .code-block:hover {
          transform: rotate(0deg) scale(1.02);
          box-shadow: 0 0 20px rgba(74, 74, 143, 0.3);
        }

        .code-block pre {
          margin: 0;
          overflow-x: auto;
        }

        .code-block code {
          color: #00ff9d;
          font-family: 'Fira Code', 'Courier New', monospace;
          font-size: 0.9rem;
          line-height: 1.5;
          text-shadow: 0 0 10px rgba(0, 255, 157, 0.3);
        }

        /* Scroll indicator */
        .scroll-indicator {
          position: absolute;
          bottom: 2rem;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          flex-direction: column;
          align-items: center;
          opacity: 0.7;
          transition: opacity var(--transition-fast);
        }

        .scroll-indicator:hover {
          opacity: 1;
        }

        .mouse {
          width: 26px;
          height: 40px;
          border: 2px solid var(--primary-color);
          border-radius: 20px;
          position: relative;
        }

        .wheel {
          width: 4px;
          height: 8px;
          background-color: var(--primary-color);
          border-radius: 2px;
          position: absolute;
          top: 6px;
          left: 50%;
          transform: translateX(-50%);
          animation: scroll 2s infinite;
        }

        .arrow-down {
          margin-top: 8px;
          width: 10px;
          height: 10px;
          border-right: 2px solid var(--primary-color);
          border-bottom: 2px solid var(--primary-color);
          transform: rotate(45deg);
        }

        @keyframes scroll {
          0% { opacity: 1; transform: translateX(-50%) translateY(0); }
          100% { opacity: 0; transform: translateX(-50%) translateY(15px); }
        }

        /* Responsive styles */
        @media (max-width: 992px) {
          .hero-container {
            flex-direction: column;
            text-align: center;
          }

          .hero-content {
            margin-bottom: 3rem;
          }

          .cta-container {
            justify-content: center;
          }

          .hero-title {
            font-size: 3rem;
          }

          .hero-subtitle {
            font-size: 1.5rem;
          }
        }

        @media (max-width: 768px) {
          .hero-title {
            font-size: 2.5rem;
          }

          .code-block {
            max-width: 100%;
            transform: none;
          }

          .code-block:hover {
            transform: none;
          }
        }
      `}</style>
    </section>
  );
}