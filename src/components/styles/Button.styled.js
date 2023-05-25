import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledButton = styled.button`
  border: none;
  outline: none;
  font-family: "Nunito Sans", sans-serif;
  background-color: ${(props) =>
    props.color ? `var(--${props.color}-color)` : `var(--primary-color)`};
  color: ${(props) =>
    props.color === "white" ? `var(--black-color)` : `var(--white-color)`};
  padding: 16px 20px;
  width: ${(props) => props.block && "100%"};
  cursor: pointer;
  display: flex;
  flex-direction: ${(props) => (props.currentLanguage ? "row-reverse" : "row")};
  justify-content: center;
  align-items: center;
  /* border: ${(props) =>
    props.color === "white" ? `1px solid var(--light-gray-color)` : `none`}; */
  margin: 7px 0;
  &:hover {
    transform: scale(0.98);

    background-color: ${(props) =>
      props.color === "white" && `var(--light-gray-color)`};
  }
`;

export const Button = ({ children, color, block }) => {
  const { i18n } = useTranslation();
  const currentLanguage = i18n.language;
  return (
    <StyledButton currentLanguage={currentLanguage} color={color} block={block}>
      {children}
    </StyledButton>
  );
};

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
    transform: scale(0.98);
  }
`;
