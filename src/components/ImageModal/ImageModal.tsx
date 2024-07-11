import s from "./ImageModal.module.css";
import Modal from "react-modal";
import { Photo } from "../../types";

Modal.setAppElement("#root");

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    padding: "10px",
  },
  overlay: {
    backgroundColor: "rgba(40, 40, 40, 0.75)",
  },
};

type Props = {
  modalIsOpen: boolean;
  closeModal: () => void;
  selectImg: Photo | null;
};

export const ImageModal = ({ modalIsOpen, closeModal, selectImg }: Props) => {
  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <img
          src={selectImg?.urls.regular}
          alt={selectImg?.alt_description}
          className={s.modal_img}
        />
      </Modal>
    </div>
  );
};
