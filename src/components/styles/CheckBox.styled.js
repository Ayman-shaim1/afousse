import { useTranslation } from "react-i18next";
import styled from "styled-components";

const FormLabel = styled.label`
  font-size: 15px;
`;

const StyledFormCheckContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: ${(props) =>
    props.currentLanguage === "ar" ? "row-reverse" : "row"};
`;

const StyledFormCheckLabel = styled(FormLabel)`
  user-select: none;
  position: relative;
  ${(props) =>
    props.currentLanguage === "ar"
      ? " padding-right:25px"
      : "padding-left:25px"};
  padding-top: 3px;

  &::before {
    content: "";
    width: 17px;
    height: 17px;
    border: 1px solid lightgray;
    position: absolute;
    ${(props) => (props.currentLanguage === "ar" ? "right:0;" : "left:0;")};
    top: 3px;
  }

  &::after {
    font-family: "FontAwesome";
    content: "\f00c";
    position: absolute;
    ${(props) => (props.currentLanguage === "ar" ? "right:0;" : "left:0;")};
    top: 2px;
    width: 17px;
    height: 17px;
    background-color: var(--primary-color);
    color: #fff;
    font-size: 13px;
    text-align: center;
    padding: 1px;
    padding-top: 3px;
    display: none;
  }
`;

const StyledFormCheck = styled.input.attrs({ type: "checkbox" })`
  --webkit-appearance: none;
  appearance: none;
  width: 17px;
  height: 17px;
  position: absolute;
  z-index: 100;
  cursor: pointer;
  &:checked + label {
    &::after {
      display: block;
    }
  }
`;

export const CheckBox = ({ label, ...otherProps }) => {
  const { i18n } = useTranslation();
  const currentLanguage = i18n.language;
  return (
    <StyledFormCheckContainer currentLanguage={currentLanguage}>
      <StyledFormCheck {...otherProps} />
      <StyledFormCheckLabel currentLanguage={currentLanguage}>
        {label}
      </StyledFormCheckLabel>
    </StyledFormCheckContainer>
  );
};
