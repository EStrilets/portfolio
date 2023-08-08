const Footer = () => {
  return (
    <footer className="bg-transperant mt-28 bg-[#141B2D] border-t-[0.5px] border-[#1E2A45]">
      <div className="mx-auto w-full max-w-4xl p-4 py-6 lg:py-8 text-white">
        <div className="md:flex md:justify-between">
          <div className="grid grid-cols-2 space-x-10 sm:gap-6 sm:grid-cols-3">
            <div>
              <ul className="text-violet-50 dark:text-gray-400 font-medium">
                <li className="mb-4">Something</li>
                <li className="mb-4">Something</li>
                <li className="mb-4">Something</li>
              </ul>
            </div>
            <div>
              <ul className="text-violet-50 dark:text-gray-400 font-medium">
                <li className="mb-4">Something</li>
                <li className="mb-4">Something</li>
                <li className="mb-4">Something</li>
              </ul>
            </div>
          </div>
          <div className="mb-6 md:mb-0">In progress...</div>
        </div>
        <div className="sm:flex sm:items-center sm:justify-between text-violet-50 mt-5">
        © 2023 Yevhenii Strilets —— Vancouver, Canada
        </div>
      </div>
    </footer>
  );
};

export default Footer;
