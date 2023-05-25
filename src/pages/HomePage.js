import React from "react";
import { Center } from "../components/ui";
import { useTranslation } from "react-i18next";

const HomePage = () => {
  const { t } = useTranslation();
  return (
    <>
      <Center horizontal>
        <h1>{t("message")}</h1>
      </Center>
      <Center horizontal>
        <h1>{t("navbar.home")}</h1>
      </Center>
    </>
  );
};

export default HomePage;
