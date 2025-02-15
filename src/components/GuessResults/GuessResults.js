import React from 'react';
import { range } from '../../utils';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';

function GuessResults({ guessList }) {
  return (
    <div className="guess-results">
      {range(0,NUM_OF_GUESSES_ALLOWED).map((y) => (
        <p key={guessList[y] ? guessList[y].id : `empty-guess-row${y}`} className="guess">
          {range(0,5).map((x) => (
            <span key={`empty-guess-column${x}`} className="cell">{guessList[y] && guessList[y].result[x] && guessList[y].result[x].letter}</span>
          ))}
        </p>
      ))}
    </div>
  )
}

export default GuessResults;
