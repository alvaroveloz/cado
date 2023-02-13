export const ComicApi = async (currentPage) => {
  const URL = `https://rickandmortyapi.com/api/character/?page=${currentPage}`;
  try {
    const response = await fetch(URL);
    const json = await response.json();
    const { info, results } = json;

    const resultsMapped =  results.map((res) => ({
      Id: res.id,
      Name: res.name,
      Status: res.status,
      Species: res.species,
      Gender: res.gender,
      Image: res.image,
      Episode: res.episode,
    }));

    return {
        info,
        results:resultsMapped,
    }
  } catch (error) {
    console.log(error.message);
    throw new Error('API Rick and Morty error!!!!');
  }
};