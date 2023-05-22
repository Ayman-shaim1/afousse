import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const progressAnimation = keyframes`
  from {
    width:0 ;
  }
  to {
    width:100%;
  }
`;

const openNav = keyframes`
 from {
    top:0;
  }
  to {
      top: 10%;
  }
`;

export const NavBar = styled.nav`
  background: transparent;
  display: flex;
  flex-direction: ${(props) =>
    props.currentLanguage === "ar" ? "row-reverse" : "row"};

  align-items: center;
  justify-content: space-around;
  padding: 10px 0;
  width: 100%;

  background-color: ${(props) =>
    props.bg ? "var(--" + props.bg + "-color)" : "var(--white-color)"};

  & > :nth-child(4) {
    display: none;
  }

  @media (max-width: 1200px) {
    & > :nth-child(3) {
      flex-direction: ${(props) =>
        props.currentLanguage === "ar" ? "column-reverse" : "column"};
      display: none;
    }
    & > :nth-child(4) {
      display: flex;
    }
  }
`;

export const Nav = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.4s;
  flex-direction: ${(props) =>
    props.currentLanguage === "ar" ? "row-reverse" : "row"};
`;

export const NavReponsive = styled(Nav)`
  /* background-color: red; */
  margin-left: ${(props) => (props.currentLanguage === "ar" ? "0" : "6%")};
  margin-right: ${(props) => (props.currentLanguage === "ar" ? "6%" : "0")};

  @media (max-width: 1200px) {
    display: ${(props) => (props.show ? "flex" : "none")} !important;
    background-color: var(--white-color);
    flex-direction: ${(props) =>
      props.currentLanguage === "ar" ? "column-reverse" : "column"};
    position: absolute;
    padding: 15px 0;
    animation: ${openNav} 0.3s linear;
    top: 10%;
    width: 100%;
    z-index: 1000;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 3px 4px -1px,
      rgba(0, 0, 0, 0.06) 0px 2px 3px -1px;
    & > a {
      margin: 5px 0;
    }
  }
  @media (max-width: 700px) {
    top: 12%;
  }
  @media (max-width: 400px) {
    top: 14%;
  }
`;
export const NavLink = styled(Link)`
  color: var(--white-color);
  text-decoration: none;
  text-transform: uppercase;
  transition: 0.1s;
`;

export const NavItem = styled(Link)`
  margin: 0 10px;
  color: var(--black-color);
  text-decoration: none;
  text-transform: uppercase;
  text-align: center;
  font-weight: bold;
  transition: 0.1s;
  cursor: pointer;
  font-size: 14px;

  &::after {
    content: "";
    display: block;
    width: 0;
    height: 2px;
    margin-top: 2px;
    background-color: var(--primary-color);
  }

  &:hover {
    color: var(--dark-gray-color);
  }

  &:hover::after {
    width: 100%;
    animation: ${progressAnimation} 0.5s linear;
  }
`;

export const NavResponsiveItem = styled(NavItem)`
  display: none;
  @media (max-width: 1200px) {
    display: block;
  }
`;

export const NavLogoLink = styled(Link)`
  font-family: "Amira Beauty";
  font-size: 30px;
  text-transform: uppercase;
  color: var(--black-color);
  text-decoration: none;
  cursor: pointer;
  padding: 0;
`;

export const NavLogo = styled.img`
  width: 55px;
  height: 55px;
  border-radius: 50%;
`;

export const NavItemIcon = styled(Link)`
  margin: 0 12px;
  font-size: 18px;
  font-weight: bold;
  color: ${(props) =>
    props.darker ? "var(--dark-gray-color)" : "var(--gray-color)"};
  text-decoration: none;
  text-transform: uppercase;
  transition: 0.1s;
  cursor: pointer;
`;

export const NavDropdown = styled.div`
  position: relative;
  &:hover div {
    display: block;
  }
`;

export const StyledNavDropdownMenu = styled.div`
  position: absolute;

  left: ${(props) => (props.currentLanguage === "ar" ? "0" : "-80%")};
  right: ${(props) => (props.currentLanguage === "ar" ? "-80%" : "0")};

  display: none;
  width: 150px;
  border: 1px solid var(--gray-color);
  padding: 0;
  margin-top: 1px;
  background-color: #fff;
  z-index: 2000;

  @media (max-width: 520px) {
    left: ${(props) => (props.currentLanguage === "ar" ? "0" : "-150%")};
    right: ${(props) => (props.currentLanguage === "ar" ? "-150%" : "0")};
  }
  @media (max-width: 480px) {
    left: ${(props) => (props.currentLanguage === "ar" ? "0" : "-200%")};
    right: ${(props) => (props.currentLanguage === "ar" ? "-200%" : "0")};
  }

  @media (max-width: 310px) {
    left: ${(props) => (props.currentLanguage === "ar" ? "0" : "-280%")};
    right: ${(props) => (props.currentLanguage === "ar" ? "-280%" : "0")};
  }
`;

export const NavDropdownMenu = ({ children }) => {
  const { i18n } = useTranslation();
  const currentLanguage = i18n.language;

  return (
    <StyledNavDropdownMenu currentLanguage={currentLanguage}>
      {children}
    </StyledNavDropdownMenu>
  );
};

export const NavDropdownItem = styled(Link)`
  font-size: 12px;
  font-weight: 500;
  padding: 15px;
  border-bottom: 1px solid var(--gray-color);
  display: block;
  text-decoration: none;

  &:hover {
    background-color: var(--light-gray-color);
  }
  &:last-child {
    border-bottom: none;
  }
`;

export const NavBtnToggleMenu = styled.button`
  display: block;
  font-size: 21px;
  color: var(--dark-gray-color);
  /* background-color: var(--white-color); */
  background: transparent;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  z-index: 1500;

  border: none;
  cursor: pointer;
  /* padding: 10px 15px; */
  &:hover {
    background-color: var(--light-gray-color);
  }
`;
