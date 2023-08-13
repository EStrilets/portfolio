"use client"
import { useState } from 'react';

interface PDFViewerProps {
  pdfUrl: string;
}

const PDFViewer: React.FC<PDFViewerProps> = ({ pdfUrl }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openPDF = () => {
    setIsOpen(true);
  };

  const closePDF = () => {
    setIsOpen(false);
  };

  if (isOpen) {
    return (
      <div className="pdf-modal">
        <div className="pdf-content">
          <embed src={pdfUrl} type="application/pdf" width="100%" height="500px" />
          <button onClick={closePDF}>Close PDF</button>
        </div>
      </div>
    );
  }

  return (
    <button onClick={openPDF}>Open PDF</button>
  );
};

export default PDFViewer;