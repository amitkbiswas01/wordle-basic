import React from "react";
import Guesses from "./components/Guesses";
import GuessInput from "./components/GuessInput";
import Header from "./components/Header";
import Modal from "./components/Modal";
import { TModal, TGuessResult, TGameStatus } from "./types";
import { WORDS, NUM_OF_TRIES, GAME_LOST, GAME_WON } from "./utils/data";
import { checkGuess } from "./utils/result-checker";

const ANSWER = WORDS[Math.floor(Math.random() * WORDS.length)];
console.log(ANSWER);

function App() {
  const [modal, setModal] = React.useState<TModal>({
    isVisible: false,
    message: null,
    theme: "general",
  });
  const [guesses, setGuesses] = React.useState<TGuessResult[]>([]);
  const [gameStatus, setGameStatus] = React.useState<TGameStatus>("running");

  const handleGuessInput = (newGuess: string) => {
    const guessResult = checkGuess(newGuess, ANSWER);

    const updatedGuesses = [...guesses, guessResult];
    setGuesses(updatedGuesses);

    if (updatedGuesses.length >= NUM_OF_TRIES) {
      setModal({
        isVisible: true,
        message: `${GAME_LOST} ${ANSWER}`,
        theme: "failure",
      });
      setGameStatus("lost");
    }

    const isGuessCorrect = guessResult.every(
      (guess) => guess.status === "correct"
    );

    if (isGuessCorrect) {
      setModal({
        isVisible: true,
        message: `${GAME_WON} ${updatedGuesses.length} tries!`,
        theme: "success",
      });
      setGameStatus("won");
    }
  };

  return (
    <div className="w-full max-w-[480px] mx-auto relative flex flex-col items-center gap-4">
      {modal.isVisible && <Modal modal={modal} setModal={setModal} />}
      <Header setModal={setModal} />
      <GuessInput handleGuessInput={handleGuessInput} gameStatus={gameStatus} />
      <Guesses guesses={guesses} />
    </div>
  );
}

export default App;
