const Pagination = ({ page, lastPage, setPage }) => {
  const scrollTop = () => {
    scrollTo({
      behavior: "smooth",
      top: 0,
    });
  };

  const handleNextPage = () => {
    setPage((prevState) => prevState + 1);
    scrollTop();
  };

  const handlePrevPage = () => {
    setPage((prevState) => prevState - 1);
    scrollTop();
  };

  return (
    <div className="flex flex-col items-center justify-center gap-4 px-2 py-4 text-2xl text-anime-primary">
      <p>
        Page {page} of {lastPage} Page
      </p>
      <div className="inline-flex mt-1 xs:mt-0">
        {page <= 1 ? null : (
          <>
            <button onClick={handlePrevPage} className="flex items-center justify-center h-8 px-3 transition-all border rounded-lg lg:h-10 lg:px-4 hover:text-anime-accent">
              <svg class="w-3.5 h-3.5 me-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 5H1m0 0 4 4M1 5l4-4" />
              </svg>
              Prev
            </button>
          </>
        )}
        {page >= lastPage ? null : (
          <button onClick={handleNextPage} className="flex items-center justify-center h-8 px-3 transition-all border rounded-lg lg:h-10 lg:px-4 hover:text-anime-accent">
            Next
            <svg class="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
            </svg>
          </button>
        )}
      </div>
    </div>
  );
};

export default Pagination;
