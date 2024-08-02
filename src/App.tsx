import React from "react";
import { TModal } from "./types";
import Header from "./components/Header";
import Modal from "./components/Modal";

function App() {
  const [modal, setModal] = React.useState<TModal>({
    isVisible: false,
    message: null,
  });

  return (
    <div className="w-full max-w-[540px] mx-auto relative flex flex-col items-center">
      {modal.isVisible && <Modal modal={modal} setModal={setModal} />}
      <Header setModal={setModal} />
    </div>
  );
}

export default App;
