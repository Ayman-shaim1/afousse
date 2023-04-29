import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";
import React, { useEffect, useRef, useState } from "react";

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

export const NavLink = styled(Link)`
  color: var(--black-color);
  text-decoration: none;
  text-transform: uppercase;
  font-weight: bold;
  line-height: 10px;
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

export const NavLogoLink = styled(Link)`
  font-family: "Amira Beauty";
  padding: 5px;
  font-size: 30px;
  text-transform: uppercase;
  color: var(--black-color);
  text-decoration: none;
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
    animation: ${progressAnimation} 0.5s linear;
    width: 100%;
  }
`;

export const NavLogo = styled.img`
  width: 55px;
  height: 55px;
  border-radius: 50%;
`;

export const NavItem = ({ children, to }) => (
  <StyledNavItem>
    <NavLink to={to}>{children}</NavLink>
  </StyledNavItem>
);

const StyledNavItemIcon = styled.li`
  margin: 0 12px;
  font-size: 20px;
`;

export const NavItemIcon = ({ children, to }) => (
  <StyledNavItemIcon>
    <NavLink to={to}>{children}</NavLink>
  </StyledNavItemIcon>
);

const StyledNavDropdown = styled.div`
  position: relative;
  & > div {
    display: ${props => (props.show ? "block" : "none")};
  }
`;

export const NavDropdown = ({ children }) => {
  const [show, setShow] = useState(false);
  const [itemClicked, setItemClicked] = useState(false);
  const showMenu = () => setShow(true);

  const NavdropdownRef = useRef(null);

  const closeMenu = e => {
    if (NavdropdownRef.current && !NavdropdownRef.current.contains(e.target)) {
      setShow(false);
    }
  };
  useEffect(() => {
    document.addEventListener("click", closeMenu);
    return () => {
      document.removeEventListener("click", closeMenu);
    };
  }, []);
  useEffect(() => {
    if (itemClicked) {
      setShow(false);
    }
    setItemClicked(false);
  }, [itemClicked]);
  return (
    <StyledNavDropdown show={show} ref={NavdropdownRef} onClick={showMenu}>
      {React.Children.map(children, child =>
        React.cloneElement(child, { onClick: () => setItemClicked(true) })
      )}
    </StyledNavDropdown>
  );
};

export const NavDropdownMenu = styled.div`
  position: absolute;
  width: 150px;
  border: 1px solid var(--gray-color);
  padding: 0;
  margin-top: 10px;
  transform: translateX(-30%);
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
