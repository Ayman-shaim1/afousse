import { Link } from "react-router-dom";
import styled from "styled-components";

export const Button = styled.button`
  border: none;
  outline: none;
  font-family: "Nunito Sans", sans-serif;
  background-color: ${props =>
    props.color ? `var(--${props.color}-color)` : `var(--primary-color)`};
  color: ${props =>
    props.color === "white" ? `var(--black-color)` : `var(--white-color)`};
  padding: 16px 20px;
  display: inline-block;
  cursor: pointer;
  &:hover {
    opacity: 0.9;
  }
`;

export const ButtonLink = styled(Link)`
  border: none;
  outline: none;
  background-color: ${props =>
    props.color ? `var(--${props.color}-color)` : `var(--primary-color)`};
  color: ${props =>
    props.color === "white" ? `var(--black-color)` : `var(--white-color)`};
  padding: 16px 20px;
  display: inline-block;
  cursor: pointer;
  &:hover {
    opacity: 0.9;
  }
`;
