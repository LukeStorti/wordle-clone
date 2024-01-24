import React, { useContext } from "react";
import { AppContext } from "../App";

const GameOver = ({ handleRestart }) => {
  const { gameOver, correctWord, currAttempt } = useContext(AppContext);

  return (
    <div className="gameOver">
      <h3>{gameOver.guessedWord ? "You correctly guessed" : "You lost"}</h3>
      <h1>Correct Word: {correctWord}</h1>
      {gameOver.guessedWord && <h3>You guessed in {currAttempt.attempt} attempts</h3>}
      {/* <button>Play Again</button> */}
    </div>
  );
};

export default GameOver;
