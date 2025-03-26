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

  const backendSkills = [
    { name: 'Node.js', progress: 95 },
    { name: 'Python', progress: 90 },
    { name: 'Java', progress: 85 },
    { name: 'Go', progress: 75 },
    { name: 'PHP', progress: 80 },
  ];

  const databaseSkills = [
    { name: 'PostgreSQL', progress: 90 },
    { name: 'MongoDB', progress: 92 },
    { name: 'Redis', progress: 85 },
    { name: 'MySQL', progress: 88 },
    { name: 'Elasticsearch', progress: 78 },
  ];

  const devOpsSkills = [
    { name: 'Docker', progress: 90 },
    { name: 'Kubernetes', progress: 85 },
    { name: 'CI/CD', progress: 88 },
    { name: 'AWS', progress: 92 },
    { name: 'Terraform', progress: 80 },
  ];

  const otherSkills = [
    'RESTful APIs',
    'GraphQL',
    'Microservices',
    'Serverless',
    'System Design',
    'Performance Optimization',
    'Security',
    'Testing',
    'Message Queues',
    'WebSockets',
    'gRPC',
    'OAuth/JWT',
  ];

  return (
    <section id="skills" className="skills" ref={skillsRef}>
      <div className="container">
        <h2 className="section-title animate-on-scroll">Technical Skills</h2>
        <p className="section-description animate-on-scroll">
          My expertise in backend development spans across multiple technologies, frameworks, and methodologies.
        </p>

        <div className="skills-container">
          <div className="skills-column animate-on-scroll">
            <h3 className="skills-category">Backend Languages</h3>
            <div className="skill-bars">
              {backendSkills.map((skill, index) => (
                <div className="skill-item" key={index}>
                  <div className="skill-info">
                    <span className="skill-name">{skill.name}</span>
                    <span className="skill-percentage">{skill.progress}%</span>
                  </div>
                  <div className="skill-progress">
                    <div 
                      className="skill-progress-bar" 
                      data-progress={skill.progress}
                      style={{ width: '0%' }} // Initial width, will be animated with JS
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="skills-column animate-on-scroll">
            <h3 className="skills-category">Databases</h3>
            <div className="skill-bars">
              {databaseSkills.map((skill, index) => (
                <div className="skill-item" key={index}>
                  <div className="skill-info">
                    <span className="skill-name">{skill.name}</span>
                    <span className="skill-percentage">{skill.progress}%</span>
                  </div>
                  <div className="skill-progress">
                    <div 
                      className="skill-progress-bar" 
                      data-progress={skill.progress}
                      style={{ width: '0%' }} // Initial width, will be animated with JS
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="skills-column animate-on-scroll">
            <h3 className="skills-category">DevOps & Cloud</h3>
            <div className="skill-bars">
              {devOpsSkills.map((skill, index) => (
                <div className="skill-item" key={index}>
                  <div className="skill-info">
                    <span className="skill-name">{skill.name}</span>
                    <span className="skill-percentage">{skill.progress}%</span>
                  </div>
                  <div className="skill-progress">
                    <div 
                      className="skill-progress-bar" 
                      data-progress={skill.progress}
                      style={{ width: '0%' }} // Initial width, will be animated with JS
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="other-skills animate-on-scroll">
          <h3 className="skills-category">Other Skills & Expertise</h3>
          <div className="skill-tags">
            {otherSkills.map((skill, index) => (
              <span className="skill-tag" key={index}>{skill}</span>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .skills {
          background-color: var(--background-color);
          position: relative;
        }

        .section-title {
          text-align: center;
          margin-bottom: 1rem;
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

        .section-description {
          text-align: center;
          max-width: 700px;
          margin: 0 auto 3rem;
          color: var(--text-color);
        }

        .skills-container {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
          margin-bottom: 3rem;
        }

        .skills-column {
          background-color: var(--card-background);
          border-radius: 8px;
          padding: 1.5rem;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          transition: transform var(--transition-normal), box-shadow var(--transition-normal);
        }

        .skills-column:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
        }

        .skills-category {
          color: var(--primary-color);
          margin-bottom: 1.5rem;
          padding-bottom: 0.5rem;
          border-bottom: 1px solid var(--border-color);
        }

        .skill-bars {
          display: flex;
          flex-direction: column;
          gap: 1.2rem;
        }

        .skill-item {
          width: 100%;
        }

        .skill-info {
          display: flex;
          justify-content: space-between;
          margin-bottom: 0.5rem;
        }

        .skill-name {
          font-weight: 500;
        }

        .skill-percentage {
          color: var(--secondary-color);
          font-weight: 600;
        }

        .skill-progress {
          height: 8px;
          background-color: var(--border-color);
          border-radius: 4px;
          overflow: hidden;
        }

        .skill-progress-bar {
          height: 100%;
          background: linear-gradient(90deg, var(--secondary-color) 0%, var(--primary-color) 100%);
          border-radius: 4px;
          width: 0; /* Initial width, will be animated with JS */
          transition: width 1.5s ease-in-out;
        }

        .other-skills {
          background-color: var(--card-background);
          border-radius: 8px;
          padding: 1.5rem;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }

        .skill-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.8rem;
          margin-top: 1rem;
        }

        .skill-tag {
          background-color: rgba(91, 192, 190, 0.1);
          color: var(--primary-color);
          padding: 0.5rem 1rem;
          border-radius: 20px;
          font-size: 0.9rem;
          font-weight: 500;
          transition: background-color var(--transition-fast), transform var(--transition-fast);
        }

        .skill-tag:hover {
          background-color: rgba(91, 192, 190, 0.2);
          transform: translateY(-2px);
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
      `}</style>
    </section>
  );
}