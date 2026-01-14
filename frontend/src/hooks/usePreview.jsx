import { useState, useEffect } from 'react';

export function usePreview(data) {
  const [previewHtml, setPreviewHtml] = useState('');

  useEffect(() => {
    // Generate preview HTML from data
    const html = generatePreviewHTML(data);
    setPreviewHtml(html);
  }, [data]);

  const generatePreviewHTML = (portfolioData) => {
    // Simple HTML generation - can be enhanced
    return `
      <div>
        <h1>${portfolioData.personalInfo?.fullName || 'Your Name'}</h1>
        <p>${portfolioData.personalInfo?.title || 'Your Title'}</p>
      </div>
    `;
  };

  return { previewHtml };
}
