import React from "react";
import { TGameStatus } from "@/types";

function GuessInput({
  handleGuessInput,
  gameStatus,
}: {
  handleGuessInput: (newGuess: string) => void;
  gameStatus: TGameStatus;
}) {
  const [guessError, setGuessError] = React.useState<string>("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const inputElem = event.target as HTMLFormElement;

    const formData = new FormData(inputElem);
    const guess = (formData.get("guess-input") as string).toUpperCase();

    if (!guess) {
      setGuessError("Please enter a guess.");
      return;
    }

    if (guess.length < 5) {
      setGuessError("Minimum word length is 5 characters.");
      return;
    }

    if (guess.length > 5) {
      setGuessError("Maximum word length is 5 characters.");
      return;
    }

    inputElem.reset();
    setGuessError("");
    handleGuessInput(guess);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full p-4 bg-sky-100 rounded-md flex flex-col justify-center items-start gap-2"
      aria-label="Submit your guess"
    >
      <label className="text-lg" htmlFor="guess-input">
        Enter your guess:
      </label>
      <input
        type="text"
        id="guess-input"
        name="guess-input"
        className="w-full p-4 uppercase border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
        aria-describedby="guess-input-help"
        aria-invalid={!!guessError}
        aria-errormessage="guess-input-error"
        disabled={gameStatus !== "running"}
      />
      {guessError && (
        <p
          id="guess-input-error"
          className="w-full p-4 rounded-md text-white bg-red-600"
          role="alert"
        >
          {guessError}
        </p>
      )}
      <p id="guess-input-help" className="sr-only">
        Enter a 5-letter word.
      </p>
    </form>
  );
}

export default GuessInput;
