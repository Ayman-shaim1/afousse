import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";

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
      top: 16%;
  }
`;

export const NavBar = styled.nav`
  background: transparent;
  display: flex;
  align-content: center;
  justify-content: space-around;
  padding: 10px 0;
  width: 100%;
  background-color: ${props =>
    props.bg ? "var(--" + props.bg + "-color)" : "var(--white-color)"};

  & > :nth-child(4) {
    display: none;
  }

  @media (max-width: 1200px) {
    & > :nth-child(3) {
      flex-direction: column;
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
`;

export const NavReponsive = styled(Nav)`
  @media (max-width: 1200px) {
    display: ${props => (props.show ? "flex" : "none")} !important;
    background-color: var(--white-color);
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: absolute;
    animation: ${openNav} 0.3s linear;
    top: 16%;
    width: 100%;
    z-index: 1000;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 3px 4px -1px,
      rgba(0, 0, 0, 0.06) 0px 2px 3px -1px;
    & > a {
      margin: 5px 0;
    }
  }
`;
export const NavLink = styled(Link)`
  color: var(--white-color);
  text-decoration: none;
  text-transform: uppercase;
  text-align: center;
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
  &::after {
    content: "";
    display: block;
    width: 0;
    height: 2px;
    margin-top: 2px;
    background-color: var(--primary-color);
  }

  &:hover {
    color: var(--secondary-color);
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

export const NavItemIcon = styled.a`
  margin: 0 12px;
  font-size: 18px;
  font-weight: bold;
  color: ${props =>
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

export const NavDropdownMenu = styled.div`
  position: absolute;
  right: -100%;
  display: none;
  width: 150px;
  border: 1px solid var(--gray-color);
  padding: 0;
  margin-top: 1px;
  background-color: #fff;
  z-index: 1000;
`;

export const NavDropdownItem = styled(Link)`
  font-size: 12px;
  font-weight: 500;
  padding: 15px;
  border-bottom: 1px solid var(--gray-color);
  display: block;
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

  border: none;
  cursor: pointer;
  /* padding: 10px 15px; */
  &:hover {
    background-color: var(--light-gray-color);
  }
`;
