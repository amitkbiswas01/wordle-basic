import React, { useEffect, useRef } from "react";
import { TModal } from "@/types";
import CrossCircleLogo from "@/assets/cross-circle.svg";

type TModalProp = {
  modal: TModal;
  setModal: React.Dispatch<React.SetStateAction<TModal>>;
};

function Modal({ modal, setModal }: TModalProp) {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (modal.isVisible) {
      modalRef.current?.focus();
    }
  }, [modal.isVisible]);

  const closeModal = () => {
    setModal({ isVisible: false, message: null });
  };

  return (
    <div
      className="w-screen h-screen bg-sky-900/[0.5] absolute z-10 flex justify-center items-center"
      role="dialog"
      aria-describedby="modal-description"
      aria-modal="true"
    >
      <div
        ref={modalRef}
        tabIndex={-1}
        className="w-full max-w-[540px] p-4 bg-white border rounded-md flex flex-col items-start gap-4"
      >
        <button
          className="hover:scale-110 transform self-end"
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
