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

  const handleChange = (e) => {
    const inputValue = e.target.value;
    setGuess(inputValue.toUpperCase());

    if (!/^[A-Za-z0-9]{5}$/.test(inputValue)) {
      e.target.setCustomValidity("Must be exactly 5 characters.");
    } else {
      e.target.setCustomValidity("");
    }
  };

  return (
    <form
      className="guess-input-wrapper"
      onSubmit={(event) => {
        event.preventDefault();
        result = checkGuess(guess, answer);
        console.log(result)
      }}
    >
      <label htmlFor="guess-input">Enter guess:</label>
      <input id="guess-input" type="text" value={guess} maxLength="5" pattern="^[A-Za-z0-9]{5}$" required onChange={handleChange}/>
    </form>
  )
}

export default Game;
