import React from 'react';

function GuessInput({ guess, handleChange, handleSubmit }) {
  return (
      <form
        className="guess-input-wrapper"
        onSubmit={handleSubmit}
      >
        <label htmlFor="guess-input">Enter guess:</label>
        <input id="guess-input" type="text" value={guess} maxLength="5" pattern="^[A-Za-z0-9]{5}$" required onChange={handleChange}/>
      </form>
    )
}

export default GuessInput;
