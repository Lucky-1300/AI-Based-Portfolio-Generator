/**
 * HTML Export Generator
 * Generates semantic HTML from portfolio data
 */

import { generateThemeCSS, getThemeConfig } from './themeService';

export const generateHTMLPortfolio = (portfolio) => {
  const theme = getThemeConfig(portfolio.theme.style, portfolio.theme.colorScheme);
  const themeCSS = generateThemeCSS(theme, portfolio.theme.fontStyle);

  const {
    personal,
    about,
    skills,
    experience,
    projects,
    education,
    certifications,
  } = portfolio;

  const skillsHTML = generateSkillsSection(skills);
  const experienceHTML = generateExperienceSection(experience);
  const projectsHTML = generateProjectsSection(projects);
  const educationHTML = generateEducationSection(education);
  const certificationsHTML = certifications.length > 0 ? generateCertificationsSection(certifications) : '';

  const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${personal.fullName} - Portfolio</title>
  <meta name="description" content="${about.summary.substring(0, 150)}...">
  <meta name="author" content="${personal.fullName}">
  
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    ${themeCSS}

    body {
      line-height: 1.6;
    }

    header {
      padding: 3rem 1rem;
      text-align: center;
      background: linear-gradient(135deg, var(--color-primary), var(--color-secondary));
      color: white;
    }

    h1 {
      font-size: 2.5rem;
      margin-bottom: 0.5rem;
    }

    h2 {
      font-size: 2rem;
      margin-top: 2rem;
      margin-bottom: 1rem;
      color: var(--color-primary);
      border-bottom: 2px solid var(--color-accent);
      padding-bottom: 0.5rem;
    }

    h3 {
      font-size: 1.5rem;
      color: var(--color-primary);
      margin-top: 1rem;
    }

    main {
      max-width: 900px;
      margin: 0 auto;
      padding: 2rem 1rem;
    }

    section {
      margin-bottom: 3rem;
    }

    .meta {
      font-size: 1rem;
      color: var(--color-secondary);
      margin-bottom: 1rem;
    }

    .about {
      font-size: 1.1rem;
      line-height: 1.8;
      margin-bottom: 1rem;
    }

    .skills-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 1rem;
      margin-bottom: 2rem;
    }

    .skill-group h4 {
      color: var(--color-primary);
      margin-bottom: 0.5rem;
    }

    .skill-tags {
      display: flex;
      flex-wrap: wrap;
      gap: 0.5rem;
    }

    .skill-tag {
      background: var(--color-accent);
      color: var(--color-text);
      padding: 0.25rem 0.75rem;
      border-radius: 20px;
      font-size: 0.9rem;
    }

    .experience-item,
    .project-item,
    .education-item,
    .cert-item {
      margin-bottom: 2rem;
      padding-bottom: 1rem;
      border-bottom: 1px solid #ddd;
    }

    .experience-item:last-child,
    .project-item:last-child,
    .education-item:last-child,
    .cert-item:last-child {
      border-bottom: none;
    }

    .job-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap;
    }

    .job-title {
      font-size: 1.3rem;
      font-weight: bold;
    }

    .company {
      color: var(--color-primary);
    }

    .duration {
      color: var(--color-secondary);
      font-size: 0.9rem;
    }

    .responsibilities {
      margin: 1rem 0;
      padding-left: 1.5rem;
    }

    .responsibilities li {
      margin-bottom: 0.5rem;
    }

    .project-name {
      font-size: 1.2rem;
      font-weight: bold;
      color: var(--color-primary);
    }

    .tech-stack {
      margin: 0.5rem 0;
      font-size: 0.9rem;
      color: var(--color-secondary);
    }

    .links {
      margin: 0.5rem 0;
    }

    .links a {
      color: var(--color-primary);
      text-decoration: none;
      margin-right: 1rem;
    }

    .links a:hover {
      text-decoration: underline;
    }

    footer {
      text-align: center;
      padding: 2rem 1rem;
      background: var(--color-primary);
      color: white;
      margin-top: 2rem;
    }

    .social-links {
      margin: 1rem 0;
    }

    .social-links a {
      display: inline-block;
      margin: 0 0.5rem;
      color: white;
      text-decoration: none;
    }

    @media (max-width: 600px) {
      h1 {
        font-size: 2rem;
      }

      h2 {
        font-size: 1.5rem;
      }

      main {
        padding: 1rem;
      }

      .job-header {
        flex-direction: column;
        align-items: flex-start;
      }

      .skills-grid {
        grid-template-columns: 1fr;
      }
    }

    @media print {
      header {
        color: white;
      }

      section {
        page-break-inside: avoid;
      }
    }
  </style>
</head>
<body>
  <header>
    <h1>${personal.fullName}</h1>
    <p class="meta">${personal.professionalTitle}</p>
    ${personal.location ? `<p class="meta">${personal.location}</p>` : ''}
    <p class="meta">${personal.email}</p>
  </header>

  <main>
    <!-- About Section -->
    <section id="about">
      <h2>About</h2>
      <p class="about">${about.summary}</p>
    </section>

    <!-- Skills Section -->
    ${skillsHTML}

    <!-- Experience Section -->
    ${experienceHTML}

    <!-- Projects Section -->
    ${projectsHTML}

    <!-- Education Section -->
    ${educationHTML}

    <!-- Certifications Section -->
    ${certificationsHTML}
  </main>

  <footer>
    <p>&copy; ${new Date().getFullYear()} ${personal.fullName}. All rights reserved.</p>
    <div class="social-links">
      ${personal.social?.github ? `<a href="${personal.social.github}" target="_blank">GitHub</a>` : ''}
      ${personal.social?.linkedin ? `<a href="${personal.social.linkedin}" target="_blank">LinkedIn</a>` : ''}
      ${personal.social?.twitter ? `<a href="${personal.social.twitter}" target="_blank">Twitter</a>` : ''}
      ${personal.social?.portfolio ? `<a href="${personal.social.portfolio}" target="_blank">Portfolio</a>` : ''}
    </div>
  </footer>
</body>
</html>`;

  return html;
};

// Helper functions to generate sections

const generateSkillsSection = (skills) => {
  if (!skills.technical.length && !skills.tools.length && !skills.soft.length) {
    return '';
  }

  let skillsHTML = '<section id="skills"><h2>Skills</h2><div class="skills-grid">';

  if (skills.technical.length > 0) {
    skillsHTML += `
      <div class="skill-group">
        <h4>Technical</h4>
        <div class="skill-tags">
          ${skills.technical.map(skill => `<span class="skill-tag">${skill}</span>`).join('')}
        </div>
      </div>
    `;
  }

  if (skills.tools.length > 0) {
    skillsHTML += `
      <div class="skill-group">
        <h4>Tools</h4>
        <div class="skill-tags">
          ${skills.tools.map(tool => `<span class="skill-tag">${tool}</span>`).join('')}
        </div>
      </div>
    `;
  }

  if (skills.soft.length > 0) {
    skillsHTML += `
      <div class="skill-group">
        <h4>Soft Skills</h4>
        <div class="skill-tags">
          ${skills.soft.map(skill => `<span class="skill-tag">${skill}</span>`).join('')}
        </div>
      </div>
    `;
  }

  skillsHTML += '</div></section>';
  return skillsHTML;
};

const generateExperienceSection = (experience) => {
  if (!experience.length) return '';

  let html = '<section id="experience"><h2>Experience</h2>';

  experience.forEach(job => {
    html += `
      <div class="experience-item">
        <div class="job-header">
          <div>
            <h3 class="job-title">${job.jobTitle}</h3>
            <p class="company">${job.company}</p>
          </div>
          <p class="duration">${job.duration.start} - ${job.duration.current ? 'Present' : job.duration.end}</p>
        </div>
        ${job.responsibilities.length > 0 ? `
          <ul class="responsibilities">
            ${job.responsibilities.map(resp => `<li>${resp}</li>`).join('')}
          </ul>
        ` : ''}
      </div>
    `;
  });

  html += '</section>';
  return html;
};

const generateProjectsSection = (projects) => {
  if (!projects.length) return '';

  let html = '<section id="projects"><h2>Projects</h2>';

  projects.forEach(project => {
    html += `
      <div class="project-item">
        <p class="project-name">${project.name}</p>
        <p>${project.description}</p>
        ${project.techStack.length > 0 ? `
          <p class="tech-stack"><strong>Tech:</strong> ${project.techStack.join(', ')}</p>
        ` : ''}
        <div class="links">
          ${project.githubUrl ? `<a href="${project.githubUrl}" target="_blank">GitHub</a>` : ''}
          ${project.liveUrl ? `<a href="${project.liveUrl}" target="_blank">Live Demo</a>` : ''}
        </div>
      </div>
    `;
  });

  html += '</section>';
  return html;
};

const generateEducationSection = (education) => {
  if (!education.length) return '';

  let html = '<section id="education"><h2>Education</h2>';

  education.forEach(edu => {
    html += `
      <div class="education-item">
        <h3>${edu.degree}</h3>
        <p class="company">${edu.institution}</p>
        <p class="duration">${edu.year}</p>
        ${edu.description ? `<p>${edu.description}</p>` : ''}
      </div>
    `;
  });

  html += '</section>';
  return html;
};

const generateCertificationsSection = (certifications) => {
  if (!certifications.length) return '';

  let html = '<section id="certifications"><h2>Certifications</h2>';

  certifications.forEach(cert => {
    html += `
      <div class="cert-item">
        <h3>${cert.title}</h3>
        <p class="company">${cert.issuer}</p>
        <p class="duration">${cert.date}</p>
        ${cert.credentialUrl ? `<p><a href="${cert.credentialUrl}" target="_blank">View Credential</a></p>` : ''}
      </div>
    `;
  });

  html += '</section>';
  return html;
};
