import Image from "next/image";

export default function Home() {
  return (
    <main className="page">
      <header className="navbar">
        <div className="nav-logo">
          <img src="/Logo.png" alt="Logo" width={130} height={75} />
        </div>
        <nav className="nav-links">
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Portfolio</a>
          <a href="#">Contact</a>
        </nav>
        <div className="nav-socials" aria-hidden>
          <a href="https://github.com/Ik1run" target="_blank" className="nav-social-link">
            <img src="/Github.svg" alt="GitHub" width={24} height={24}/>
          </a>
          <a href="https://linkedin.com/in/davy-smit" target="_blank" className="nav-social-link">
            <img src="/Linkedin.svg" alt="LinkedIn" width={24} height={24} />
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-text">
          <h1><strong>Davy Smit</strong></h1>
          <p>
            I design and build applications where <br />
            creativity meets code.
          </p>

          <button className="cv-button">
            <span className="cv-icon">
              <img src="/file.svg" alt="Download icon" width={20} height={20} />
            </span>
            <span className="cv-text">Download CV</span>
          </button>
        </div>

        <div className="hero-image">
          <Image
            src="/Selfie.png"
            alt="Profile placeholder"
            width={280}
            height={280}
          />
        </div>
      </section>
    </main>
  );
}
