import styled, { keyframes } from "styled-components";

const openModal = keyframes`
  from {
    top:0;
  }
  to {
    top:50%
  }
`;

export const Modal = styled.div`
  width: 550px;
  min-height: 400px;
  background-color: var(--white-color);
  display: ${(props) => (props.show ? "block" : "none")};
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border: 1px solid var(--gray-color);
  z-index: 5000;
  animation: ${openModal} 0.4s linear;
  @media (max-width: 700px) {
    width: 400px;
  }
  @media (max-width: 450px) {
    width: 280px;
  }
`;
export const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* border-bottom: 1px solid var(--gray-color); */
  padding: 5px 20px;
`;
export const ModalTitle = styled.h4``;
export const ModalCloseButton = styled.span`
  width: 35px;
  height: 35px;
  border-radius: 50%;
  background-color: var(--white-color);
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  font-size: 20px;
  &:hover {
    background-color: var(--light-gray-color);
  }
`;
export const ModalContainer = styled.div`
  padding: 7px 20px;
`;

export const ModalOverlay = styled.div`
  position: fixed;
  display: ${(props) => (props.show ? "block" : "none")};
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
