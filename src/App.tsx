import './App.css'
import React, { useEffect, useState } from "react";
import { motion, useAnimation, AnimatePresence } from "framer-motion";
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

const Expandable = ({ title, children }: { title: string, children: React.ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="expandable">
      <motion.div
        className="expandable-header"
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ cursor: 'pointer' }}
      >
        <h3 className="font-semibold">{title}</h3>
        <motion.span
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.3 }}
          style={{ fontSize: '1.5rem', fontWeight: 300 }}
        >
          +
        </motion.span>
      </motion.div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="expandable-content"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default function App() {
  return (
    <>
      {/* Header Navigation */}
      <header className="app-header">
        <nav className="main-nav">
          <a href="#profile">My Profile</a>
          <a href="#projects">Personal Projects</a>
          <a href="#skills">Technical Skills</a>
          <a href="#education">Education</a>
          <a href="#clubs">Clubs & Involvement</a>
          <a href="#languages">Languages</a>
        </nav>
      </header>
      <main style={{ maxWidth: '900px', margin: '0 auto', padding: '5rem 0 2rem 0' }}>
        {/* My Profile Section */}
        <div id="profile">
          <Section>
            <div className="hero-section">
              <div>
                <h1 className="text-4xl font-bold">Chiew Yi Jia</h1>
                <p className="text-lg">Computer Science Student | Aspiring Software Engineer</p>
                <p className="text-sm">Tel: +601110977387 | Email: chyj218@gmail.com</p>
                <p className="text-sm mt-4">Passionate computer science student that has a strong interest in building interactive applications using various tools and libraries. Eager to learn new technical and interpersonal skills and actively seeking internship opportunities to grow further.</p>
              </div>
            </div>
          </Section>
        </div>

        {/* Personal Projects Section */}
        <div id="projects">
          <Section>
            <div className="skills-section">
              <h2 className="section-title">Personal Projects & Hackathons</h2>
              <Expandable title="Smart Bulletin Board (React + Firebase + MediaPipe) — Final Year Project (In Progress)">
                <ul className="text-sm" style={{ paddingLeft: '1.5em', margin: 0, textAlign: 'left', listStylePosition: 'outside' }}>
                  <li>Final year capstone project to build a centralized, interactive digital noticeboard system for campus announcements</li>
                  <li>Integrated Google MediaPipe to enable custom hand gesture recognition, allowing touchless interaction with the bulletin board</li>
                  <li>Developed the frontend using React, focusing on a responsive and user-friendly interface for content creation and display</li>
                  <li>Utilized Firebase for real-time database synchronization, cloud storage, and user role management</li>
                  <li>Designed to enhance accessibility and streamline content dissemination in public spaces</li>
                </ul>
              </Expandable>
              <Expandable title="Chess Engines & Game Logic Projects (Python, TypeScript, Java)">
                <ul className="text-sm" style={{ paddingLeft: '1.5em', margin: 0, textAlign: 'left', listStylePosition: 'outside' }}>
                  <li>Chess Web App: Built a full-stack chess application with real-time move validation, game-over detection, and Stockfish AI integration</li>
                  <li>Used WebSocket to enable seamless communication between the python-chess backend and a TypeScript-based frontend</li>
                  <li>Managed in-memory game state and interactive UI for live gameplay</li>
                  <li>Project aimed at strengthening understanding of frontend-backend communication</li>
                </ul>
              </Expandable>
              <Expandable title="Chinese Chess (Xiangqi) Backend">
                <ul className="text-sm" style={{ paddingLeft: '1.5em', margin: 0, textAlign: 'left', listStylePosition: 'outside' }}>
                    <li>Developed a complete game engine in Java, supporting all piece movements, game-over rules, and board representation</li>
                    <li>Focused on applying object-oriented design principles to model complex rule sets</li>
                    <li>Created to deepen understanding of backend game logic and traditional board games</li>
                </ul>
              </Expandable>
              
            </div>
          </Section>
        </div>

        {/* Technical Skills Section */}
        <div id="skills">
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

        {/* Education Section */}
        <div id="education">
          <Section>
            <div className="skills-section">
              <h2 className="section-title">Education</h2>
              <h3 className="font-bold">Monash University Malaysia, Subang Jaya, Kuala Lumpur</h3>
              <p className="text-sm">Bachelor of Computer Science | March 2023 - Now</p>
              <p className="text-sm">Overall GPA: 3.789 | CGPA:3.931 </p>
              <p className="text-sm">WAM: 84.233</p>
              <p className="text-sm">Relevant Coursework: Data Structures & Algorithms, App Development, Object Oriented Design</p>
              <br />
              <h3 className="font-bold">Inti International College Penang, Pulau Pinang</h3>
              <p className="text-sm">Cambridge A-Levels | Jan 2019 - May 2020</p>
              <p className="text-sm">Subjects: Mathematics, Physics, Chemistry, Further Mathematics</p>
              
              <br />
              
            </div>
          </Section>
        </div>

        {/* Clubs and Involvement Section */}
        <div id="clubs">
          <Section>
            <div className="skills-section">
              <h2 className="section-title">Clubs & Involvement</h2>
              <div className="skills-grid">
                <div>
                  <h3 className="font-semibold">Monash Speakers Society - Secretary</h3>
                  <div className="text-sm">June 2023 - Now</div>
                  <div className="text-sm">Coordinated society operations, including meeting agendas, membership records, and official documentation.</div>
                </div>
                <div>
                  <h3 className="font-semibold">Inti International Sales Support Team</h3>
                  <div className="text-sm">Jan 2018 - May 2020</div>
                  <div className="text-sm">Assisted prospective students and parents with course inquiries and application procedures. Provided administrative support during recruitment events and open days. Gained experience in client interaction and teamwork.</div>
                </div>
              </div>
            </div>
          </Section>
        </div>

        {/* Languages Section */}
        <div id="languages">
          <Section>
            <div className="skills-section">
              <h2 className="section-title">Languages</h2>
              <ul className="text-sm" style={{ paddingLeft: 0, margin: 0, textAlign: 'center', listStylePosition: 'inside' }}>
                <li>English</li>
                <li>Chinese</li>
                <li>Malay</li>
              </ul>
            </div>
          </Section>
        </div>
      </main>
    </>
  );
}

