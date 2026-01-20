/**
 * PDF Export Service
 * Generates PDF from portfolio data
 */

/**
 * Generate PDF content (HTML that can be converted to PDF)
 */
export const generatePDFContent = (portfolio) => {
  const { personal, about, skills, experience, projects, education, certifications } = portfolio;

  const html = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="UTF-8">
      <title>${personal.fullName} - Portfolio</title>
      <style>
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          line-height: 1.6;
          color: #333;
          background: white;
          padding: 40px;
        }

        h1 {
          font-size: 24px;
          margin-bottom: 5px;
          color: #000;
        }

        h2 {
          font-size: 16px;
          margin-top: 20px;
          margin-bottom: 10px;
          color: #0066cc;
          border-bottom: 2px solid #0066cc;
          padding-bottom: 5px;
        }

        h3 {
          font-size: 13px;
          margin-top: 10px;
          margin-bottom: 5px;
          color: #333;
        }

        .header {
          text-align: center;
          margin-bottom: 30px;
          border-bottom: 1px solid #ddd;
          padding-bottom: 20px;
        }

        .title {
          color: #0066cc;
          font-size: 14px;
          margin-bottom: 5px;
        }

        .contact {
          font-size: 11px;
          color: #666;
          margin-top: 10px;
        }

        .section {
          margin-bottom: 20px;
          page-break-inside: avoid;
        }

        .summary {
          font-size: 12px;
          line-height: 1.6;
          margin-bottom: 10px;
        }

        .skills-container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
          margin-bottom: 20px;
        }

        .skill-group h3 {
          margin-bottom: 8px;
          color: #0066cc;
        }

        .skill-tags {
          font-size: 11px;
        }

        .skill-tag {
          display: inline-block;
          background: #f0f0f0;
          padding: 3px 8px;
          margin: 3px 5px 3px 0;
          border-radius: 3px;
        }

        .job {
          margin-bottom: 15px;
          page-break-inside: avoid;
        }

        .job-title {
          font-size: 13px;
          font-weight: bold;
          color: #000;
        }

        .job-company {
          font-size: 12px;
          color: #0066cc;
          margin-bottom: 2px;
        }

        .job-duration {
          font-size: 11px;
          color: #666;
          margin-bottom: 5px;
        }

        .job-description {
          font-size: 11px;
          margin-left: 15px;
          margin-top: 5px;
        }

        .job-description ul {
          margin-left: 20px;
        }

        .job-description li {
          margin-bottom: 3px;
        }

        .project {
          margin-bottom: 12px;
          page-break-inside: avoid;
        }

        .project-name {
          font-size: 12px;
          font-weight: bold;
          color: #000;
          margin-bottom: 3px;
        }

        .project-tech {
          font-size: 10px;
          color: #666;
          margin-bottom: 3px;
        }

        .project-description {
          font-size: 11px;
          margin-bottom: 3px;
        }

        .education-item {
          margin-bottom: 12px;
          page-break-inside: avoid;
        }

        .degree {
          font-size: 12px;
          font-weight: bold;
          color: #000;
        }

        .institution {
          font-size: 11px;
          color: #0066cc;
        }

        .year {
          font-size: 10px;
          color: #666;
        }

        @page {
          size: A4;
          margin: 0.5in;
        }

        @media print {
          body {
            padding: 0;
          }
          .section {
            page-break-inside: avoid;
          }
        }
      </style>
    </head>
    <body>
      <!-- Header -->
      <div class="header">
        <h1>${personal.fullName}</h1>
        <p class="title">${personal.professionalTitle}</p>
        ${personal.location ? `<p class="contact">${personal.location}</p>` : ''}
        <p class="contact">
          ${personal.email}
          ${personal.phone ? ` | ${personal.phone}` : ''}
        </p>
      </div>

      <!-- About/Summary -->
      ${about?.summary ? `
        <div class="section">
          <h2>PROFESSIONAL SUMMARY</h2>
          <p class="summary">${about.summary}</p>
        </div>
      ` : ''}

      <!-- Skills -->
      ${(skills?.technical?.length || skills?.tools?.length || skills?.soft?.length) ? `
        <div class="section">
          <h2>SKILLS</h2>
          <div class="skills-container">
            ${skills.technical?.length ? `
              <div class="skill-group">
                <h3>Technical</h3>
                <div class="skill-tags">
                  ${skills.technical.map(skill => `<span class="skill-tag">${skill}</span>`).join('')}
                </div>
              </div>
            ` : ''}
            ${skills.tools?.length ? `
              <div class="skill-group">
                <h3>Tools & Technologies</h3>
                <div class="skill-tags">
                  ${skills.tools.map(tool => `<span class="skill-tag">${tool}</span>`).join('')}
                </div>
              </div>
            ` : ''}
            ${skills.soft?.length ? `
              <div class="skill-group">
                <h3>Soft Skills</h3>
                <div class="skill-tags">
                  ${skills.soft.map(skill => `<span class="skill-tag">${skill}</span>`).join('')}
                </div>
              </div>
            ` : ''}
          </div>
        </div>
      ` : ''}

      <!-- Experience -->
      ${experience?.length ? `
        <div class="section">
          <h2>PROFESSIONAL EXPERIENCE</h2>
          ${experience.map(job => `
            <div class="job">
              <div class="job-title">${job.jobTitle}</div>
              <div class="job-company">${job.company}</div>
              <div class="job-duration">${job.duration.start} - ${job.duration.current ? 'Present' : job.duration.end}</div>
              ${job.responsibilities?.length ? `
                <div class="job-description">
                  <ul>
                    ${job.responsibilities.map(resp => `<li>${resp}</li>`).join('')}
                  </ul>
                </div>
              ` : ''}
            </div>
          `).join('')}
        </div>
      ` : ''}

      <!-- Projects -->
      ${projects?.length ? `
        <div class="section">
          <h2>PROJECTS</h2>
          ${projects.map(project => `
            <div class="project">
              <div class="project-name">${project.name}</div>
              ${project.techStack?.length ? `
                <div class="project-tech">Tech: ${project.techStack.join(', ')}</div>
              ` : ''}
              <div class="project-description">${project.description}</div>
            </div>
          `).join('')}
        </div>
      ` : ''}

      <!-- Education -->
      ${education?.length ? `
        <div class="section">
          <h2>EDUCATION</h2>
          ${education.map(edu => `
            <div class="education-item">
              <div class="degree">${edu.degree}</div>
              <div class="institution">${edu.institution}</div>
              <div class="year">${edu.year}</div>
              ${edu.description ? `<div style="font-size: 11px; margin-top: 3px;">${edu.description}</div>` : ''}
            </div>
          `).join('')}
        </div>
      ` : ''}

      <!-- Certifications -->
      ${certifications?.length ? `
        <div class="section">
          <h2>CERTIFICATIONS</h2>
          ${certifications.map(cert => `
            <div class="education-item">
              <div class="degree">${cert.title}</div>
              <div class="institution">${cert.issuer}</div>
              <div class="year">${cert.date}</div>
            </div>
          `).join('')}
        </div>
      ` : ''}
    </body>
    </html>
  `;

  return html;
};

/**
 * Download PDF (requires html2pdf library)
 */
export const downloadPDFPortfolio = async (portfolio, filename = 'portfolio.pdf') => {
  try {
    // Load html2pdf library
    const script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.10.1/html2pdf.bundle.min.js';
    
    script.onload = () => {
      const element = document.createElement('div');
      element.innerHTML = generatePDFContent(portfolio);

      const opt = {
        margin: 10,
        filename: filename,
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { orientation: 'portrait', unit: 'mm', format: 'a4' }
      };

      window.html2pdf().set(opt).from(element).save();
    };

    document.head.appendChild(script);
  } catch (error) {
    console.error('Error generating PDF:', error);
    throw error;
  }
};

/**
 * Print portfolio (uses browser print dialog)
 */
export const printPortfolio = (portfolio) => {
  const printWindow = window.open('', '_blank');
  printWindow.document.write(generatePDFContent(portfolio));
  printWindow.document.close();

  setTimeout(() => {
    printWindow.print();
  }, 250);
};

/**
 * Generate PDF blob for download
 */
export const generatePDFBlob = async (portfolio) => {
  const pdfContent = generatePDFContent(portfolio);
  
  // Create blob from HTML
  const blob = new Blob([pdfContent], { type: 'text/html' });
  return blob;
};
