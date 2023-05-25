import React from "react";
import { useTranslation } from "react-i18next";

const Label = ({ children }) => {
  const { i18n } = useTranslation();
  const currentLanguage = i18n.language;
  return (
    <label
      style={{
        textAlign: currentLanguage === "ar" ? "end" : "start",
        with: "100%",
        display: "block",
      }}
    >
      {children}
    </label>
  );
};

export default Label;
