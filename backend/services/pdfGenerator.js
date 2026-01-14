import puppeteer from 'puppeteer';
import { contentFormatter } from './contentFormatter.js';

class PDFGenerator {
  async generate(portfolioData) {
    try {
      const html = contentFormatter.formatAsHTML(portfolioData);

      const browser = await puppeteer.launch({
        headless: 'new',
        args: ['--no-sandbox', '--disable-setuid-sandbox'],
      });

      const page = await browser.newPage();
      await page.setContent(html, { waitUntil: 'networkidle0' });

      const pdfBuffer = await page.pdf({
        format: 'A4',
        printBackground: true,
        margin: {
          top: '20px',
          right: '20px',
          bottom: '20px',
          left: '20px',
        },
      });

      await browser.close();

      return pdfBuffer;
    } catch (error) {
      console.error('PDF generation error:', error);
      throw new Error('Failed to generate PDF');
    }
  }
}

export const pdfGenerator = new PDFGenerator();
