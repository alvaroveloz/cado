

export const ComicList = ( { characters } ) => {


  const hasResults = characters?.length > 0;


  const shortEpisode = (episodes = [] ) => {
    const arrEpisodes = episodes.slice(0, 4).map(episode => episode.split('/').pop() ).join(', ');
    return (arrEpisodes.length > 4 ) ? `${arrEpisodes}...` : arrEpisodes
  }

  const isActive = (status) => {
    return status === 'Alive' ? '#deecdc' : '#e06f64';
  }
  
  return (
    <div className='max-w-7xl grid sm:grid-cols-2 md:grid-cols-3 gap-8 lg:gap-8'>
      {hasResults &&
        characters.map((character) => (
          <div
            className='grid grid-cols-2 bg-white border-2 border-gray-300 rounded-xl'
            key={character.Id}
          >
            <div>
              <img
                className=' border-gray-300 rounded-xl inset-0 h-full w-full object-cover object-center opacity-75 hover:opacity-100'
                src={`${character.Image}`}
                alt={`${character.Name}`}
                width={150}
              />
            </div>
            <div className='m-4 grid content-center '>
              <div className='text-lg font-medium'>
                <strong>{character.Name}</strong>
              </div>
              <div className='text-lg'>Gender: {character.Gender}</div>
              <div className='text-xs'>Species: {character.Species}</div>
              <div className='text-xs mb-2'>
                Episodes: {shortEpisode(character.Episode)}
              </div>
              {character.Status === 'unknown' ? null : (
                <button
                  className='status w-3/4 py-1 rounded'
                  style={{ backgroundColor: isActive(character.Status) }}
                >
                  {' '}
                  {character.Status}
                </button>
              )}
            </div>
          </div>
        ))}
    </div>
  );
}


