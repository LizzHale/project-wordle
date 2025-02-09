import React from 'react';

function GuessResults({ guessList }) {
  return (
    <div className="guess-results">
      <ol style={{listStyleType: 'none'}}>
        {guessList.map(({ id, name }) => (
          <li key={id}>{name}</li>
        ))}
      </ol>
    </div>
  )
}

export default GuessResults;
