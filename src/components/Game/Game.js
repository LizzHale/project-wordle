import React, { useState } from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessInput from '../GuessInput'
import GuessResults from '../GuessResults'
import { checkGuess } from '../../game-helpers'

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guess, setGuess] = useState("")
  const [guessList, setGuessList] = React.useState([]);

  const handleChange = (event) => {
    const inputValue = event.target.value;
    setGuess(inputValue.toUpperCase());

    if (!/^[A-Za-z0-9]{5}$/.test(inputValue)) {
      event.target.setCustomValidity("Must be exactly 5 characters.");
    } else {
      event.target.setCustomValidity("");
    }
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({ guess })
    result = checkGuess(guess, answer);
    console.log(result)

    const newGuess = {
      id: crypto.randomUUID(),
      name: guess,
      result: result
    };
    const nextGuessList = [...guessList, newGuess];
    setGuessList(nextGuessList)

    setGuess("")
  }

  return (
    <>
      <GuessResults guessList={guessList}/>
      <GuessInput guess={guess} handleChange={handleChange} handleSubmit={handleSubmit}/>
    </>
  )
}

export default Game;
