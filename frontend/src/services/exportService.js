import apiClient from './apiClient';

export const exportService = {
  async exportAsPDF(data) {
    try {
      const response = await apiClient.post(
        '/export/pdf',
        { portfolioData: data },
        { responseType: 'blob' }
      );

      const blob = new Blob([response.data], { type: 'application/pdf' });
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = `portfolio-${Date.now()}.pdf`;
      link.click();
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error('PDF export failed:', error);
      throw new Error('Failed to export as PDF');
    }
  },

  async exportAsHTML(data) {
    try {
      const response = await apiClient.post('/export/html', {
        portfolioData: data,
      });

      const htmlContent = response.data.html;
      const blob = new Blob([htmlContent], { type: 'text/html' });
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = `portfolio-${Date.now()}.html`;
      link.click();
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error('HTML export failed:', error);
      throw new Error('Failed to export as HTML');
    }
  },

  async exportAsReact(data) {
    try {
      const response = await apiClient.post('/export/react', {
        portfolioData: data,
      });

      const reactCode = response.data.code;
      const blob = new Blob([reactCode], { type: 'text/plain' });
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = `Portfolio-${Date.now()}.jsx`;
      link.click();
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error('React export failed:', error);
      throw new Error('Failed to export as React');
    }
  },
};
