import styled, { keyframes } from "styled-components";

const progressAnimation = keyframes`
  from {
    width:0 ;
  }
  to {
    width:100%;
  }
`;

export const NavBar = styled.nav`
  padding-top: 10px;
  padding-bottom: 10px;
  background-color: var(--white-color);
  display: flex;
  align-content: center;
  justify-content: space-around;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
  width: 100%;
  @media (min-width: 576px) {
    width: 540px;
  }
  @media (min-width: 768px) {
    width: 720px;
  }
  @media (min-width: 992px) {
    width: 960px;
  }
  @media (min-width: 1200px) {
    width: 1140px;
  }
  @media (min-width: 1400px) {
    width: 1320px;
  }
`;

export const Nav = styled.ul`
  list-style: none;
  display: flex;
  align-content: center;
`;

const StyledNavItem = styled.li`
  margin: 0 5px;
`;

export const NavLink = styled.a`
  text-transform: uppercase;
  font-weight: 700;
  line-height: 10px;
  letter-spacing: 0;
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
  &:hover::after {
    width: 100%;
    animation: ${progressAnimation} 0.5s linear;
  }
`;

export const NavItemLogo = styled.a`
  font-family: "Amira Beauty";
  padding: 5px;
  font-size: 25px;
  width: fit-content;
  position: relative;
  display: flex;
  cursor: pointer;
  &::before,
  &::after {
    content: "";
    width: 12px;
    height: 12px;
    background-color: var(--secondary-color);
    position: absolute;
    border-radius: 50%;
    top: 50%;
    transform: translateY(-50%);
  }

  &::before {
    left: -30px;
  }
  &::after {
    right: -30px;
  }
`;

export const NavItem = ({ children }) => (
  <StyledNavItem>
    <NavLink>{children}</NavLink>
  </StyledNavItem>
);
