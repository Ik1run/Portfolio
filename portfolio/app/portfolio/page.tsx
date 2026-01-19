'use client';

import MagicBento from '@/components/MagicBento';

export default function Portfolio() {
  return (
    <main className="portfolio-page">
      <div className="portfolio-container">
        {/* Left side - Text */}
        <div className="portfolio-info">
          <h1>Projects</h1>
          <p className="portfolio-subtitle">
            These are my projects! Like something? <br />
            Contact me!
          </p>
        </div>

        {/* Right side - Magic Bento */}
        <div className="portfolio-bento-container">
          <MagicBento 
            textAutoHide={true}
            enableStars={true}
            enableSpotlight={true}
            enableBorderGlow={true}
            enableTilt={true}
            enableMagnetism={true}
            clickEffect={true}
            spotlightRadius={300}
            particleCount={12}
            glowColor="132, 0, 255"
          />
        </div>
      </div>
    </main>
  );
}