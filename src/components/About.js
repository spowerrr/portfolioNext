'use client';

import { useEffect, useRef } from 'react';
import ProfilePicture from './ProfilePicture';

export default function About() {
  const aboutRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    const aboutSection = aboutRef.current;
    if (aboutSection) {
      const elements = aboutSection.querySelectorAll('.animate-on-scroll');
      elements.forEach((el) => observer.observe(el));
    }

    return () => {
      if (aboutSection) {
        const elements = aboutSection.querySelectorAll('.animate-on-scroll');
        elements.forEach((el) => observer.unobserve(el));
      }
    };
  }, []);

  return (
    <section id="about" className="about" ref={aboutRef}>
      <div className="container">
        <h2 className="section-title animate-on-scroll">About Me</h2>
        
        <div className="about-content">
          <div className="about-image animate-on-scroll">
            <div className="image-container">
              <ProfilePicture />
              <div className="experience-badge">1+ Years Experience</div>
            </div>
          </div>
          
          <div className="about-text">
            <p className="animate-on-scroll">
              I'm a passionate Backend Developer with over 1 year of experience designing and implementing robust, scalable server-side applications. My journey in software development began with a deep curiosity about how systems work behind the scenes.
            </p>
            
            <p className="animate-on-scroll">
              Specializing in building high-performance APIs, database architecture, and cloud infrastructure, I've helped companies transform their backend systems to handle millions of requests while maintaining reliability and security.
            </p>
            
            <p className="animate-on-scroll">
              My approach combines technical expertise with a strong focus on business needs. I believe that the best backend solutions are not just technically sound but also aligned with organizational goals and user requirements.
            </p>
            
            <div className="about-details animate-on-scroll">
              <div className="detail-item">
                <span className="detail-label">Name:</span>
                <span className="detail-value">MD. Ashikur Rahman Puspo</span>
              </div>
              
              <div className="detail-item">
                <span className="detail-label">Email:</span>
                <span className="detail-value">puspopuspo520@gmail.com</span>
              </div>
              
              <div className="detail-item">
                <span className="detail-label">Location:</span>
                <span className="detail-value">Dhaka, Bangladesh</span>
              </div>
              
              <div className="detail-item">
                <span className="detail-label">Availability:</span>
                <span className="detail-value available">Available for hire</span>
              </div>
            </div>
            
            <div className="about-cta animate-on-scroll">
              <a href="#contact" className="btn primary-btn">Contact Me</a>
              <a href="/resume.pdf" className="btn secondary-btn" target="_blank" rel="noopener noreferrer">Download Resume</a>
            </div>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        .about {
          background-color: var(--light-color);
          position: relative;
          overflow: hidden;
        }
        
        .about::before {
          content: '';
          position: absolute;
          top: -100px;
          left: -100px;
          width: 200px;
          height: 200px;
          border-radius: 50%;
          background: rgba(91, 192, 190, 0.1);
          z-index: 0;
        }
        
        .section-title {
          text-align: center;
          margin-bottom: 3rem;
          position: relative;
        }
        
        .section-title::after {
          content: '';
          position: absolute;
          bottom: -10px;
          left: 50%;
          transform: translateX(-50%);
          width: 50px;
          height: 3px;
          background-color: var(--secondary-color);
        }
        
        .about-content {
          display: flex;
          gap: 4rem;
          align-items: center;
        }
        
        .about-image {
          flex: 1;
          display: flex;
          justify-content: center;
          width: 100%;
        }
        
        .image-container {
          position: relative;
          width: 100%;
          max-width: 1200px;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        
        .experience-badge {
          position: absolute;
          bottom: -15px;
          left: 50%;
          transform: translateX(-50%);
          background-color: var(--secondary-color);
          color: white;
          padding: 0.5rem 1rem;
          border-radius: 20px;
          font-weight: 600;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
          white-space: nowrap;
        }
        
        .about-text {
          flex: 1.5;
        }
        
        .about-text p {
          margin-bottom: 1.5rem;
          font-size: 1.05rem;
          line-height: 1.7;
        }
        
        .about-details {
          margin: 2rem 0;
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1.5rem;
        }
        
        .detail-item {
          display: flex;
          flex-direction: column;
        }
        
        .detail-label {
          font-weight: 600;
          color: var(--primary-color);
          margin-bottom: 0.3rem;
        }
        
        .detail-value {
          color: var(--text-color);
        }
        
        .available {
          color: #2ecc71;
          font-weight: 600;
        }
        
        .about-cta {
          display: flex;
          gap: 1rem;
          margin-top: 2rem;
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
        
        /* Animation classes */
        .animate-on-scroll {
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 0.8s ease, transform 0.8s ease;
        }
        
        .animate-on-scroll.visible {
          opacity: 1;
          transform: translateY(0);
        }
        
        @media (max-width: 768px) {
          .about-content {
            flex-direction: column;
            gap: 2rem;
          }
          
          .about-image {
            order: -1;
          }
          
          .image-container {
            width: 250px;
            height: 250px;
          }
          
          .about-details {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}