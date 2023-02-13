import { useEffect, useState } from 'react';
import { ComicList } from './components/ComicList';
import data from './mocks/results.json'
import { ComicApi } from './services/ComicApi';

function App() {
  
  // const { info, results } = data;
  const [results, setResults] = useState([]);

  const getData = async() => {
    const data = await ComicApi();
    setResults(data);
  }

  useEffect(() => {
   getData();     
  }, [])
  



  return (
    <div className='container'>
     <ComicList  characters={results} />
    </div>
  );
}

export default App
