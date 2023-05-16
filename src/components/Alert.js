import React from "react";
import {
  Alert as SCAlert,
  AlertContainer,
  AlertIcon,
  AlertText,
} from "./styles/Alert.styled";

const alerticons = {
  red: <AlertIcon className="bi bi-x-circle-fill" type="red"></AlertIcon>,
  green: (
    <AlertIcon className="bi bi-check-circle-fill" type="green"></AlertIcon>
  ),
  yellow: (
    <AlertIcon
      className="bi bi-exclamation-circle-fill"
      type="yellow"
    ></AlertIcon>
  ),
};

const Alert = ({ type, text, icon }) => {
  return (
    <SCAlert type={type}>
      <AlertContainer type={type}>
        {icon && alerticons[type]}
        <AlertText type={type}>{text}</AlertText>
      </AlertContainer>
    </SCAlert>
  );
};

export default Alert;
