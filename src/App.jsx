import { useEffect, useState } from 'react';
import { ComicList } from './components/ComicList';
import { Pagination } from './components/Pagination';
import { SearchForm } from './components/SearchForm';
import data from './mocks/results.json'
import { ComicApi } from './services/ComicApi';

function App() {
  
  // const { info, results } = data;
  const [results, setResults] = useState([]);
  const [pages, setPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  const getData = async (currentPage) => {
    const { results, info} = await ComicApi(currentPage);    
    const { pages } = info;
    setResults(results);
    setPages(pages);
  };

  useEffect(() => {
    getData(currentPage);
  }, [currentPage]);
  

  return (
    <div className='container'>
      <SearchForm />
      <ComicList characters={results} />
      <Pagination
        currentPage={currentPage}
        updatePage={(page) => setCurrentPage(page)}
        pages={pages}
      />
    </div>
  );
}

export default App
