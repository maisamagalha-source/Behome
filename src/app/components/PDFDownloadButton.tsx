import { FileText } from 'lucide-react';
import pdfFile from '../../imports/Balada_Er_tica_-_Apresenta__o_Comercial.pptx.pdf';

export function PDFDownloadButton() {
  return (
    <a
      href={pdfFile}
      download="Balada-Erotica-Apresentacao-Comercial.pdf"
      className="fixed bottom-6 right-6 sm:bottom-8 sm:right-8 z-50 group px-4 py-3 sm:px-6 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 rounded-full shadow-2xl shadow-red-600/50 hover:shadow-red-600/80 transition-all duration-300 hover:scale-105 flex items-center gap-2 sm:gap-3"
    >
      <FileText className="w-5 h-5" />
      <span className="hidden sm:inline">Baixar PDF</span>

      {/* Tooltip for desktop */}
      <div className="hidden sm:block absolute -top-12 left-1/2 -translate-x-1/2 bg-neutral-900 border border-red-600/50 rounded-lg px-3 py-2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap text-sm">
        Baixar apresentação em PDF
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 rotate-45 w-2 h-2 bg-neutral-900 border-r border-b border-red-600/50" />
      </div>
    </a>
  );
}
