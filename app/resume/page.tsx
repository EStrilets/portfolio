import PDFViewer from "@/components/PDFViewer";

const PDFPage: React.FC = () => {
  const pdfUrl = "/yevhenii_strilets_resume2023.pdf"; // Update this with the actual path to your PDF file

  return (
    <div className="w-full flex flex-col items-center justify-center gap-8 md:h-[90rem] sm:h-[40rem]">
      <div
        className="
        flex flex-col 
        w-full max-w-4xl
        items-start justify-center 
        font-bold text-3xl
        mt-[12rem]
        text-violet-50
        scroll-mt-40
        "
      >
        <div>
          <h1>Resume</h1>
        </div>
      </div>
      <div className="flex flex-row z-10 w-full max-w-4xl items-start justify-between m-2 flex-1 mb-2">
        <iframe
          src="/yevhenii_strilets_resume2023.pdf"
          height="100%"
          width="100%"
        />
      </div>
    </div>
  );
};

export default PDFPage;
