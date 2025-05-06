"use client";
import Navigation from './components/Navigation';
import Image from 'next/image';
import { FaFilePdf, FaGraduationCap, FaCertificate } from 'react-icons/fa';
import BackgroundAnimation from './components/BackgroundAnimation';
import { useRef, useEffect } from 'react';

export default function Home() {
  // Hook pour l'animation d'apparition
  const projectRefs = [
    useRef<HTMLDivElement>(null), 
    useRef<HTMLDivElement>(null), 
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null)
  ];
  const skillRefs = [useRef<HTMLDivElement>(null), useRef<HTMLDivElement>(null), useRef<HTMLDivElement>(null)];

  useEffect(() => {
    const allRefs = [...projectRefs, ...skillRefs];
    const observer = new window.IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.2 }
    );
    allRefs.forEach(ref => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });
    return () => observer.disconnect();
  }, []);

  return (
    <main>
      <BackgroundAnimation />
      <Navigation />
      
      {/* Hero Section */}
      <section id="about" className="hero">
        <div className="container">
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '1.5rem', }}>
            <Image src="/profil/profil.jpeg" alt="Photo de profil" width={200} height={200} style={{ borderRadius: '50%', objectFit: 'cover', border: '4px solid #0070f3', boxShadow: '0 4px 16px rgba(0,0,0,0.2)' }} />
          </div>
          <h1>Hamzaoui Soufiane</h1>
          <h2>Étudiant en Développement Full Stack</h2>
          <p>
          Je m'appelle Soufiane, étudiant en développement web et applications full stack. Passionné par la technologie, j'apprends à concevoir des interfaces modernes et performantes, en maîtrisant à la fois le front-end et le back-end. Curieux et motivé, je développe activement mes compétences à travers des projets personnels et une veille constante des meilleures pratiques du métier.
          </p>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section">
        <div className="container">
          <h2 className="section-title">Projets</h2>
          <div className="projects-grid">
            <div ref={projectRefs[0]} className="project-card card-appear">
              <Image
                src="/projects/MultiApp.png"
                alt="MultiApp"
                width={400}
                height={200}
                className="project-image"
              />
              <div className="project-content">
                <h3 className="project-title">MultiApp IOS</h3>
                <p className="project-description">
                  Application iOS multifonctionnelle avec Swift et SwiftUI.
                </p>
                <div className="project-tech">
                  <span className="tech-tag">Swift</span>
                  <span className="tech-tag">SwiftUI</span>
                  <span className="tech-tag">iOS</span>
                </div>
                <div style={{display: 'flex', gap: '1rem', marginTop: '1rem'}}>
                  <button onClick={() => window.open('https://github.com/Soufiane911/Multi-App-IOS', '_blank')} className="form-button">GitHub</button>
                 
                </div>
              </div>
            </div>

            <div ref={projectRefs[1]} className="project-card card-appear">
              <Image
                src="/projects/NoteApp.png"
                alt="Note App"
                width={400}
                height={200}
                className="project-image"
              />
              <div className="project-content">
                <h3 className="project-title">Note App</h3>
                <p className="project-description">
                  Application de prise de notes avec React Native.
                </p>
                <div className="project-tech">
                  <span className="tech-tag">React Native</span>
                  <span className="tech-tag">JavaScript</span>
                  <span className="tech-tag">Mobile</span>
                </div>
                <div style={{display: 'flex', gap: '1rem', marginTop: '1rem'}}>
                  <button onClick={() => window.open('https://github.com/Soufiane911/Note-AppV2', '_blank')} className="form-button">GitHub</button>
                 
                </div>
              </div>
            </div>

            

            <div ref={projectRefs[2]} className="project-card card-appear">
              <Image
                src="/projects/WBProject.webp"
                alt="WBCollab"
                width={400}
                height={200}
                className="project-image"
              />
              <div className="project-content">
                <h3 className="project-title">WBCollab (En cours)</h3>
                <p className="project-description">
                  Plateforme de collaboration web avec Next.js et TypeScript.
                </p>
                <div className="project-tech">
                  <span className="tech-tag">Vue.js</span>
                  <span className="tech-tag">TypeScript</span>
                  <span className="tech-tag">Node.js</span>
                </div>
                <div style={{display: 'flex', gap: '1rem', marginTop: '1rem'}}>
                  <button onClick={() => window.open('https://github.com/Soufiane911', '_blank')} className="form-button">GitHub</button>
                 
                </div>
              </div>
            </div>
            
            <div ref={projectRefs[3]} className="project-card card-appear">
              <Image
                src="/projects/todoapp.png"
                alt="Todo App"
                width={400}
                height={200}
                className="project-image"
              />
              <div className="project-content">
                <h3 className="project-title">Todo App</h3>
                <p className="project-description">
                  Application de gestion de tâches avec React et TypeScript.
                </p>
                <div className="project-tech">
                  <span className="tech-tag">React</span>
                  <span className="tech-tag">Tailwind CSS</span>
                  <span className="tech-tag">MongoDB</span>
                </div>
                <div style={{display: 'flex', gap: '1rem', marginTop: '1rem'}}>
                  <button onClick={() => window.open('https://github.com/Soufiane911', '_blank')} className="form-button">GitHub</button>
                 
                </div>
              </div>
            </div>

            <div ref={projectRefs[4]} className="project-card card-appear">
              <Image
                src="/projects/robloxgame.png"
                alt="Horror Game"
                width={400}
                height={200}
                className="project-image"
              />
              <div className="project-content">
                <h3 className="project-title">Developpement jeux vidéo (En cours)</h3>
                <p className="project-description">
                  Jeux vidéo de type survival horror.
                </p>
                <div className="project-tech">
                  <span className="tech-tag">Roblox Studio</span>
                  <span className="tech-tag">Lua</span>
                  <span className="tech-tag">Roblox</span>
                </div>
                <div style={{display: 'flex', gap: '1rem', marginTop: '1rem'}}>
                  <button onClick={() => window.open('https://github.com/Soufiane911', '_blank')} className="form-button">GitHub</button>
                 
                </div>
              </div>
            </div>

            <div ref={projectRefs[5]} className="project-card card-appear">
              <Image
                src="/projects/AIProject.png"
                alt="Algorithme de reconnaissance d'images"
                width={400}
                height={200}
                className="project-image"
              />
              <div className="project-content">
                <h3 className="project-title">Algorithme de reconnaissance d'images (En cours)</h3>
                <p className="project-description">
                  Application de reconnaissance d'images.
                </p>
                <div className="project-tech">
                  <span className="tech-tag">TensorFlow</span>
                  <span className="tech-tag">Keras</span>
                  <span className="tech-tag">OpenCV</span>
                </div>
                <div style={{display: 'flex', gap: '1rem', marginTop: '1rem'}}>
                  <button onClick={() => window.open('https://github.com/Soufiane911', '_blank')} className="form-button">GitHub</button>
                 
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="section">
        <div className="container">
          <h2 className="section-title">Compétences</h2>
          <div className="experience-grid">
            <div ref={skillRefs[0]} className="experience-card card-appear">
              <h3>Frontend</h3>
              <div className="project-tech">
                <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                  <Image src="/skills/react.png" alt="React" width={40} height={40} />
                  <span className="tech-tag">React</span>
                </div>
                <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                  <Image src="/skills/nextjs.svg" alt="Next.js" width={40} height={40} />
                  <span className="tech-tag">Next.js</span>
                </div>
                <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                  <Image src="/skills/TS.png" alt="TypeScript" width={40} height={40} />
                  <span className="tech-tag">TypeScript</span>
                </div>
                <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                  <Image src="/skills/js.webp" alt="JavaScript" width={40} height={40} />
                  <span className="tech-tag">JavaScript</span>
                </div>
                <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                  <Image src="/skills/tailwind.png" alt="Tailwind CSS" width={40} height={40} />
                  <span className="tech-tag">Tailwind CSS</span>
                </div>
              </div>
            </div>
            <div ref={skillRefs[1]} className="experience-card card-appear">
              <h3>Mobile</h3>
              <div className="project-tech">
                <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                  <Image src="/skills/reactnative.svg" alt="React Native" width={40} height={40} />
                  <span className="tech-tag">React Native</span>
                </div>
                <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                  <Image src="/skills/swift.svg" alt="Swift" width={40} height={40} />
                  <span className="tech-tag">Swift</span>
                </div>
                <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                  <Image src="/skills/coredata.png" alt="CoreData" width={40} height={40} />
                  <span className="tech-tag">Core Data</span>
                </div>
              </div>
            </div>
            <div ref={skillRefs[2]} className="experience-card card-appear">
              <h3>Backend</h3>
              <div className="project-tech">
                <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                  <Image src="/skills/node.png" alt="Node.js" width={40} height={40} />
                  <span className="tech-tag">Node.js</span>
                </div>
                <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                  <Image src="/skills/mongodb.webp" alt="MongoDB" width={40} height={40} />
                  <span className="tech-tag">MongoDB</span>
                </div>
                <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                  <Image src="/skills/ex.png" alt="Express JS" width={40} height={40} />
                  <span className="tech-tag">Express JS</span>
                </div>
                <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                  <Image src="/skills/sql.png" alt="SQL" width={40} height={40} />
                  <span className="tech-tag">SQL</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Documents Section */}
      <section id="documents" className="documents-section">
        <div className="container">
          <h2 className="section-title">Documents</h2>
          <div className="documents-grid">
            <a href="/cv.pdf" target="_blank" rel="noopener noreferrer" className="document-card">
              <FaFilePdf className="document-icon" />
              <h3 className="document-title">CV</h3>
              <p className="document-description">Mon curriculum vitae</p>
            </a>
            <a href="https://github.com/Soufiane911" target="_blank" rel="noopener noreferrer" className="document-card">
              <FaGraduationCap className="document-icon" />
              <h3 className="document-title">BTS SIO</h3>
              <p className="document-description">Diplôme BTS Services Informatiques aux Organisations</p>
            </a>
           
          </div>
        </div>
      </section>
    </main>
  );
}
