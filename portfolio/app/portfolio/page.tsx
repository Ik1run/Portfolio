'use client';

import ChromaGrid from '@/components/ChromaGrid';

export default function Portfolio() {
  const projects = [
    {
      id: 1,
      title: 'Project 1',
      description: 'Description of your first project',
      image: '/projects/project1.jpg', // add your own images
      link: 'https://github.com/Ik1run/project1',
      color: '#8400ff'
    },
    {
      id: 2,
      title: 'Project 2',
      description: 'Description of your second project',
      image: '/projects/project2.jpg',
      link: 'https://github.com/Ik1run/project2',
      color: '#ff007c'
    },
    {
      id: 3,
      title: 'Project 3',
      description: 'Description of your third project',
      image: '/projects/project3.jpg',
      link: 'https://github.com/Ik1run/project3',
      color: '#00fffa'
    },
    // Add more projects...
  ];

  return (
    <main className="portfolio-page">
      <div className="portfolio-container">
        <div className="portfolio-info">
          <h1>Projects</h1>
          <p className="portfolio-subtitle">
            These are my projects! Like something? <br />
            Contact me!
          </p>
        </div>

        <div className="portfolio-grid-container">
          <ChromaGrid projects={projects} />
        </div>
      </div>
    </main>
  );
}