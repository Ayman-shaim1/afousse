import { Link } from "react-router-dom";
import styled from "styled-components";

export const Button = styled.button`
  border: none;
  outline: none;
  font-family: "Nunito Sans", sans-serif;
  background-color: ${(props) =>
    props.color ? `var(--${props.color}-color)` : `var(--primary-color)`};
  color: ${(props) =>
    props.color === "white" ? `var(--black-color)` : `var(--white-color)`};
  padding: 16px 20px;
  width: ${(props) => props.block && "100%"};
  display: block;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  /* border: ${(props) =>
    props.color === "white" ? `1px solid var(--light-gray-color)` : `none`}; */
  margin: 7px 0;
  &:hover {
    opacity: ${(props) => (props.color === "white" ? "1" : `0.8`)};
    background-color: ${(props) =>
      props.color === "white" && `var(--light-gray-color)`};
  }
`;

export const ButtonLink = styled(Link)`
  border: none;
  outline: none;
  background-color: ${(props) =>
    props.color ? `var(--${props.color}-color)` : `var(--primary-color)`};
  color: ${(props) =>
    props.color === "white" ? `var(--black-color)` : `var(--white-color)`};
  padding: 16px 20px;
  display: inline-block;
  cursor: pointer;
  &:hover {
    opacity: 0.9;
  }
`;
