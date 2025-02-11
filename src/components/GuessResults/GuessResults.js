import React from 'react';
import { range } from '../../utils';

function GuessResults({ guessList }) {
  return (
    <div className="guess-results">
      {range(0,6).map((y) => (
        <p className="guess">
          {range(0,5).map((x) => (
            <span className="cell">{guessList[y] && guessList[y].result[x] && guessList[y].result[x].letter}</span>
          ))}
        </p>
      ))}
    </div>
  )
}

export default GuessResults;
