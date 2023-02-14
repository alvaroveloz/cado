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
  const [name, setName] = useState('');

  const getData = async () => {
    const { results, info } = await ComicApi(currentPage, name);    
    const { pages } = info;
    setResults(results);
    setPages(pages);
  };

  const handleSearch = (name) => {
    setName(name);
    setCurrentPage(1);
  }

  useEffect(() => {
    getData();
  }, [currentPage]);
  

  return (
    <div className='container'>
      <SearchForm onSearch={handleSearch} />
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
