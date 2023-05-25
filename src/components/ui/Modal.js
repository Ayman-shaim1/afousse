// import React, { useCallback, useEffect, useRef } from "react";
import {
  Modal as SCModal,
  ModalCloseButton,
  ModalContainer,
  ModalHeader,
  ModalOverlay,
  ModalTitle,
} from "../styles/Modal.styled";

const Modal = ({ title, children, show, onClose }) => {
 

  return (
    <>
      <ModalOverlay show={show} />
      {/* <SCModal show={show} ref={modalRef}> */}
      <SCModal show={show}>
        <ModalHeader>
          <ModalTitle>{title}</ModalTitle>
          <ModalCloseButton onClick={onClose}>
            <i className="bi bi-x"></i>
          </ModalCloseButton>
        </ModalHeader>
        <ModalContainer>{children}</ModalContainer>
      </SCModal>
    </>
  );
};

export default Modal;
