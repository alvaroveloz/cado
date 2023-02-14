

export const Pagination = ({ currentPage, updatePage, pages }) => {
  const onClickPrevious = () => {
    console.log('Previous');
    if (currentPage > 1) {
        updatePage(currentPage - 1);        
    }
  };

  const onClickNext = () => {
    // Todo: control maxPage
    if (currentPage < pages ) {
        updatePage(currentPage + 1);        
    }
  };

  return (
    <div className='pagination'>
      <button
        className='icon-pagination'
        onClick={onClickPrevious}
        disabled={currentPage === 1}
      >
        <i className='fa-solid fa-caret-left'></i>
      </button>
      <p className='text-pagination'>
        Page {currentPage} of {pages}
      </p>
      <button
        className='icon-pagination'
        onClick={onClickNext}
        disabled={currentPage === pages}
      >
        <i className='fa-solid fa-caret-right'></i>
      </button>
    </div>
  );
};
