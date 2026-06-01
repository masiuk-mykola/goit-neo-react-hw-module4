import Modal from "react-modal";

import type { UnsplashImage } from '../../types/image';
import styles from "./ImageModal.module.css";

interface ImageModalProps {
  modalIsOpen: boolean;
  image: UnsplashImage | null;
  onClose: () => void;
}

export default function ImageModal({ modalIsOpen, image, onClose }: ImageModalProps) {
  return (
    <Modal
      isOpen={modalIsOpen}
      overlayClassName={styles["image-modal-overlay"]}
      className={styles["image-modal-content"]}
      onRequestClose={onClose}
      preventScroll={true}
    >
      <div style={{ backgroundColor: image?.color ?? undefined }}>
        <img src={image?.urls?.regular} alt={image?.alt_description ?? ''} />
      </div>
    </Modal>
  );
}
