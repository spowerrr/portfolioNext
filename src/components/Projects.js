'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';

export default function Projects() {
  const projectsRef = useRef(null);
  const [activeFilter, setActiveFilter] = useState('all');

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

    const projectsSection = projectsRef.current;
    if (projectsSection) {
      const elements = projectsSection.querySelectorAll('.animate-on-scroll');
      elements.forEach((el) => observer.observe(el));
    }

    return () => {
      if (projectsSection) {
        const elements = projectsSection.querySelectorAll('.animate-on-scroll');
        elements.forEach((el) => observer.unobserve(el));
      }
    };
  }, []);

  const projects = [
    {
      id: 1,
      title: 'Scalable Microservices API',
      description: 'Designed and implemented a high-performance microservices architecture using Node.js and Express, capable of handling 10,000+ requests per second with load balancing and auto-scaling.',
      image: '/images/project1.svg',
      technologies: ['Node.js', 'Express', 'Docker', 'Kubernetes', 'Redis', 'MongoDB'],
      category: 'api',
      github: 'https://github.com/johndoe/microservices-api',
      demo: 'https://api-demo.example.com',
    },
    {
      id: 2,
      title: 'Real-time Data Processing Pipeline',
      description: 'Built a robust data processing system using Apache Kafka and Python that processes and analyzes millions of events daily with fault tolerance and exactly-once delivery guarantees.',
      image: '/images/project2.svg',
      technologies: ['Python', 'Kafka', 'Spark', 'AWS', 'PostgreSQL'],
      category: 'data',
      github: 'https://github.com/johndoe/data-pipeline',
      demo: null,
    },
    {
      id: 3,
      title: 'Secure Authentication Service',
      description: 'Developed a centralized authentication and authorization service implementing OAuth 2.0 and OpenID Connect protocols with multi-factor authentication support.',
      image: '/images/project3.svg',
      technologies: ['Java', 'Spring Boot', 'JWT', 'OAuth', 'PostgreSQL'],
      category: 'security',
      github: 'https://github.com/johndoe/auth-service',
      demo: 'https://auth-demo.example.com',
    },
    {
      id: 4,
      title: 'Distributed Caching System',
      description: 'Created a distributed caching solution that reduced database load by 70% and improved application response times by implementing efficient cache invalidation strategies.',
      image: '/images/project4.svg',
      technologies: ['Go', 'Redis', 'Memcached', 'Docker'],
      category: 'performance',
      github: 'https://github.com/johndoe/distributed-cache',
      demo: null,
    },
    {
      id: 5,
      title: 'CI/CD Pipeline Automation',
      description: 'Implemented a comprehensive CI/CD pipeline using GitHub Actions and AWS that automated testing, building, and deployment processes, reducing deployment time from hours to minutes.',
      image: '/images/project5.svg',
      technologies: ['GitHub Actions', 'AWS', 'Terraform', 'Docker', 'Bash'],
      category: 'devops',
      github: 'https://github.com/johndoe/cicd-pipeline',
      demo: null,
    },
    {
      id: 6,
      title: 'GraphQL API Gateway',
      description: 'Designed a GraphQL API gateway that unified multiple backend services and provided a single entry point for client applications, improving developer experience and reducing frontend complexity.',
      image: '/images/project6.svg',
      technologies: ['Node.js', 'GraphQL', 'Apollo', 'Express', 'MongoDB'],
      category: 'api',
      github: 'https://github.com/johndoe/graphql-gateway',
      demo: 'https://graphql-demo.example.com',
    },
  ];

  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'api', label: 'API Development' },
    { id: 'data', label: 'Data Processing' },
    { id: 'security', label: 'Security' },
    { id: 'performance', label: 'Performance' },
    { id: 'devops', label: 'DevOps' },
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="projects" ref={projectsRef}>
      <div className="container">
        <h2 className="section-title animate-on-scroll">My Projects</h2>
        <p className="section-description animate-on-scroll">
          Here are some of the backend projects I've worked on that demonstrate my technical expertise and problem-solving abilities.
        </p>

        <div className="project-filters animate-on-scroll">
          {filters.map(filter => (
            <button 
              key={filter.id}
              className={`filter-btn ${activeFilter === filter.id ? 'active' : ''}`}
              onClick={() => setActiveFilter(filter.id)}
            >
              {filter.label}
            </button>
          ))}
        </div>

        <div className="projects-grid">
          {filteredProjects.map(project => (
            <div className="project-card animate-on-scroll" key={project.id}>
              <div className="project-image">
                <div className="image-placeholder">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                    <line x1="8" y1="21" x2="16" y2="21"></line>
                    <line x1="12" y1="17" x2="12" y2="21"></line>
                  </svg>
                </div>
              </div>
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                
                <div className="project-tech">
                  {project.technologies.map((tech, index) => (
                    <span className="tech-tag" key={index}>{tech}</span>
                  ))}
                </div>
                
                <div className="project-links">
                  <a href={project.github} className="project-link github" target="_blank" rel="noopener noreferrer">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                    </svg>
                    GitHub
                  </a>
                  
                  {project.demo && (
                    <a href={project.demo} className="project-link demo" target="_blank" rel="noopener noreferrer">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="10"></circle>
                        <polygon points="10 8 16 12 10 16 10 8"></polygon>
                      </svg>
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .projects {
          background-color: var(--light-color);
          position: relative;
          overflow: hidden;
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

        .project-filters {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          gap: 1rem;
          margin-bottom: 3rem;
        }

        .filter-btn {
          background: transparent;
          border: 1px solid var(--border-color);
          padding: 0.5rem 1.5rem;
          border-radius: 30px;
          font-size: 0.9rem;
          font-weight: 500;
          color: var(--text-color);
          cursor: pointer;
          transition: all var(--transition-fast);
        }

        .filter-btn:hover {
          border-color: var(--secondary-color);
          color: var(--secondary-color);
        }

        .filter-btn.active {
          background-color: var(--secondary-color);
          border-color: var(--secondary-color);
          color: white;
        }

        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
          gap: 2rem;
        }

        .project-card {
          background-color: var(--card-background);
          border-radius: 8px;
          overflow: hidden;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          transition: transform var(--transition-normal), box-shadow var(--transition-normal);
          height: 100%;
          display: flex;
          flex-direction: column;
        }

        .project-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
        }

        .project-image {
          height: 200px;
          overflow: hidden;
          background-color: var(--primary-color);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .image-placeholder {
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .image-placeholder svg {
          width: 30%;
          height: 30%;
          color: rgba(255, 255, 255, 0.7);
        }

        .project-content {
          padding: 1.5rem;
          flex: 1;
          display: flex;
          flex-direction: column;
        }

        .project-title {
          font-size: 1.3rem;
          margin-bottom: 1rem;
          color: var(--primary-color);
        }

        .project-description {
          margin-bottom: 1.5rem;
          color: var(--text-color);
          line-height: 1.6;
          flex: 1;
        }

        .project-tech {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          margin-bottom: 1.5rem;
        }

        .tech-tag {
          background-color: rgba(91, 192, 190, 0.1);
          color: var(--primary-color);
          padding: 0.3rem 0.8rem;
          border-radius: 20px;
          font-size: 0.8rem;
          font-weight: 500;
        }

        .project-links {
          display: flex;
          gap: 1rem;
        }

        .project-link {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.5rem 1rem;
          border-radius: 4px;
          font-size: 0.9rem;
          font-weight: 500;
          transition: all var(--transition-fast);
        }

        .project-link svg {
          width: 18px;
          height: 18px;
        }

        .github {
          background-color: #24292e;
          color: white;
        }

        .github:hover {
          background-color: #1b1f23;
        }

        .demo {
          background-color: var(--secondary-color);
          color: white;
        }

        .demo:hover {
          background-color: var(--primary-color);
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

        /* Responsive styles */
        @media (max-width: 768px) {
          .projects-grid {
            grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          }
        }

        @media (max-width: 576px) {
          .projects-grid {
            grid-template-columns: 1fr;
          }

          .project-filters {
            flex-direction: column;
            align-items: center;
          }

          .filter-btn {
            width: 100%;
            max-width: 250px;
          }
        }
      `}</style>
    </section>
  );
}