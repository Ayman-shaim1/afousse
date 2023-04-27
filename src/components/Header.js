import React from "react";
import {
  Nav,
  NavBar,
  NavItem,
  NavLink,
  NavItemLogo,
} from "./styles/Header.styled";

const Header = () => {
  return (
    <NavBar>
      <Nav>
        <NavItem>Home</NavItem>
        <NavItem>Shop</NavItem>
      </Nav>
    
        <NavItemLogo>afousse</NavItemLogo>

      <Nav>
        <NavItem>Home</NavItem>
        <NavItem>Shop</NavItem>
      </Nav>
    </NavBar>
  );
};

export default Header;
