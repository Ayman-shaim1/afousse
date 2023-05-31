import { useTranslation } from "react-i18next";
import styled from "styled-components";

export const ImagePopupContainer = styled.div`
  width: 800px;
  height: 800px;
  border: 1px solid var(--gray-color);
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 5000;
  background-color: var(--white-color);
  display: flex;
  justify-content: center;
  padding: 30px;
  padding-top: 80px;
  display: ${(props) => (props.show ? "block" : "none")};

  @media screen and (max-width: 830px) {
    width: 700px;
    height: 70%;
  }

  @media screen and (max-width: 730px) {
    height: 70%;
    width: 600px;
  }

  @media screen and (max-width: 630px) {
    height: 50%;
    width: 500px;
  }

  @media screen and (max-width: 530px) {
    height: 70%;
    width: 80%;
  }
  
`;
export const Image = styled.img`
  width: 100%;
  height: 100%;

  /* @media screen and (max-width: 830px) {
    width: 700px;
    height: 70%;
  }
  @media screen and (max-width: 730px) {
    height: 70%;
    width: 600px;
  }
  @media screen and (max-width: 630px) {
    height: 50%;
    width: 500px;
  } */
  @media screen and (max-width: 530px) {
    width: 100%;
    height: 100%;
  }

  @media screen and (max-width: 430px) {
    width: 100%;
    height: 100%;
  }

  @media screen and (max-width: 330px) {
    width: 100%;
    height: 100%;
  }

  @media screen and (max-width: 230px) {
    width: 100%;
    height: 100%;
  }
`;
export const ImagePopupOverlay = styled.div`
  position: fixed;
  visibility: ${(props) => (props.show ? "visible" : "hidden")};

  /* visibility: hidden; */
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 4000;
`;
const StyledImagePopupCloseButton = styled.span`
  position: absolute;
  top: 2%;
  ${(props) => (props.currentLanguage === "ar" ? "left:3%;" : "right:3%;")}
  color: var(--dark-gray-color);
  z-index: 1000;
  cursor: pointer;
  font-size: 18px;
  padding: 10px;
  border-radius: 50%;
  &:hover {
    background-color: var(--light-gray-color);
  }
`;

export const ImagePopupCloseButton = ({ ...otherProps }) => {
  const { i18n } = useTranslation();
  const currentLanguage = i18n.language;

  return (
    <StyledImagePopupCloseButton
      currentLanguage={currentLanguage}
      {...otherProps}
    />
  );
};
