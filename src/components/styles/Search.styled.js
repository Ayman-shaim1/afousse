import styled from "styled-components";
import { useTranslation } from "react-i18next";

const StyledSearchBtnClose = styled.span`
  position: absolute;
  top: 2%;
  ${(props) => (props.currentLanguage === "ar" ? "left:3%;" : "right:3%;")}
  color: var(--dark-gray-color);
  z-index: 1000;
  cursor: pointer;
  font-size: 18px;
  padding: 20px;
  border-radius: 50%;
  &:hover {
    background-color: var(--light-gray-color);
  }
`;

export const SearchBtnClose = ({ ...otherProps }) => {
  const { i18n } = useTranslation();
  const currentLanguage = i18n.language;

  return (
    <StyledSearchBtnClose currentLanguage={currentLanguage} {...otherProps} />
  );
};

const StyledSearchContainer = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: white;
  z-index: 5000;
  text-align: ${(props) => (props.currentLanguage === "ar" ? "right" : "left")};
  display: ${(props) => (props.show ? "block" : "none")};
`;

export const SearchContainer = ({ children, show }) => {
  const { i18n } = useTranslation();
  const currentLanguage = i18n.language;

  return (
    <StyledSearchContainer currentLanguage={currentLanguage} show={show}>
      {children}
    </StyledSearchContainer>
  );
};

export const SearchInputContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const SearchContent = styled.div`
  position: relative;
  display: block;
  width: 250px;
  @media (min-width: 576px) {
    width: 540px;
  }
  @media (min-width: 768px) {
    width: 720px;
  }
  @media (min-width: 992px) {
    width: 860px;
  }
  @media (min-width: 1200px) {
    width: 940px;
  }
  @media (min-width: 1400px) {
    width: 940px;
  }
`;

const StyledSearchInput = styled.input`
  border: none;
  border-bottom: 1px solid var(--dark-gray-color);
  width: 100%;
  outline: none;
  padding: 18px 30px 18px 5px;
  font-size: 18px;
  width: 100%;
  text-align: ${(props) => (props.currentLanguage === "ar" ? "right" : "left")};
`;

export const SearchInput = ({ ...otherProps }) => {
  const { i18n } = useTranslation();
  const currentLanguage = i18n.language;
  return (
    <StyledSearchInput currentLanguage={currentLanguage} {...otherProps} />
  );
};

const StyledSearchInputIcon = styled.span`
  position: absolute;
  top: 32%;
  ${(props) => (props.currentLanguage === "ar" ? "left:0;" : "right:0;")};
  color: var(--dark-gray-color);
  cursor: pointer;
  &:hover {
    color: var(--gray-color);
  }
`;
export const SearchInputIcon = ({ ...otherProps }) => {
  const { i18n } = useTranslation();
  const currentLanguage = i18n.language;
  return (
    <StyledSearchInputIcon currentLanguage={currentLanguage} {...otherProps} />
  );
};
