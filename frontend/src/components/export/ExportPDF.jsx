import Button from '../common/Button';
import { exportService } from '../../services/exportService';

export default function ExportPDF({ data }) {
  const handleExport = async () => {
    try {
      await exportService.exportAsPDF(data);
    } catch (error) {
      console.error('PDF export failed:', error);
      alert('Failed to export as PDF');
    }
  };

  return (
    <button
      onClick={handleExport}
      className="w-full text-left px-4 py-2 hover:bg-secondary-50 transition-colors"
    >
      Export as PDF
    </button>
  );
}
