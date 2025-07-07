import './App.css'
import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import jsLogo from './assets/js.svg';
import pythonLogo from './assets/python.svg';
import reactLogo from './assets/reactjs.svg';

const Section = ({ children }: { children: React.ReactNode }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  useEffect(() => {
    if (inView) controls.start("visible");
  }, [controls, inView]);

  return (
    <motion.section
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
      }}
    >
      {children}
    </motion.section>
  );
};

export default function App() {
  return (
    <>
      {/* Header Navigation */}
      <header style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        background: '#fff',
        boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
        zIndex: 100,
        padding: '0.5rem 0',
      }}>
        <nav style={{ maxWidth: '900px', margin: '0 auto', display: 'flex', justifyContent: 'center', gap: '2rem' }}>
          <a href="#profile" style={{ textDecoration: 'none', color: '#6366f1', fontWeight: 600 }}>My Profile</a>
          <a href="#projects" style={{ textDecoration: 'none', color: '#6366f1', fontWeight: 600 }}>Personal Projects</a>
          <a href="#skills" style={{ textDecoration: 'none', color: '#6366f1', fontWeight: 600 }}>Technical Skills</a>
          <a href="#education" style={{ textDecoration: 'none', color: '#6366f1', fontWeight: 600 }}>Education</a>
          <a href="#clubs" style={{ textDecoration: 'none', color: '#6366f1', fontWeight: 600 }}>Clubs & Involvement</a>
          <a href="#languages" style={{ textDecoration: 'none', color: '#6366f1', fontWeight: 600 }}>Languages</a>
        </nav>
      </header>
      <main style={{ maxWidth: '900px', margin: '0 auto', padding: '5rem 0 2rem 0' }}>
        {/* My Profile Section */}
        <div id="profile" style={{ background: '#f5f7fa', width: '100vw', position: 'relative', left: '50%', right: '50%', marginLeft: '-50vw', marginRight: '-50vw', padding: '2.5rem 0' }}>
          <div style={{ maxWidth: '900px', margin: '0 auto', padding: '0 1rem' }}>
            <Section>
              <div className="hero-section">
                <div>
                  <h1 className="text-4xl font-bold">Chiew Yi Jia</h1>
                  <p className="text-lg text-gray-600">Computer Science Student | Aspiring Software Engineer</p>
                  <p className="text-sm text-gray-500">Tel: +601110977387 | Email: chyj218@gmail.com</p>
                  <p className="text-sm text-gray-600 mt-4">Passionate computer science student that has a strong interest in building interactive applications using various tools and libraries. Eager to learn new technical and interpersonal skills and actively seeking internship opportunities to grow further.</p>
                </div>
              </div>
            </Section>
          </div>
        </div>

        {/* Personal Projects Section */}
        <div id="projects" style={{ background: '#fff', width: '100vw', position: 'relative', left: '50%', right: '50%', marginLeft: '-50vw', marginRight: '-50vw', padding: '2.5rem 0' }}>
          <div style={{ maxWidth: '900px', margin: '0 auto', padding: '0 1rem' }}>
            <Section>
              <div className="skills-section">
                <h2 className="section-title">Personal Projects & Hackathons</h2>
                <div className="skills-grid">
                  <div>
                    <h3 className="font-semibold">Smart Bulletin Board (React + Firebase)</h3>
                    <ul className="text-sm text-gray-600" style={{ paddingLeft: '1.5em', margin: 0, textAlign: 'left', listStylePosition: 'outside' }}>
                      <li>On going final year project aimed at building a digital noticeboard system for centralized announcements and media</li>
                      <li>Integrates Google Mediapie for touchless interaction with the bulletin board</li>
                      <li>Utilized Firebase for real-time database synchronization and cloud storage</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold">Chess Web App (Python + TypeScript)</h3>
                    <ul className="text-sm text-gray-600" style={{ paddingLeft: '1.5em', margin: 0, textAlign: 'left', listStylePosition: 'outside' }}>
                      <li>Implemented real-time move validation, game-over detection, and Stockfish AI integration</li>
                      <li>Used WebSocket for frontend-backend communication and maintained in-memory game state</li>
                      <li>Main goal was to be familiar with front-end back-end communication</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold">Chinese Chess Backend (Java)</h3>
                    <ul className="text-sm text-gray-600" style={{ paddingLeft: '1.5em', margin: 0, textAlign: 'left', listStylePosition: 'outside' }}>
                      <li>Designed and implemented a full backend engine for Xiangqi (Chinese Chess) in Java</li>
                      <li>Included all piece movement logic, game-over conditions, and custom board representation</li>
                      <li>Created to deepen understanding of object-oriented design and board game logic</li>
                    </ul>
                  </div>
                </div>
              </div>
            </Section>
          </div>
        </div>

        {/* Technical Skills Section */}
        <div id="skills" style={{ background: '#f5f7fa', width: '100vw', position: 'relative', left: '50%', right: '50%', marginLeft: '-50vw', marginRight: '-50vw', padding: '2.5rem 0' }}>
          <div style={{ maxWidth: '900px', margin: '0 auto', padding: '0 1rem' }}>
            <Section>
              <div className="skills-section">
                <h2 className="section-title">Technical Skills</h2>
                <div className="skills-grid">
                  <div>
                    <img src={pythonLogo} alt="Python" />
                    <div>Python</div>
                  </div>
                  <div>
                    <img src={jsLogo} alt="JavaScript" />
                    <div>JavaScript</div>
                  </div>
                  <div>
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" alt="Java" style={{ width: 40, height: 40 }} />
                    <div>Java</div>
                  </div>
                  <div>
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg" alt="C#" style={{ width: 40, height: 40 }} />
                    <div>C#</div>
                  </div>
                  <div>
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="HTML5" style={{ width: 40, height: 40 }} />
                    <div>HTML/CSS</div>
                  </div>
                  <div>
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/haskell/haskell-original.svg" alt="Haskell" style={{ width: 40, height: 40 }} />
                    <div>Haskell</div>
                  </div>
                  <div>
                    <img src={reactLogo} alt="React" />
                    <div>React</div>
                  </div>
                  <div>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg" alt="Node.js" style={{ width: 40, height: 40 }} />
                    <div>Node.js</div>
                  </div>
                  <div>
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" alt="MySQL" style={{ width: 40, height: 40 }} />
                    <div>MySQL</div>
                  </div>
                  <div>
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" alt="Git" style={{ width: 40, height: 40 }} />
                    <div>Git</div>
                  </div>
                  <div>
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/unity/unity-original.svg" alt="Unity" style={{ width: 40, height: 40 }} />
                    <div>Unity</div>
                  </div>
                  <div>
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" alt="VS Code" style={{ width: 40, height: 40 }} />
                    <div>VS Code</div>
                  </div>
                  <div>
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" alt="Figma" style={{ width: 40, height: 40 }} />
                    <div>Figma</div>
                  </div>
                  <div>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/0/08/Canva_icon_2021.svg" alt="Canva" style={{ width: 40, height: 40 }} />
                    <div>Canva</div>
                  </div>
                </div>
              </div>
            </Section>
          </div>
        </div>

        {/* Education Section */}
        <div id="education" style={{ background: '#fff', width: '100vw', position: 'relative', left: '50%', right: '50%', marginLeft: '-50vw', marginRight: '-50vw', padding: '2.5rem 0' }}>
          <div style={{ maxWidth: '900px', margin: '0 auto', padding: '0 1rem' }}>
            <Section>
              <div className="skills-section">
                <h2 className="section-title">Education</h2>
                <h3 className="font-bold">Monash University Malaysia, Subang Jaya, Kuala Lumpur</h3>
                <p className="text-sm text-gray-600">Bachelor of Computer Science | March 2023 - Now</p>
                <p className="text-sm text-gray-600">Overall GPA: 3.800 | WAM: 84.955</p>
                <p className="text-sm text-gray-600">Relevant Coursework: Data Structures & Algorithms, App Development, Object Oriented Design</p>
                <br />
                <h3 className="font-bold">Inti International College Penang, Pulau Pinang</h3>
                <p className="text-sm text-gray-600">Cambridge A-Levels | Jan 2019 - May 2020</p>
                <p className="text-sm text-gray-600">Subjects: Mathematics, Physics, Chemistry, Further Mathematics</p>
                
                <br />
                
              </div>
            </Section>
          </div>
        </div>

        {/* Clubs and Involvement Section */}
        <div id="clubs" style={{ background: '#f5f7fa', width: '100vw', position: 'relative', left: '50%', right: '50%', marginLeft: '-50vw', marginRight: '-50vw', padding: '2.5rem 0' }}>
          <div style={{ maxWidth: '900px', margin: '0 auto', padding: '0 1rem' }}>
            <Section>
              <div className="skills-section">
                <h2 className="section-title">Clubs & Involvement</h2>
                <div className="skills-grid">
                  <div>
                    <h3 className="font-semibold">Monash Speakers Society - Secretary</h3>
                    <div className="text-sm text-gray-600">June 2023 - Now</div>
                    <div className="text-sm text-gray-600">Coordinated society operations, including meeting agendas, membership records, and official documentation.</div>
                  </div>
                  <div>
                    <h3 className="font-semibold">Inti International Sales Support Team</h3>
                    <div className="text-sm text-gray-600">Jan 2018 - May 2020</div>
                    <div className="text-sm text-gray-600">Assisted prospective students and parents with course inquiries and application procedures. Provided administrative support during recruitment events and open days. Gained experience in client interaction and teamwork.</div>
                  </div>
                </div>
              </div>
            </Section>
          </div>
        </div>

        {/* Languages Section */}
        <div id="languages" style={{ background: '#fff', width: '100vw', position: 'relative', left: '50%', right: '50%', marginLeft: '-50vw', marginRight: '-50vw', padding: '2.5rem 0' }}>
          <div style={{ maxWidth: '900px', margin: '0 auto', padding: '0 1rem' }}>
            <Section>
              <div className="skills-section">
                <h2 className="section-title">Languages</h2>
                <ul className="text-sm text-gray-600" style={{ paddingLeft: 0, margin: 0, textAlign: 'center', listStylePosition: 'inside' }}>
                  <li>English</li>
                  <li>Chinese</li>
                  <li>Malay</li>
                </ul>
              </div>
            </Section>
          </div>
        </div>
      </main>
    </>
  );
}

