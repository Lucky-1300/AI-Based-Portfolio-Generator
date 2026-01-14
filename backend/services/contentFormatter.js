class ContentFormatter {
  formatAsHTML(portfolioData) {
    const { personalInfo, skills, experiences, projects } = portfolioData;

    return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${personalInfo?.fullName || 'Portfolio'}</title>
    <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; line-height: 1.6; color: #333; padding: 20px; max-width: 1200px; margin: 0 auto; background: #f5f5f5; }
        header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 60px 40px; text-center; border-radius: 10px; margin-bottom: 30px; }
        h1 { font-size: 3em; margin-bottom: 10px; }
        .subtitle { font-size: 1.5em; opacity: 0.9; margin-bottom: 20px; }
        .bio { max-width: 800px; margin: 0 auto; font-size: 1.1em; }
        section { background: white; padding: 40px; margin-bottom: 20px; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1); }
        h2 { color: #667eea; border-bottom: 3px solid #667eea; padding-bottom: 10px; margin-bottom: 30px; }
        .skills { display: flex; flex-wrap: wrap; gap: 10px; }
        .skill { background: #e3e8ff; color: #667eea; padding: 10px 20px; border-radius: 20px; font-weight: 600; }
        .experience, .project { margin-bottom: 30px; padding-bottom: 30px; border-bottom: 1px solid #eee; }
        .experience:last-child, .project:last-child { border-bottom: none; }
        h3 { color: #333; margin-bottom: 5px; }
        .company, .tech { color: #667eea; font-weight: 600; }
        .date { color: #777; font-size: 0.9em; }
        .contact { display: flex; justify-content: center; gap: 30px; flex-wrap: wrap; margin-top: 20px; }
        .contact a { color: white; text-decoration: none; opacity: 0.9; }
        .contact a:hover { opacity: 1; }
    </style>
</head>
<body>
    <header>
        <h1>${personalInfo?.fullName || 'Your Name'}</h1>
        <div class="subtitle">${personalInfo?.title || 'Your Title'}</div>
        ${personalInfo?.bio ? `<p class="bio">${personalInfo.bio}</p>` : ''}
        <div class="contact">
            ${personalInfo?.email ? `<a href="mailto:${personalInfo.email}">📧 ${personalInfo.email}</a>` : ''}
            ${personalInfo?.phone ? `<span>📞 ${personalInfo.phone}</span>` : ''}
            ${personalInfo?.location ? `<span>📍 ${personalInfo.location}</span>` : ''}
            ${personalInfo?.linkedin ? `<a href="${personalInfo.linkedin}" target="_blank">LinkedIn</a>` : ''}
            ${personalInfo?.github ? `<a href="${personalInfo.github}" target="_blank">GitHub</a>` : ''}
        </div>
    </header>

    ${skills && skills.length > 0 ? `
    <section>
        <h2>Skills</h2>
        <div class="skills">
            ${skills.map(skill => `<span class="skill">${skill.name}</span>`).join('')}
        </div>
    </section>` : ''}

    ${experiences && experiences.length > 0 ? `
    <section>
        <h2>Experience</h2>
        ${experiences.map(exp => `
        <div class="experience">
            <h3>${exp.position}</h3>
            <div class="company">${exp.company}</div>
            <div class="date">${exp.location || ''} • ${exp.startDate} - ${exp.current ? 'Present' : exp.endDate}</div>
            ${exp.description ? `<p style="margin-top: 10px;">${exp.description}</p>` : ''}
        </div>`).join('')}
    </section>` : ''}

    ${projects && projects.length > 0 ? `
    <section>
        <h2>Projects</h2>
        ${projects.map(proj => `
        <div class="project">
            <h3>${proj.name}</h3>
            <p>${proj.description}</p>
            ${proj.technologies && proj.technologies.length > 0 ? `
            <div style="margin-top: 10px;">
                <strong class="tech">Technologies:</strong> ${proj.technologies.join(', ')}
            </div>` : ''}
            ${proj.liveUrl || proj.githubUrl ? `
            <div style="margin-top: 10px;">
                ${proj.liveUrl ? `<a href="${proj.liveUrl}" target="_blank" style="color: #667eea; margin-right: 15px;">Live Demo →</a>` : ''}
                ${proj.githubUrl ? `<a href="${proj.githubUrl}" target="_blank" style="color: #667eea;">GitHub →</a>` : ''}
            </div>` : ''}
        </div>`).join('')}
    </section>` : ''}
</body>
</html>
    `.trim();
  }

  formatAsReact(portfolioData) {
    return `
import React from 'react';

const Portfolio = () => {
  const portfolioData = ${JSON.stringify(portfolioData, null, 2)};

  return (
    <div className="portfolio">
      <header className="header">
        <h1>{portfolioData.personalInfo?.fullName}</h1>
        <p className="title">{portfolioData.personalInfo?.title}</p>
        {portfolioData.personalInfo?.bio && <p className="bio">{portfolioData.personalInfo.bio}</p>}
      </header>

      {portfolioData.skills?.length > 0 && (
        <section className="skills">
          <h2>Skills</h2>
          <div className="skills-list">
            {portfolioData.skills.map((skill) => (
              <span key={skill.id} className="skill">{skill.name}</span>
            ))}
          </div>
        </section>
      )}

      {portfolioData.experiences?.length > 0 && (
        <section className="experience">
          <h2>Experience</h2>
          {portfolioData.experiences.map((exp) => (
            <div key={exp.id} className="experience-item">
              <h3>{exp.position}</h3>
              <p className="company">{exp.company}</p>
              <p className="date">
                {exp.location} • {exp.startDate} - {exp.current ? 'Present' : exp.endDate}
              </p>
              {exp.description && <p className="description">{exp.description}</p>}
            </div>
          ))}
        </section>
      )}

      {portfolioData.projects?.length > 0 && (
        <section className="projects">
          <h2>Projects</h2>
          {portfolioData.projects.map((proj) => (
            <div key={proj.id} className="project-item">
              <h3>{proj.name}</h3>
              <p>{proj.description}</p>
              {proj.technologies?.length > 0 && (
                <div className="tech">
                  {proj.technologies.map((tech, idx) => (
                    <span key={idx}>{tech}</span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </section>
      )}
    </div>
  );
};

export default Portfolio;
    `.trim();
  }
}

export const contentFormatter = new ContentFormatter();
