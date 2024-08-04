import React from "react";
import { TGameStatus, TModal } from "./types";
import Header from "./components/Header";
import Modal from "./components/Modal";
import GuessInput from "./components/GuessInput";
import { GAME_LOST, GAME_WON, NUM_OF_TRIES, WORDS } from "./utils/data";
import { checkGuess } from "./utils/result-checker";

const ANSWER = WORDS[Math.floor(Math.random() * WORDS.length)];
console.log(ANSWER);

function App() {
  const [modal, setModal] = React.useState<TModal>({
    isVisible: false,
    message: null,
  });
  const [guesses, setGuesses] = React.useState<string[]>([]);
  const [gameStatus, setGameStatus] = React.useState<TGameStatus>("running");

  const handleGuessInput = (newGuess: string) => {
    const updatedGuesses = [...guesses, newGuess];
    setGuesses(updatedGuesses);

    if (updatedGuesses.length >= NUM_OF_TRIES) {
      setGuesses([]);
      setModal({
        isVisible: true,
        message: `${GAME_LOST} ${ANSWER}`,
      });
      setGameStatus("lost");
    }

    const guessResult = checkGuess(newGuess, ANSWER);
    const isGuessCorrect =
      guessResult && guessResult.every((guess) => guess.status === "correct");

    if (isGuessCorrect) {
      setModal({
        isVisible: true,
        message: `${GAME_WON} ${updatedGuesses.length} tries!`,
      });
      setGameStatus("won");
    }
  };

  return (
    <div className="w-full max-w-[540px] mx-auto relative flex flex-col items-center gap-4">
      {modal.isVisible && <Modal modal={modal} setModal={setModal} />}
      <Header setModal={setModal} />
      <GuessInput handleGuessInput={handleGuessInput} gameStatus={gameStatus} />
    </div>
  );
}

export default App;
