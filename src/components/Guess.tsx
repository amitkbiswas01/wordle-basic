import { TGuessResult, TGuessResultStatus } from "@/types";
import { WORD_LENGTH } from "@/utils/data";

const getBgColor = (status: TGuessResultStatus | null): string => {
  if (status === "correct") return "bg-green-500";
  if (status === "misplaced") return "bg-yellow-500";
  if (status === "incorrect") return "bg-gray-400";

  return "bg-white";
};

function Guess({ guess }: { guess: TGuessResult | null }) {
  return (
    <div className="flex gap-2">
      {Array(WORD_LENGTH)
        .fill(null)
        .map((_, index) => {
          let letter = "";
          let status: TGuessResultStatus | null = null;

          if (guess) {
            letter = guess[index].letter;
            status = guess[index].status;
          }

          return (
            <div
              key={`column-${index}`}
              className={`w-1/5 aspect-square border-2 rounded-md shadow-sm text-4xl font-bold flex justify-center items-center ${getBgColor(
                status
              )}`}
              aria-label={`Letter ${letter} with status ${status}`}
            >
              {letter}
            </div>
          );
        })}
    </div>
  );
}

export default Guess;
