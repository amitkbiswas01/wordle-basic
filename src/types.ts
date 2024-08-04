export type TModal = {
  isVisible: boolean;
  message: string | null;
  theme: "success" | "failure" | "general";
};

export type TGameStatus = "running" | "won" | "lost";
export type TGuessResultStatus = "correct" | "incorrect" | "misplaced";
export type TGuessResult = {
  letter: string;
  status: TGuessResultStatus;
}[];
