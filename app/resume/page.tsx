import PDFViewer from "@/components/PDFViewer";

const PDFPage: React.FC = () => {
  const pdfUrl = "/yevhenii_strilets_resume2023.pdf"; // Update this with the actual path to your PDF file

  return (
    <div className="w-full h-[90rem] flex flex-col items-center justify-center gap-8">
      {/* <h1>PDF Viewer Example</h1>
      <PDFViewer pdfUrl={pdfUrl} /> */}
      <div className="flex flex-row z-10 w-full max-w-4xl items-start justify-between m-2 flex-1 mb-2 mt-[12rem]">
        <iframe src="/yevhenii_strilets_resume2023.pdf"  height="100%" width="100%" />
      </div>
    </div>
  );
};

export default PDFPage;
