import React from "react";
import { Alert as SCAlert } from "./styles/Alert.styled";

const Alert = ({ type, children }) => {
  return <SCAlert type={type}>{children}</SCAlert>;
};

export default Alert;
