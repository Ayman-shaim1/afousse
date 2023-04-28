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
  background-color: var(--white-color);
  display: flex;
  align-content: center;
  justify-content: space-around;
  padding: 20px 0;
  width: 100%;
  border-bottom: 1px solid var(--light-gray-color);
  box-shadow: 1px 1px 2px 1px var(--light-gray-color);
`;

export const Nav = styled.ul`
  list-style: none;
  display: flex;
  align-content: center;
  justify-content: center;
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

export const NavLogoLink = styled.a`
  font-family: "Amira Beauty";
  padding: 5px;
  font-size: 30px;
  text-transform: uppercase;
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

export const NavLogo = styled.img`
  width: 55px;
  height: 55px;
  border-radius: 50%;
`;

export const NavItem = ({ children }) => (
  <StyledNavItem>
    <NavLink>{children}</NavLink>
  </StyledNavItem>
);

const StyledNavItemIcon = styled.li`
  margin: 0 12px;
  font-size: 20px;
`;

export const NavItemIcon = ({ children }) => (
  <StyledNavItemIcon>
    <NavLink>{children}</NavLink>
  </StyledNavItemIcon>
);
