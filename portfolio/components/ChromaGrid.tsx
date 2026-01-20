'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

interface Project {
  id: number;
  title: string;
  description: string;
  image?: string;
  link?: string;
  color: string;
}

interface ChromaGridProps {
  projects: Project[];
}

export default function ChromaGrid({ projects }: ChromaGridProps) {
  return (
    <div className="chroma-grid">
      {projects.map((project, index) => (
        <motion.div
          key={project.id}
          className="chroma-card"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1, duration: 0.5 }}
          whileHover={{ scale: 1.02, y: -5 }}
          style={{ backgroundColor: project.color }}
        >
          {project.image && (
            <div className="chroma-card-image">
              <Image 
                src={project.image} 
                alt={project.title}
                fill
                style={{ objectFit: 'cover' }}
                sizes="(max-width: 640px) 100vw, (max-width: 968px) 50vw, 33vw"
              />
            </div>
          )}
          <div className="chroma-card-content">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            {project.link && (
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                View Project →
              </a>
            )}
          </div>
        </motion.div>
      ))}
    </div>
  );
}
