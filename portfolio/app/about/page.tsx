'use client';

import LogoLoop from '@/components/LogoLoop';
import { 
  SiReact, 
  SiNextdotjs, 
  SiTypescript, 
  SiTailwindcss, 
  SiDocker, 
  SiPrisma, 
  SiSupabase, 
  SiGithub,
  SiDotnet,
  SiJavascript,
  SiNodedotjs
} from 'react-icons/si';
import { BiLogoPostgresql } from 'react-icons/bi';

export default function About() {
  const techLogos = [
    { node:  <SiDotnet key="dotnet" />, title: ". NET", href: "https://dotnet.microsoft.com" },
    { node: <SiReact key="react" />, title: "React", href: "https://react.dev" },
    { node: <SiNextdotjs key="nextjs" />, title: "Next.js", href: "https://nextjs.org" },
    { node:  <SiTypescript key="typescript" />, title:  "TypeScript", href: "https://www.typescriptlang.org" },
    { node: <SiJavascript key="javascript" />, title:  "JavaScript", href:  "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
    { node: <SiNodedotjs key="nodejs" />, title:  "Node.js", href: "https://nodejs.org" },
    { node: <SiTailwindcss key="tailwind" />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
    { node: <BiLogoPostgresql key="postgres" />, title: "PostgreSQL", href: "https://www.postgresql.org" },
    { node: <SiDocker key="docker" />, title: "Docker", href: "https://www.docker.com" },
    { node: <SiPrisma key="prisma" />, title: "Prisma", href: "https://www.prisma.io" },
    { node: <SiSupabase key="supabase" />, title: "Supabase", href: "https://supabase.com" },
    { node:  <SiGithub key="github" />, title: "GitHub", href: "https://github.com" },
  ];

  return (
    <main className="about-page">
      <div className="about-container">
        {/* Bio Section */}
        <section className="about-bio">
          <h1>Bio</h1>
          <p>
            Hi, I’m Davy Smit, a creative technologist who loves turning ideas into polished digital experiences. 
            I design and build fast, intuitive, and scalable applications where technology and creativity come together.
            I’m driven by curiosity and a desire to improve, always exploring new tools and technologies to create digital products that are not only functional, 
            but meaningful and enjoyable to use.
          </p>
        </section>

        {/* Skills Section */}
        <section className="about-skills">
          <h2>Skills</h2>
          <div className="skills-logo-container">
            <LogoLoop
              logos={techLogos}
              speed={60}
              logoHeight={56}
              gap={48}
            />
          </div>
        </section>

        {/* Education & Experience Timeline */}
        <section className="about-timeline-section">
          <h2>Education & Experience</h2>
          
          <div className="timeline-wrapper">
            {/* Timeline Line */}
            <div className="timeline-line"></div>
            
            {/* Timeline Items */}
            <div className="timeline-items">
              {/* 2020 - Media Vormgeving */}
              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-year">2020</div>
                <div className="timeline-card">
                  <h3>Graphic Designer</h3>
                  <p className="timeline-level">Niveau 4</p>
                  <p className="timeline-description">Designing posters and multimedia content</p>
                </div>
              </div>

              {/* 2023 - Software Developer */}
              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-year">2023</div>
                <div className="timeline-card">
                  <h3>Software Developer</h3>
                  <p className="timeline-level">Niveau 4</p>
                  <p className="timeline-description">Full-stack development & software dev.</p>
                </div>
              </div>

              {/* 2024 - Stage ICT@work */}
              <div className="timeline-item">
                <div className="timeline-dot timeline-dot-current"></div>
                <div className="timeline-year">2024</div>
                <div className="timeline-card">
                  <h3>Internship ICT@work</h3>
                  <p className="timeline-level">Internship</p>
                  <p className="timeline-description">ASP. NET webapp en . NET MAUI app development</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}