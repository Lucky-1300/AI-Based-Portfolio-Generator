import { exportService } from '../../services/exportService';

export default function ExportHTML({ data }) {
  const handleExport = async () => {
    try {
      await exportService.exportAsHTML(data);
    } catch (error) {
      console.error('HTML export failed:', error);
      alert('Failed to export as HTML');
    }
  };

  return (
    <button
      onClick={handleExport}
      className="w-full text-left px-4 py-2 hover:bg-secondary-50 transition-colors"
    >
      Export as HTML
    </button>
  );
}
