import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Container from '../components/common/Container';
import Button from '../components/common/Button';
import LivePreview from '../components/preview/LivePreview';
import ThemeSwitcher from '../components/preview/ThemeSwitcher';
import ExportPDF from '../components/export/ExportPDF';
import ExportHTML from '../components/export/ExportHTML';
import ExportReact from '../components/export/ExportReact';
import { usePortfolio } from '../context/PortfolioContext';

function Preview() {
  const { id } = useParams();
  const { portfolioData } = usePortfolio();
  const [showExportMenu, setShowExportMenu] = useState(false);

  return (
    <div className="min-h-screen bg-secondary-50">
      <header className="bg-white border-b border-secondary-200 shadow-sm sticky top-0 z-10">
        <Container>
          <div className="py-4 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link to="/dashboard">
                <Button variant="outline" size="small">
                  <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                  Back
                </Button>
              </Link>
              <h1 className="text-xl font-bold">Portfolio Preview</h1>
            </div>

            <div className="flex items-center gap-4">
              <ThemeSwitcher />
              
              <div className="relative">
                <Button
                  variant="primary"
                  onClick={() => setShowExportMenu(!showExportMenu)}
                >
                  Export
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </Button>

                {showExportMenu && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-secondary-200 py-2 z-20">
                    <ExportPDF data={portfolioData} />
                    <ExportHTML data={portfolioData} />
                    <ExportReact data={portfolioData} />
                  </div>
                )}
              </div>

              <Link to={`/builder/${id || ''}`}>
                <Button variant="outline">Edit</Button>
              </Link>
            </div>
          </div>
        </Container>
      </header>

      <main className="py-8">
        <Container>
          <LivePreview data={portfolioData} fullWidth />
        </Container>
      </main>
    </div>
  );
}

export default Preview;
