import React from "react";
import {
  Image,
  ImagePopupContainer,
  ImagePopupCloseButton,
  ImagePopupOverlay,
} from "../styles/ImagePopup.styled";

const ImagePopup = ({ image, show, onClose }) => {
  return (
    <>
      <ImagePopupOverlay show={show} />
      <ImagePopupContainer show={show}>
        <ImagePopupCloseButton className="bi bi-x" onClick={onClose} />
        <Image src={image} />
      </ImagePopupContainer>
    </>
  );
};

export default ImagePopup;
