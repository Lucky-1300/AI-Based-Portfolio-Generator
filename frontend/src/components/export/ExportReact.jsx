import { exportService } from '../../services/exportService';

export default function ExportReact({ data }) {
  const handleExport = async () => {
    try {
      await exportService.exportAsReact(data);
    } catch (error) {
      console.error('React export failed:', error);
      alert('Failed to export as React component');
    }
  };

  return (
    <button
      onClick={handleExport}
      className="w-full text-left px-4 py-2 hover:bg-secondary-50 transition-colors"
    >
      Export as React
    </button>
  );
}
