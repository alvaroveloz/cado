

export const ComicList = ( { characters } ) => {


  const hasResults = characters?.length > 0;


  const shortEpisode = (episodes = [] ) => {
    const arrEpisodes = episodes.slice(0, 4).map(episode => episode.split('/').pop() ).join(', ');
    return (arrEpisodes.length > 4 ) ? `${arrEpisodes}...` : arrEpisodes
  }

  
  return (
    <div className='page'>
      {hasResults &&
        characters.map((character) => (
          <div className='comics' key={character.Id}>
            <div className='comic-picture'>
              <img src={`${character.Image}`} alt={`${character.Name}`} />
            </div>
            <div className='comic-description'>
              <p>{character.Name}</p>
              <p>{character.Gender}</p>
              <p>{character.Species}</p>
              <p>{shortEpisode(character.Episode)}</p>
              {character.Status === 'unknown' ? null : (
                <button> {character.Status}</button>
              )}
            </div>
          </div>
        ))}
    </div>
  );
}


