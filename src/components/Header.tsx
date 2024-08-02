import React from "react";
import { TModal } from "@/types";
import { WORDLE_HOW_TO_PLAY } from "@/utils/data";
import QuestionCircleLogo from "@/assets/question-circle.svg";

type THeaderProps = {
  setModal: React.Dispatch<React.SetStateAction<TModal>>;
};

function Header({ setModal }: THeaderProps) {
  return (
    <header className="w-full mt-12 p-4 rounded-md bg-sky-100 flex justify-between items-center">
      <h1 className="text-2xl font-semibold">Wordle</h1>
      <button
        type="button"
        className="hover:scale-110 transform"
        onClick={() =>
          setModal({
            isVisible: true,
            message: WORDLE_HOW_TO_PLAY,
          })
        }
        aria-label="How to play"
      >
        <img className="w-8 h-8" src={QuestionCircleLogo} alt="How to play" />
      </button>
    </header>
  );
}

export default Header;
