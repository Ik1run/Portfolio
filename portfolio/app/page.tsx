'use client';

import Image from "next/image";

export default function Home() {
  const handleDownload = () => {
    window.open('/CV.pdf', '_blank');
  };

  return (
    <main className="page">
      <section className="hero">
        <div className="hero-text">
          <h1>Davy Smit</h1>
          <p>
            I design and build applications where<br />
            creativity meets code. 
          </p>

          <button className="cv-button" onClick={handleDownload}>
            <span className="cv-icon">📄</span>
            <span className="cv-text">Toon CV</span>
          </button>
        </div>

        <div className="hero-image">
          <Image
            src="/Selfie.png"
            alt="Davy Smit"
            width={300}
            height={300}
            className="profile-image"
          />
        </div>
      </section>
    </main>
  );
}