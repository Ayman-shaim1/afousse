import React from "react";
import { Divider as SCDivider, DividerOr } from "../styles//Divider.styled";
const Divider = ({ withOr }) => {
  return <SCDivider>{withOr && <DividerOr>Or</DividerOr>}</SCDivider>;
};

export default Divider;
  