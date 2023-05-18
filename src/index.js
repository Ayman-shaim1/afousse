import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles/normalize.css";
import "./styles/variables.css";
import { initReactI18next } from "react-i18next";
import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: require("./locales/en.json"),
      },
      fr: {
        translation: require("./locales/fr.json"),
      },
      ar: {
        translation: require("./locales/ar.json"),
      },
    },
    fallbackLng: "en",
    debug: true,
    interpolation: {
      escapeValue: false,
    },
  });

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
