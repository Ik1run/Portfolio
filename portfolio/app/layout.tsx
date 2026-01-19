import Image from "next/image";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children:  React.ReactNode;
}) {
  return (
    <html lang="nl">
      <body>
        <header className="navbar">
          <div className="nav-logo">
            <img src="/Logo.png" alt="Logo" />
          </div>
          <nav className="nav-links">
            <a href="/" className="active">Home</a>
            <a href="/about">About</a>
            <a href="/portfolio">Portfolio</a>
            <a href="/contact">Contact</a>
          </nav>
          <div className="nav-socials">
            <a href="https://github.com/Ik1run" target="_blank" rel="noopener noreferrer">
              <img src="/Github.svg" alt="GitHub" width={20} height={20}/>
            </a>
            <a href="https://linkedin.com/in/davy-smit" target="_blank" rel="noopener noreferrer">
              <img src="/Linkedin.svg" alt="LinkedIn" width={20} height={20} />
            </a>
          </div>
        </header>
        {children}
      </body>
    </html>
  );
}