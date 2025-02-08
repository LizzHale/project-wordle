import React, { useState } from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import { checkGuess } from '../../game-helpers';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guess, setGuess] = useState("")
  console.info({guess})

  return (
    <form
      className="guess-input-wrapper"
      onSubmit={(event) => {
        event.preventDefault();
        result = checkGuess(guess, answer);
        console.log(result)
      }}
    >
      <label for="guess-input">Enter guess:</label>
      <input id="guess-input" type="text" value={guess} onChange={(event) => {setGuess(event.target.value)}}/>
    </form>
  )
}

export default Game;
