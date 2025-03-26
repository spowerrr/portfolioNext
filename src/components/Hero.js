'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';

export default function Hero() {
  const heroRef = useRef(null);
  
  useEffect(() => {
    // Animation for the hero section elements
    const heroElement = heroRef.current;
    if (heroElement) {
      const title = heroElement.querySelector('.hero-title');
      const subtitle = heroElement.querySelector('.hero-subtitle');
      const cta = heroElement.querySelector('.cta-container');
      
      title.classList.add('fade-in');
      
      setTimeout(() => {
        subtitle.classList.add('slide-up');
      }, 400);
      
      setTimeout(() => {
        cta.classList.add('fade-in');
      }, 800);
    }
  }, []);

  return (
    <section className="hero" id="home" ref={heroRef}>
      <div className="container hero-container">
        <div className="hero-content">
          <h1 className="hero-title">John Doe</h1>
          <h2 className="hero-subtitle">Backend Developer & System Architect</h2>
          <p className="hero-description">
            Building robust, scalable backend systems and APIs that power modern applications.
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
  name: "John Doe",
  skills: ["Node.js", "Python", "Java", "SQL"],
  architecture: ["Microservices", "Serverless"],
  databases: ["PostgreSQL", "MongoDB", "Redis"],
  cloud: ["AWS", "Azure", "GCP"],
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
          padding-top: 80px; /* Account for fixed header */
          background: linear-gradient(135deg, var(--background-color) 0%, #e6f2f2 100%);
          overflow: hidden;
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

        .hero-container {
          display: flex;
          justify-content: space-between;
          align-items: center;
          position: relative;
          z-index: 1;
        }

        .hero-content {
          flex: 1;
          max-width: 600px;
        }

        .hero-title {
          font-size: 4rem;
          margin-bottom: 0.5rem;
          color: var(--primary-color);
          opacity: 0;
        }

        .hero-subtitle {
          font-size: 1.8rem;
          margin-bottom: 1.5rem;
          color: var(--secondary-color);
          opacity: 0;
          transform: translateY(20px);
        }

        .hero-description {
          font-size: 1.2rem;
          margin-bottom: 2rem;
          color: var(--text-color);
          line-height: 1.6;
        }

        .cta-container {
          display: flex;
          gap: 1rem;
          opacity: 0;
        }

        .primary-btn {
          background-color: var(--secondary-color);
          color: white;
        }

        .secondary-btn {
          background-color: transparent;
          color: var(--primary-color);
          border: 2px solid var(--primary-color);
        }

        .secondary-btn:hover {
          background-color: var(--primary-color);
          color: white;
        }

        .hero-visual {
          flex: 1;
          display: flex;
          justify-content: center;
          align-items: center;
          position: relative;
        }

        .code-block {
          background-color: var(--accent-color);
          border-radius: 8px;
          padding: 1.5rem;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
          width: 100%;
          max-width: 500px;
          transform: rotate(2deg);
          transition: transform var(--transition-normal);
        }

        .code-block:hover {
          transform: rotate(0deg) scale(1.02);
        }

        .code-block pre {
          margin: 0;
          overflow-x: auto;
        }

        .code-block code {
          color: #f8f8f2;
          font-family: 'Fira Code', 'Courier New', monospace;
          font-size: 0.9rem;
          line-height: 1.5;
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