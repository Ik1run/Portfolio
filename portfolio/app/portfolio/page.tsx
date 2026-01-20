'use client';

import ChromaGrid from '@/components/ChromaGrid';

export default function Portfolio() {
  const projects = [
    {
      id: 1,
      title: 'Cat Food CSS Practice Site',
      description: 'A small website practice using only HTML and CSS to create a cat food themed site.',
      image: '/projects/CatSite.png', // add your own images
      link: 'https://ik1run.github.io/CatfoodCSSPrac/',
      color: '#8400ff'
    },
    {
      id: 2,
      title: 'Punisho',
      description: 'Small sanction app made for local use, built with PHP, Bootstrap & MySQL.',
      image: '/projects/Punisho.png',
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
    {
      id: 4,
      title: 'Project 4',
      description: 'Description of your fourth project',
      image: '/projects/project4.jpg',
      link: 'https://github.com/Ik1run/project4',
      color: '#ffdd66'
    },
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