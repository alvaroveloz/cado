

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
    <div className='page'>
      {hasResults &&
        characters.map((character) => (
          <div className='comics' key={character.Id}>
            <div className='comic-picture'>
              <img
                src={`${character.Image}`}
                alt={`${character.Name}`}
                width={150}
              />
            </div>
            <div className='comic-description'>
              <div>
                <strong>{character.Name}</strong>
              </div>
              <div>Gender: {character.Gender}</div>
              <div>Species: {character.Species}</div>
              <div>Episodes: {shortEpisode(character.Episode)}</div>
              {character.Status === 'unknown' ? null : (
                <button
                  className='status'
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


