import React from "react";
import { Container as SCContainer } from "../styles/Container.styled";
const Container = ({ children }) => {
  return <SCContainer>{children}</SCContainer>;
};

export default Container;
