import { TGuessResult } from "@/types";
import { NUM_OF_TRIES } from "@/utils/data";
import Guess from "./Guess";

function Guesses({ guesses }: { guesses: TGuessResult[] }) {
  return (
    <div className="w-full flex flex-col gap-2">
      {Array(NUM_OF_TRIES)
        .fill(null)
        .map((_, index) => {
          return <Guess key={`row-${index}`} guess={guesses[index] ?? null} />;
        })}
    </div>
  );
}

export default Guesses;
