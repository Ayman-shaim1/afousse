import React from "react";
import { Input as SCInput } from "../styles/Input.styled";
import { useTranslation } from "react-i18next";

const Input = ({ ...props }) => {
  const { i18n } = useTranslation();
  const currentLanguage = i18n.language;

  return <SCInput {...props} currentLanguage={currentLanguage} />;
};

export default Input;
