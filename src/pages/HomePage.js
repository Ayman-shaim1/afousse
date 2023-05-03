import React from "react";
import { Button, ButtonLink } from "../components/styles/Button.styled";
import Logo from "../assets/icons/logo.svg";
const HomePage = () => {
  return (
    <>
      <Button style={{ display: "block", marginBottom: "10px" }}>
        hello world
      </Button>
      <ButtonLink color="white">hello world</ButtonLink>
    </>
  );
};

export default HomePage;
