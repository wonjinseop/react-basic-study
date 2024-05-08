import React from 'react';
import Portal from '../Portal/Portal';
import styles from './CartModal.module.scss';

const BackDrop = ({ onClose }) => {
  return <div className={styles.backdrop} onClick={onClose} />;
};

const ModalOverlay = ({ children }) => {
  return (
    <div className={styles.modal}>
      <div className={styles.content}>{children}</div>
    </div>
  );
};

const CartModal = ({ children, onClose }) => {
  return (
    <>
      <Portal destId="backdrop-root">
        <BackDrop onClose={onClose} />
      </Portal>
      <Portal destId="overlay-root">
        <ModalOverlay>{children}</ModalOverlay>
      </Portal>
    </>
  );
};

export default CartModal;
