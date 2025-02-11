import React from 'react';
import { range } from '../../utils';

function GuessResults({ guessList }) {
  console.log(guessList)

  return (
    <div className="guess-results">
      {range(0,6).map((y) => (
        <p class="guess">
          {range(0,5).map((x) => (
            <span class="cell"></span>
          ))}
        </p>
      ))}
    </div>
  )
}

export default GuessResults;
