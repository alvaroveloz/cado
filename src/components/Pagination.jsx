

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
      <button onClick={onClickPrevious} disabled={currentPage === 1}>
        Previous
      </button>
      <p>Page x of y</p>
      <button onClick={onClickNext} disabled={ currentPage === pages}>
        Next
      </button>
    </div>
  );
};
