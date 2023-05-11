// import React, { useCallback, useEffect, useRef } from "react";
import {
  Modal as SCModal,
  ModalCloseButton,
  ModalContainer,
  ModalHeader,
  ModalOverlay,
  ModalTitle,
} from "./styles/Modal.styled";

const Modal = ({ title, children, show, onClose }) => {
  // const modalRef = useRef(null);

  // const handleOutsideClick = useCallback(
  //   (event) => {
  //     if (modalRef.current && !modalRef.current.contains(event.target)) {
  //       onClose();
  //     }
  //   },
  //   [onClose]
  // );

  // useEffect(() => {
  //   if (show) {
  //     document.addEventListener("click", handleOutsideClick);
  //   }

  //   return () => {
  //     document.removeEventListener("click", handleOutsideClick);
  //   };
  // }, [show, handleOutsideClick]);

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
