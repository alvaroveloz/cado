export const ComicApi = async (currentPage, name='') => {

  const PATH_URL = new URL(`https://rickandmortyapi.com/api/character`);

  PATH_URL.searchParams.set('page', currentPage);
  if (name) { 
    PATH_URL.searchParams.set('name', name);
  }

  try {
    const response = await fetch(PATH_URL.toString());
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

    console.log(info, resultsMapped)

    return {
        info,
        results:resultsMapped,
    }
  } catch (error) {
    console.log(error.message);
    throw new Error('API Rick and Morty error!!!!');
  }
};