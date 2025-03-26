'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useTheme } from '../context/ThemeContext';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container header-container">
        <div className="logo">
          <Link href="/">LoB*STAR</Link>
        </div>

        <nav className={`nav ${isMenuOpen ? 'open' : ''}`}>
          <ul className="nav-list">
            <li><Link href="#about" onClick={() => setIsMenuOpen(false)}>About</Link></li>
            <li><Link href="#skills" onClick={() => setIsMenuOpen(false)}>Skills</Link></li>
            <li><Link href="#projects" onClick={() => setIsMenuOpen(false)}>Projects</Link></li>
            <li><Link href="#contact" onClick={() => setIsMenuOpen(false)}>Contact</Link></li>
            <li>
              <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle theme">
                {theme === 'light' ? (
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="5"></circle>
                    <line x1="12" y1="1" x2="12" y2="3"></line>
                    <line x1="12" y1="21" x2="12" y2="23"></line>
                    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                    <line x1="1" y1="12" x2="3" y2="12"></line>
                    <line x1="21" y1="12" x2="23" y2="12"></line>
                    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
                  </svg>
                )}
              </button>
            </li>
          </ul>
        </nav>

        <button className="menu-toggle" onClick={toggleMenu}>
          <span className={`hamburger ${isMenuOpen ? 'open' : ''}`}></span>
        </button>
      </div>

      <style jsx>{`
        /* Dark mode styles for header */
        :global(html[data-theme="dark"]) .header.scrolled {
          background-color: rgba(11, 19, 43, 0.75);
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
          border-bottom: 1px solid rgba(58, 80, 107, 0.3);
        }
        .header {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          z-index: 1000;
          padding: 1rem 0;
          transition: all var(--transition-normal);
          background-color: transparent;
        }

        .header.scrolled {
          background-color: rgba(255, 255, 255, 0.75);
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
          padding: 0.5rem 0;
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          border-bottom: 1px solid rgba(230, 230, 230, 0.3);
        }

        .header-container {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .logo a {
          font-size: 1.8rem;
          font-weight: 700;
          color: var(--primary-color);
          text-decoration: none;
          transition: color var(--transition-fast);
        }

        .nav-list {
          display: flex;
          list-style: none;
          gap: 2rem;
        }

        .nav-list li a {
          color: var(--text-color);
          font-weight: 500;
          position: relative;
          padding: 0.5rem 0;
        }

        .nav-list li a::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 2px;
          background-color: var(--secondary-color);
          transition: width var(--transition-normal);
        }

        .nav-list li a:hover::after {
          width: 100%;
        }

        .menu-toggle {
          display: none;
          background: none;
          border: none;
          cursor: pointer;
          width: 30px;
          height: 30px;
          position: relative;
        }

        .hamburger {
          position: absolute;
          width: 30px;
          height: 3px;
          background-color: var(--primary-color);
          border-radius: 5px;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          transition: background-color var(--transition-fast);
        }

        .hamburger::before,
        .hamburger::after {
          content: '';
          position: absolute;
          width: 30px;
          height: 3px;
          background-color: var(--primary-color);
          border-radius: 5px;
          transition: transform var(--transition-fast);
        }

        .hamburger::before {
          transform: translateY(-10px);
        }

        .hamburger::after {
          transform: translateY(10px);
        }

        .hamburger.open {
          background-color: transparent;
        }

        .hamburger.open::before {
          transform: rotate(45deg);
        }

        .hamburger.open::after {
          transform: rotate(-45deg);
        }

        .theme-toggle {
          background: none;
          border: none;
          color: var(--text-color);
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 0.5rem;
          border-radius: 50%;
          transition: background-color var(--transition-fast), transform var(--transition-fast);
        }

        .theme-toggle:hover {
          background-color: rgba(91, 192, 190, 0.1);
          transform: translateY(-2px);
        }

        @media (max-width: 768px) {
          .menu-toggle {
            display: block;
            z-index: 1001;
          }

          .nav {
            position: fixed;
            top: 0;
            right: -100%;
            width: 70%;
            height: 100vh;
            background-color: var(--card-background);
            box-shadow: -5px 0 15px rgba(0, 0, 0, 0.1);
            transition: right var(--transition-normal);
            z-index: 1000;
            display: flex;
            align-items: center;
            justify-content: center;
          }

          .nav.open {
            right: 0;
          }

          .nav-list {
            flex-direction: column;
            align-items: center;
            gap: 2rem;
          }

          .nav-list li a {
            font-size: 1.2rem;
          }
        }
      `}</style>
    </header>
  );
}