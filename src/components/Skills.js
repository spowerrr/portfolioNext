'use client';

import { useEffect, useRef } from 'react';

export default function Skills() {
  const skillsRef = useRef(null);

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
      { threshold: 0.1 }
    );

    const skillsSection = skillsRef.current;
    if (skillsSection) {
      const elements = skillsSection.querySelectorAll('.animate-on-scroll');
      elements.forEach((el) => observer.observe(el));

      // Animate skill bars when they come into view
      const skillBars = skillsSection.querySelectorAll('.skill-progress-bar');
      skillBars.forEach((bar) => {
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                const progressValue = bar.getAttribute('data-progress');
                bar.style.width = `${progressValue}%`;
                observer.unobserve(bar);
              }
            });
          },
          { threshold: 0.5 }
        );
        observer.observe(bar);
      });
    }

    return () => {
      if (skillsSection) {
        const elements = skillsSection.querySelectorAll('.animate-on-scroll');
        elements.forEach((el) => observer.unobserve(el));
      }
    };
  }, []);

  const programmingSkills = [
    { name: 'C', progress: 90 },
    { name: 'C++ with DSA', progress: 85 },
    { name: 'Go', progress: 80 },
    { name: 'Java', progress: 75 },
    { name: 'PHP', progress: 70 }
  ];

  const databaseSkills = [
    { name: 'MongoDB', progress: 85 },
    { name: 'MySQL', progress: 80 },
    { name: 'Postman', progress: 90 },
    { name: 'TablePlus', progress: 85 }
  ];

  const devOpsSkills = [
    { name: 'Linux (Arch)', progress: 90 },
    { name: 'Git', progress: 85 },
    { name: 'Docker', progress: 80 }
  ];

  const otherSkills = [
    { name: 'Ghosty', progress: 85 },
    { name: 'Neovim', progress: 85 },
    { name: 'Tmux', progress: 80 },
    { name: 'Version Control', progress: 90 },
    { name: 'Shell Scripting', progress: 85 },
    { name: 'Containerization', progress: 80 },
    { name: 'Development Workflow', progress: 85 },
    { name: 'API Design', progress: 80 },
    // { name: 'Backend Development', progress: 85 },
    { name: 'System Architecture', progress: 80 }
  ];

  return (
    <section id="skills" className="skills" ref={skillsRef}>
      <div className="container">
        <h2 className="section-title animate-on-scroll">Technical Skills</h2>
        <p className="section-description animate-on-scroll">
          My expertise spans across programming languages, databases, and development tools.
        </p>

        <div className="skills-scroll-container">
          <div className="skills-container">
            <div className="skills-category animate-on-scroll">
              <h3>Programming Languages</h3>
              <div className="skills-list">
                {programmingSkills.map((skill) => (
                  <div key={skill.name} className="skill-item">
                    <div className="skill-info">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-progress">{skill.progress}%</span>
                    </div>
                    <div className="skill-bar">
                      <div
                        className="skill-progress-bar"
                        data-progress={skill.progress}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="skills-category animate-on-scroll">
              <h3>Databases & Tools</h3>
              <div className="skills-list">
                {databaseSkills.map((skill) => (
                  <div key={skill.name} className="skill-item">
                    <div className="skill-info">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-progress">{skill.progress}%</span>
                    </div>
                    <div className="skill-bar">
                      <div
                        className="skill-progress-bar"
                        data-progress={skill.progress}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="skills-category animate-on-scroll">
              <h3>DevOps & Tools</h3>
              <div className="skills-list">
                {devOpsSkills.map((skill) => (
                  <div key={skill.name} className="skill-item">
                    <div className="skill-info">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-progress">{skill.progress}%</span>
                    </div>
                    <div className="skill-bar">
                      <div
                        className="skill-progress-bar"
                        data-progress={skill.progress}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="skills-category animate-on-scroll">
              <h3>Other Skills</h3>
              <div className="skills-list">
                {otherSkills.map((skill) => (
                  <div key={skill.name} className="skill-item">
                    <div className="skill-info">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-progress">{skill.progress}%</span>
                    </div>
                    <div className="skill-bar">
                      <div
                        className="skill-progress-bar"
                        data-progress={skill.progress}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .skills {
          padding: 100px 0;
          background: linear-gradient(135deg, rgba(91, 192, 190, 0.1) 0%, rgba(58, 80, 107, 0.1) 100%);
        }

        .container {
          max-width: 100%;
          margin: 0 auto;
          padding: 0 2rem;
          overflow: hidden;
        }

        .section-title {
          font-size: 2.5rem;
          text-align: center;
          margin-bottom: 1rem;
          color: var(--primary-color);
          opacity: 0;
          transform: translateY(20px);
          transition: all 0.8s ease;
        }

        .section-title.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .section-description {
          text-align: center;
          color: var(--text-color);
          margin-bottom: 3rem;
          opacity: 0;
          transform: translateY(20px);
          transition: all 0.8s ease;
        }

        .section-description.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .skills-scroll-container {
          overflow-x: auto;
          padding-bottom: 1rem;
          scrollbar-width: thin;
          scrollbar-color: var(--secondary-color) rgba(255, 255, 255, 0.1);
        }

        .skills-scroll-container::-webkit-scrollbar {
          height: 8px;
        }

        .skills-scroll-container::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.1);
          border-radius: 4px;
        }

        .skills-scroll-container::-webkit-scrollbar-thumb {
          background: var(--secondary-color);
          border-radius: 4px;
        }

        .skills-container {
          display: flex;
          gap: 2rem;
          min-width: min-content;
          padding: 1rem;
        }

        .skills-category {
          background: rgba(255, 255, 255, 0.05);
          padding: 2rem;
          border-radius: 1rem;
          backdrop-filter: blur(10px);
          opacity: 0;
          transform: translateY(20px);
          transition: all 0.8s ease;
          min-width: 400px;
        }

        .skills-category.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .skills-category h3 {
          color: var(--secondary-color);
          font-size: 1.5rem;
          margin-bottom: 1.5rem;
        }

        .skills-list {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .skill-item {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .skill-info {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .skill-name {
          color: var(--text-color);
          font-weight: 500;
        }

        .skill-progress {
          color: var(--secondary-color);
          font-weight: 600;
        }

        .skill-bar {
          height: 8px;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 4px;
          overflow: hidden;
        }

        .skill-progress-bar {
          height: 100%;
          background: var(--secondary-color);
          border-radius: 4px;
          width: 0;
          transition: width 1s ease;
        }

        @media (max-width: 768px) {
          .skills {
            padding: 60px 0;
          }

          .section-title {
            font-size: 2rem;
          }

          .skills-category {
            min-width: 300px;
          }
        }
      `}</style>
    </section>
  );
}