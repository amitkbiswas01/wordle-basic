import { TModal } from "@/types";
import CrossCircleLogo from "@/assets/cross-circle.svg";

type TModalProp = {
  modal: TModal;
  setModal: React.Dispatch<React.SetStateAction<TModal>>;
};

const getModalBg = (theme: TModal["theme"]) => {
  if (theme === "failure") return "text-white bg-red-600 border-red-900";
  if (theme === "success") return "text-white bg-green-600 border-green-900";

  return "bg-white";
};

function Modal({ modal, setModal }: TModalProp) {
  const closeModal = () => {
    setModal({ isVisible: false, message: null, theme: "general" });
  };

  return (
    <div
      className="w-screen h-screen bg-sky-900/[0.5] absolute z-10 flex justify-center items-center"
      role="dialog"
      aria-describedby="modal-description"
      aria-modal="true"
    >
      <div
        tabIndex={-1}
        className={
          "w-full max-w-[480px] p-4 border rounded-md flex flex-col items-start gap-4 " +
          getModalBg(modal.theme)
        }
      >
        <button
          className="hover:scale-110 transform self-end text-inherit"
          onClick={closeModal}
          aria-label="Close modal"
        >
          <img className="w-8 h-8" src={CrossCircleLogo} alt="Close" />
        </button>
        <p id="modal-description">{modal.message}</p>
      </div>
    </div>
  );
}

export default Modal;
