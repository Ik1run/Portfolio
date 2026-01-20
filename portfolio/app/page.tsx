'use client';

import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  const handleAboutClick = () => {
    router.push('/about');
  };

  return (
    <main className="page">
      <section className="hero">
        <div className="hero-image">
          <Image
            src="/Selfie.png"
            alt="Davy Smit"
            width={300}
            height={300}
            className="profile-image"
          />
        </div>

        <div className="hero-text">
          <h1>Davy Smit</h1>
          <p>
            I design and build applications where<br />
            creativity meets code. 
          </p>
          <button className="about-me-button" onClick={handleAboutClick}>
            About Me
          </button>
        </div>
      </section>
    </main>
  );
}