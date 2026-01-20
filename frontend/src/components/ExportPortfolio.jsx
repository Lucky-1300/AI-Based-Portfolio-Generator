import { useState } from 'react';
import { usePortfolio } from '../context/PortfolioContext';
import Button from './common/Button';
import Modal from './common/Modal';
import Alert from './common/Alert';
import Loader from './common/Loader';
import {
  exportPortfolio,
  validatePortfolioForExport,
  getExportFormatInfo,
  trackExport,
} from '../services/exportIntegrationService';

function ExportPortfolio() {
  const { portfolioData } = usePortfolio();
  const [showExportModal, setShowExportModal] = useState(false);
  const [selectedFormat, setSelectedFormat] = useState('html');
  const [isExporting, setIsExporting] = useState(false);
  const [exportStatus, setExportStatus] = useState(null);
  const [validation, setValidation] = useState(null);

  const formatInfo = getExportFormatInfo();

  const handleExportClick = () => {
    const validationResult = validatePortfolioForExport(portfolioData);
    setValidation(validationResult);
    setShowExportModal(true);
  };

  const handleExport = async () => {
    setIsExporting(true);
    setExportStatus(null);

    try {
      const filename = `portfolio-${Date.now()}`;
      const result = await exportPortfolio(portfolioData, selectedFormat, filename);
      trackExport(selectedFormat);

      setExportStatus({
        type: 'success',
        message: result.message,
        details: result,
      });

      setTimeout(() => {
        setShowExportModal(false);
        setExportStatus(null);
      }, 2000);
    } catch (error) {
      setExportStatus({
        type: 'error',
        message: error.message,
      });
    } finally {
      setIsExporting(false);
    }
  };

  const formatOptions = Object.entries(formatInfo).map(([key, info]) => ({
    id: key,
    ...info,
  }));

  return (
    <>
      <Button
        variant="primary"
        onClick={handleExportClick}
        className="flex items-center gap-2"
      >
        📥 Export Portfolio
      </Button>

      <Modal isOpen={showExportModal} onClose={() => setShowExportModal(false)}>
        <div className="space-y-6">
          <div>
            <h3 className="text-2xl font-bold mb-2">Export Your Portfolio</h3>
            <p className="text-secondary-600">
              Choose your preferred format and download
            </p>
          </div>

          {/* Validation Status */}
          {validation && (
            <div className="space-y-3">
              {validation.errors.length > 0 && (
                <Alert variant="error">
                  <div className="font-semibold mb-1">⚠️ Required Fields Missing:</div>
                  <ul className="list-disc list-inside">
                    {validation.errors.map((error, idx) => (
                      <li key={idx} className="text-sm">{error}</li>
                    ))}
                  </ul>
                </Alert>
              )}

              {validation.warnings.length > 0 && (
                <Alert variant="warning">
                  <div className="font-semibold mb-1">💡 Suggestions:</div>
                  <ul className="list-disc list-inside">
                    {validation.warnings.map((warning, idx) => (
                      <li key={idx} className="text-sm">{warning}</li>
                    ))}
                  </ul>
                </Alert>
              )}

              <div className="p-3 bg-blue-50 border border-blue-200 rounded-lg">
                <div className="text-sm">
                  <span className="font-semibold">Portfolio Completion:</span>
                  <div className="mt-2 bg-blue-200 rounded-full h-2 overflow-hidden">
                    <div
                      className="bg-blue-600 h-full transition-all"
                      style={{ width: `${validation.completionPercentage}%` }}
                    />
                  </div>
                  <p className="text-xs mt-1 text-blue-700">
                    {validation.completionPercentage}% complete
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Export Status */}
          {exportStatus && (
            <Alert variant={exportStatus.type}>
              {exportStatus.message}
            </Alert>
          )}

          {/* Format Selection */}
          {!validation?.errors.length && !isExporting && (
            <div className="space-y-4">
              <label className="block text-sm font-semibold">Select Export Format</label>
              <div className="grid grid-cols-1 gap-3">
                {formatOptions.map(format => (
                  <button
                    key={format.id}
                    onClick={() => setSelectedFormat(format.id)}
                    className={`p-4 rounded-lg border-2 text-left transition ${
                      selectedFormat === format.id
                        ? 'border-primary-500 bg-primary-50'
                        : 'border-secondary-200 hover:border-secondary-400'
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <span className="text-2xl">{format.icon}</span>
                      <div className="flex-1">
                        <div className="font-semibold">{format.name}</div>
                        <p className="text-sm text-secondary-600">{format.description}</p>
                        <div className="mt-2 flex flex-wrap gap-1">
                          {format.advantages.map((adv, idx) => (
                            <span
                              key={idx}
                              className="text-xs bg-secondary-100 text-secondary-700 px-2 py-1 rounded"
                            >
                              {adv}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Export Loading State */}
          {isExporting && (
            <div className="flex flex-col items-center gap-4 py-8">
              <Loader />
              <p className="text-secondary-600">Generating your {selectedFormat.toUpperCase()} file...</p>
            </div>
          )}

          {/* Action Buttons */}
          {!isExporting && (
            <div className="flex gap-3 pt-4 border-t">
              <Button
                variant="secondary"
                onClick={() => setShowExportModal(false)}
                disabled={isExporting}
              >
                Cancel
              </Button>
              <Button
                variant="primary"
                onClick={handleExport}
                disabled={isExporting || (validation?.errors.length > 0)}
              >
                {isExporting ? 'Exporting...' : 'Export Now'}
              </Button>
            </div>
          )}
        </div>
      </Modal>
    </>
  );
}

export default ExportPortfolio;
