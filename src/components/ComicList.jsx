

export const ComicList = ( { characters } ) => {


  const hasResults = characters?.length > 0;

  
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
              <p>{character.Episode}</p>
              {character.Status === 'unknown' ? null :( <button> { character.Status}</button>) }
            </div>
          </div>
        ))}
    </div>
  );
}
