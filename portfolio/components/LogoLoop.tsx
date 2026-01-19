'use client';

import React, { useRef, useEffect } from 'react';

export type LogoItem = {
  node: React. ReactNode;
  href?:  string;
  title?: string;
};

export interface LogoLoopProps {
  logos: LogoItem[];
  speed?: number;
  logoHeight?: number;
  gap?: number;
}

export default function LogoLoop({ 
  logos, 
  speed = 50,
  logoHeight = 48,
  gap = 40
}: LogoLoopProps) {
  const scrollerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller) return;

    // Duplicate content for seamless loop
    const scrollerContent = Array.from(scroller.children);
    scrollerContent.forEach((item) => {
      const duplicatedItem = item.cloneNode(true) as HTMLElement;
      scroller.appendChild(duplicatedItem);
    });

    // Animation
    let animationId: number;
    let scrollPosition = 0;
    const scrollWidth = scroller.scrollWidth / 2; // Halve breedte (omdat we duplicated)

    const animate = () => {
      scrollPosition += speed / 60; // 60fps
      if (scrollPosition >= scrollWidth) {
        scrollPosition = 0;
      }
      scroller.style.transform = `translateX(-${scrollPosition}px)`;
      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, [logos, speed]);

  return (
    <div 
      className="logo-loop-wrapper"
      style={{
        width: '100%',
        height: `${logoHeight + 20}px`,
        overflow: 'hidden',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      {/* Fade left */}
      <div 
        style={{
          position: 'absolute',
          left: 0,
          top: 0,
          bottom: 0,
          width:  '80px',
          background: 'linear-gradient(to right, #ffffff, transparent)',
          zIndex: 10,
          pointerEvents: 'none',
        }}
      />

      {/* Scrolling content */}
      <div 
        ref={scrollerRef}
        className="logo-scroller"
        style={{
          display: 'flex',
          gap: `${gap}px`,
          alignItems: 'center',
          willChange: 'transform',
        }}
      >
        {logos.map((logo, index) => (
          <div
            key={index}
            className="logo-item"
            style={{
              fontSize: `${logoHeight}px`,
              height: `${logoHeight}px`,
              display: 'flex',
              alignItems: 'center',
              flexShrink: 0,
              color: '#333',
            }}
          >
            {logo.href ? (
              <a 
                href={logo.href} 
                target="_blank" 
                rel="noopener noreferrer"
                title={logo.title}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  color: 'inherit',
                  textDecoration: 'none',
                  transition: 'opacity 0.2s',
                }}
                onMouseEnter={(e) => e.currentTarget.style.opacity = '0.7'}
                onMouseLeave={(e) => e.currentTarget. style.opacity = '1'}
              >
                {logo.node}
              </a>
            ) : (
              logo.node
            )}
          </div>
        ))}
      </div>

      {/* Fade right */}
      <div 
        style={{
          position: 'absolute',
          right: 0,
          top: 0,
          bottom: 0,
          width: '80px',
          background: 'linear-gradient(to left, #ffffff, transparent)',
          zIndex: 10,
          pointerEvents: 'none',
        }}
      />
    </div>
  );
}