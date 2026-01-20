/**
 * React Export Generator
 * Generates React component structure from portfolio data
 */

export const generateReactPortfolio = (portfolio) => {
  const folderStructure = generateFolderStructure(portfolio);
  const files = generateReactFiles(portfolio);

  return {
    folderStructure,
    files,
  };
};

const generateFolderStructure = (portfolio) => {
  return `src/
  ├── components/
  │   ├── Hero.jsx
  │   ├── About.jsx
  │   ├── Skills.jsx
  │   ├── Experience.jsx
  │   ├── Projects.jsx
  │   ├── Education.jsx
  │   ├── Certifications.jsx
  │   ├── Contact.jsx
  │   ├── Footer.jsx
  │   └── Layout.jsx
  ├── data/
  │   └── portfolio.js
  ├── styles/
  │   ├── global.css
  │   └── theme.css
  ├── App.jsx
  ├── App.css
  └── index.jsx
public/
  └── index.html
package.json
vite.config.js
`;
};

const generateReactFiles = (portfolio) => {
  const { personal, about, skills, experience, projects, education, certifications, theme } = portfolio;

  return {
    'src/App.jsx': generateAppComponent(portfolio),
    'src/components/Hero.jsx': generateHeroComponent(personal, about),
    'src/components/About.jsx': generateAboutComponent(about),
    'src/components/Skills.jsx': generateSkillsComponent(skills),
    'src/components/Experience.jsx': generateExperienceComponent(experience),
    'src/components/Projects.jsx': generateProjectsComponent(projects),
    'src/components/Education.jsx': generateEducationComponent(education),
    'src/components/Certifications.jsx': generateCertificationsComponent(certifications),
    'src/components/Contact.jsx': generateContactComponent(personal),
    'src/components/Footer.jsx': generateFooterComponent(personal),
    'src/data/portfolio.js': generatePortfolioDataFile(portfolio),
    'src/styles/global.css': generateGlobalStyles(theme),
    'src/styles/theme.css': generateThemeStyles(theme),
    'src/index.jsx': generateIndexFile(),
    'package.json': generatePackageJson(),
    'vite.config.js': generateViteConfig(),
  };
};

const generateAppComponent = (portfolio) => `import React from 'react';
import Layout from './components/Layout';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Education from './components/Education';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';
import portfolioData from './data/portfolio';
import './App.css';

function App() {
  return (
    <Layout data={portfolioData}>
      <Hero data={portfolioData} />
      <About data={portfolioData.about} />
      <Skills data={portfolioData.skills} />
      <Experience data={portfolioData.experience} />
      <Projects data={portfolioData.projects} />
      <Education data={portfolioData.education} />
      {portfolioData.certifications && portfolioData.certifications.length > 0 && (
        <Certifications data={portfolioData.certifications} />
      )}
      <Contact data={portfolioData.personal} />
      <Footer data={portfolioData.personal} />
    </Layout>
  );
}

export default App;`;

const generateHeroComponent = (personal, about) => `import React from 'react';

export default function Hero({ data }) {
  return (
    <section className="hero">
      <div className="container">
        <h1>${personal.fullName}</h1>
        <p className="subtitle">${personal.professionalTitle}</p>
        ${personal.location ? `<p className="location">${personal.location}</p>` : ''}
        <p className="tagline">${about.summary.substring(0, 150)}...</p>
        <div className="cta-buttons">
          <a href="#contact" className="btn btn-primary">Get In Touch</a>
          <a href="#projects" className="btn btn-secondary">View My Work</a>
        </div>
      </div>
    </section>
  );
}`;

const generateAboutComponent = (about) => `import React from 'react';

export default function About({ data }) {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2>About Me</h2>
        <p className="summary">\${data.summary}</p>
        {data.highlights && data.highlights.length > 0 && (
          <ul className="highlights">
            {data.highlights.map((highlight, idx) => (
              <li key={idx}>{highlight}</li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}`;

const generateSkillsComponent = (skills) => `import React from 'react';

export default function Skills({ data }) {
  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2>Skills</h2>
        <div className="skills-grid">
          {data.technical.length > 0 && (
            <div className="skill-group">
              <h3>Technical</h3>
              <div className="skill-tags">
                {data.technical.map((skill, idx) => (
                  <span key={idx} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>
          )}
          {data.tools.length > 0 && (
            <div className="skill-group">
              <h3>Tools</h3>
              <div className="skill-tags">
                {data.tools.map((tool, idx) => (
                  <span key={idx} className="skill-tag">{tool}</span>
                ))}
              </div>
            </div>
          )}
          {data.soft.length > 0 && (
            <div className="skill-group">
              <h3>Soft Skills</h3>
              <div className="skill-tags">
                {data.soft.map((skill, idx) => (
                  <span key={idx} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}`;

const generateExperienceComponent = (experience) => `import React from 'react';

export default function Experience({ data }) {
  return (
    <section id="experience" className="experience">
      <div className="container">
        <h2>Experience</h2>
        <div className="experience-list">
          {data.map((job, idx) => (
            <div key={idx} className="experience-item">
              <div className="job-header">
                <div>
                  <h3>{job.jobTitle}</h3>
                  <p className="company">{job.company}</p>
                </div>
                <span className="duration">{job.duration.start} - {job.duration.current ? 'Present' : job.duration.end}</span>
              </div>
              {job.responsibilities.length > 0 && (
                <ul className="responsibilities">
                  {job.responsibilities.map((resp, i) => (
                    <li key={i}>{resp}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}`;

const generateProjectsComponent = (projects) => `import React from 'react';

export default function Projects({ data }) {
  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2>Projects</h2>
        <div className="projects-grid">
          {data.map((project, idx) => (
            <div key={idx} className="project-card">
              <h3>{project.name}</h3>
              <p>{project.description}</p>
              {project.techStack.length > 0 && (
                <div className="tech-stack">
                  {project.techStack.map((tech, i) => (
                    <span key={i} className="tech-tag">{tech}</span>
                  ))}
                </div>
              )}
              <div className="project-links">
                {project.githubUrl && (
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">GitHub</a>
                )}
                {project.liveUrl && (
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">Live Demo</a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}`;

const generateEducationComponent = (education) => `import React from 'react';

export default function Education({ data }) {
  return (
    <section id="education" className="education">
      <div className="container">
        <h2>Education</h2>
        <div className="education-list">
          {data.map((edu, idx) => (
            <div key={idx} className="education-item">
              <h3>{edu.degree}</h3>
              <p className="institution">{edu.institution}</p>
              <p className="year">{edu.year}</p>
              {edu.description && <p>{edu.description}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}`;

const generateCertificationsComponent = (certifications) => `import React from 'react';

export default function Certifications({ data }) {
  return (
    <section id="certifications" className="certifications">
      <div className="container">
        <h2>Certifications</h2>
        <div className="certifications-list">
          {data.map((cert, idx) => (
            <div key={idx} className="cert-item">
              <h3>{cert.title}</h3>
              <p className="issuer">{cert.issuer}</p>
              <p className="date">{cert.date}</p>
              {cert.credentialUrl && (
                <a href={cert.credentialUrl} target="_blank" rel="noopener noreferrer">View Credential</a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}`;

const generateContactComponent = (personal) => `import React, { useState } from 'react';

export default function Contact({ data }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2>Get In Touch</h2>
        <div className="contact-content">
          <div className="contact-info">
            {data.email && <p><strong>Email:</strong> <a href={\`mailto:\${data.email}\`}>{data.email}</a></p>}
            {data.phone && <p><strong>Phone:</strong> {data.phone}</p>}
            {data.location && <p><strong>Location:</strong> {data.location}</p>}
          </div>
          <form className="contact-form" onSubmit={handleSubmit}>
            <input 
              type="text" 
              placeholder="Your Name" 
              required
              onChange={(e) => setFormData({...formData, name: e.target.value})}
            />
            <input 
              type="email" 
              placeholder="Your Email" 
              required
              onChange={(e) => setFormData({...formData, email: e.target.value})}
            />
            <textarea 
              placeholder="Your Message" 
              rows="5"
              required
              onChange={(e) => setFormData({...formData, message: e.target.value})}
            />
            <button type="submit" className="btn btn-primary">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
}`;

const generateFooterComponent = (personal) => `import React from 'react';

export default function Footer({ data }) {
  return (
    <footer className="footer">
      <div className="container">
        <p>&copy; ${new Date().getFullYear()} ${personal.fullName}. All rights reserved.</p>
        <div className="social-links">
          {data.social?.github && <a href={data.social.github} target="_blank" rel="noopener noreferrer">GitHub</a>}
          {data.social?.linkedin && <a href={data.social.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>}
          {data.social?.twitter && <a href={data.social.twitter} target="_blank" rel="noopener noreferrer">Twitter</a>}
          {data.social?.portfolio && <a href={data.social.portfolio} target="_blank" rel="noopener noreferrer">Portfolio</a>}
        </div>
      </div>
    </footer>
  );
}`;

const generatePortfolioDataFile = (portfolio) => {
  return `export default ${JSON.stringify(portfolio, null, 2)};`;
};

const generateGlobalStyles = (theme) => `* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  line-height: 1.6;
  color: var(--color-text);
  background-color: var(--color-background);
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

section {
  padding: 4rem 0;
}

h1, h2, h3, h4, h5, h6 {
  line-height: 1.2;
  margin-bottom: 1rem;
}

h1 {
  font-size: 3rem;
}

h2 {
  font-size: 2.5rem;
  color: var(--color-primary);
}

h3 {
  font-size: 1.5rem;
}

a {
  color: var(--color-primary);
  text-decoration: none;
  transition: opacity 0.3s ease;
}

a:hover {
  opacity: 0.8;
}

.btn {
  display: inline-block;
  padding: 0.75rem 1.5rem;
  border-radius: 0.5rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  border: none;
  text-decoration: none;
}

.btn-primary {
  background-color: var(--color-primary);
  color: white;
}

.btn-primary:hover {
  opacity: 0.9;
  transform: translateY(-2px);
}

.btn-secondary {
  background-color: transparent;
  color: var(--color-primary);
  border: 2px solid var(--color-primary);
}

@media (max-width: 768px) {
  .container {
    padding: 0 1rem;
  }

  section {
    padding: 2rem 0;
  }

  h1 {
    font-size: 2rem;
  }

  h2 {
    font-size: 1.75rem;
  }
}
`;

const generateThemeStyles = (theme) => {
  const colors = theme.customColors || {
    primary: '#1890ff',
    secondary: '#36cfc9',
    accent: '#faad14',
    background: '#ffffff',
    text: '#000000',
  };

  return `:root {
  --color-primary: ${colors.primary};
  --color-secondary: ${colors.secondary};
  --color-accent: ${colors.accent};
  --color-background: ${colors.background};
  --color-text: ${colors.text};
}

/* Hero Section */
.hero {
  text-align: center;
  padding: 6rem 2rem;
  background: linear-gradient(135deg, var(--color-primary), var(--color-secondary));
  color: white;
}

.hero h1 {
  font-size: 3.5rem;
  margin-bottom: 0.5rem;
}

.subtitle {
  font-size: 1.5rem;
  margin-bottom: 1rem;
}

.cta-buttons {
  margin-top: 2rem;
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
}

/* Skills Grid */
.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
}

.skill-group h3 {
  color: var(--color-primary);
}

.skill-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 1rem;
}

.skill-tag {
  background-color: var(--color-accent);
  color: var(--color-text);
  padding: 0.4rem 0.8rem;
  border-radius: 20px;
  font-size: 0.9rem;
}

/* Experience */
.experience-item {
  margin-bottom: 2rem;
  padding-bottom: 2rem;
  border-bottom: 1px solid #eee;
}

.job-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;
  margin-bottom: 1rem;
}

.company {
  color: var(--color-secondary);
  margin: 0.5rem 0 0 0;
}

.duration {
  color: var(--color-secondary);
  font-size: 0.9rem;
}

.responsibilities {
  margin-top: 1rem;
  margin-left: 2rem;
}

.responsibilities li {
  margin-bottom: 0.5rem;
}

/* Projects Grid */
.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
}

.project-card {
  padding: 1.5rem;
  border: 1px solid #eee;
  border-radius: 0.5rem;
  transition: all 0.3s ease;
}

.project-card:hover {
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  transform: translateY(-5px);
}

.tech-stack {
  margin: 1rem 0;
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.tech-tag {
  background-color: #f0f0f0;
  padding: 0.3rem 0.6rem;
  border-radius: 0.3rem;
  font-size: 0.85rem;
}

.project-links {
  margin-top: 1rem;
}

.project-links a {
  margin-right: 1rem;
}

/* Contact Form */
.contact-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
}

.contact-form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.contact-form input,
.contact-form textarea {
  padding: 0.75rem;
  border: 1px solid #ddd;
  border-radius: 0.5rem;
  font-family: inherit;
}

.contact-form input:focus,
.contact-form textarea:focus {
  outline: none;
  border-color: var(--color-primary);
  box-shadow: 0 0 0 3px rgba(24, 144, 255, 0.1);
}

/* Footer */
.footer {
  background-color: var(--color-primary);
  color: white;
  text-align: center;
  padding: 2rem;
}

.social-links {
  margin-top: 1rem;
}

.social-links a {
  color: white;
  margin: 0 1rem;
  display: inline-block;
}

@media (max-width: 768px) {
  .hero h1 {
    font-size: 2rem;
  }

  .job-header {
    flex-direction: column;
  }

  .duration {
    margin-top: 0.5rem;
  }

  .contact-content {
    grid-template-columns: 1fr;
  }

  .projects-grid {
    grid-template-columns: 1fr;
  }

  .cta-buttons {
    flex-direction: column;
    align-items: center;
  }
}
`;
};

const generateIndexFile = () => `import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);`;

const generatePackageJson = () => `{
  "name": "portfolio",
  "private": true,
  "version": "1.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  },
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0"
  },
  "devDependencies": {
    "@vitejs/plugin-react": "^4.2.1",
    "vite": "^5.0.0"
  }
}`;

const generateViteConfig = () => `import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
  },
})`;
