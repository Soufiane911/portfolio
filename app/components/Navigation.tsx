'use client';

import { useState } from 'react';
import Link from 'next/link';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="nav">
      <div className="nav-content">
        <Link href="/" className="logo">
          Hamzaoui Soufiane
        </Link>

        {/* Desktop Navigation */}
        <ul className="nav-links">
          <li>
            <Link href="#about">À propos</Link>
          </li>
          <li>
            <Link href="#projects">Projets</Link>
          </li>
          <li>
            <Link href="#skills">Compétences</Link>
          </li>
          <li>
            <Link href="#documents">Documents</Link>
          </li>
        </ul>

        {/* Social Links */}
        <div className="social-links">
          <a href="https://www.linkedin.com/in/soufiane-hamzaoui-644402235/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={24} />
          </a>
          <a href="https://github.com/Soufiane911" target="_blank" rel="noopener noreferrer">
            <FaGithub size={24} />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="mobile-menu-button"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span className="sr-only">Open menu</span>
          <div className="hamburger">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="mobile-menu">
          <ul>
            <li>
              <Link href="#about" onClick={() => setIsMenuOpen(false)}>
                À propos
              </Link>
            </li>
            <li>
              <Link href="#projects" onClick={() => setIsMenuOpen(false)}>
                Projets
              </Link>
            </li>
            <li>
              <Link href="#skills" onClick={() => setIsMenuOpen(false)}>
                Compétences
              </Link>
            </li>
            <li>
              <Link href="#documents" onClick={() => setIsMenuOpen(false)}>
                Documents
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
} 