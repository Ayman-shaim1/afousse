import React, { useState } from "react";
import {
  Nav,
  NavReponsive,
  NavBar,
  NavItem,
  NavLink,
  NavLogoLink,
  NavItemIcon,
  NavDropdown,
  NavDropdownItem,
  NavDropdownMenu,
  NavBtnToggleMenu,
  NavResponsiveItem,
} from "./styles/Header.styled";

const Header = () => {
  const [showNavBar, setShowNavBar] = useState(false);

  const closeNavbarHandler = () => {
    setShowNavBar(false);
  };

  return (
    <>
      <NavBar bg="black">
        <Nav>
          <NavLink to="/home">+212 06 10 20 30 40</NavLink>
        </Nav>
        <Nav>
          <NavDropdown>
            <NavItemIcon to="/languages">
              <i className="bi bi-globe"></i>
              <NavDropdownMenu>
                <NavDropdownItem to="/english">English</NavDropdownItem>
                <NavDropdownItem to="/arabe">Arabe</NavDropdownItem>
              </NavDropdownMenu>
            </NavItemIcon>
          </NavDropdown>
        </Nav>
      </NavBar>
      <NavBar>
        <NavLogoLink to="/">Afousse</NavLogoLink>
        <NavReponsive show={showNavBar}>
          <NavItem to="/home" onClick={closeNavbarHandler}>
            Home
          </NavItem>
          <NavItem to="/shop" onClick={closeNavbarHandler}>
            Shop
          </NavItem>
          <NavItem to="/shop/men" onClick={closeNavbarHandler}>
            Men
          </NavItem>
          <NavItem to="/shop/men" onClick={closeNavbarHandler}>
            Women
          </NavItem>
          <NavItem to="/shop/men" onClick={closeNavbarHandler}>
            Contact
          </NavItem>
          <NavResponsiveItem to="/" onClick={closeNavbarHandler}>
            Favorites
          </NavResponsiveItem>
          <NavResponsiveItem to="/Login" onClick={closeNavbarHandler}>
            Login
          </NavResponsiveItem>
        </NavReponsive>
        <Nav>
          <NavItemIcon darker={"true"} to="/search">
            <i className="bi bi-search"></i>
          </NavItemIcon>
          <NavItemIcon darker to="/login">
            <i className="bi bi-person"></i>
          </NavItemIcon>
          <NavItemIcon darker to="/cart">
            <i className="bi bi-bag"></i>
          </NavItemIcon>
          <NavItemIcon darker to="/favorites">
            <i className="bi bi-heart"></i>
          </NavItemIcon>
        </Nav>

        <Nav>
          <NavItemIcon darker to="/search">
            <i className="bi bi-search"></i>
          </NavItemIcon>
          <NavItemIcon darker to="/cart">
            <i className="bi bi-bag"></i>
          </NavItemIcon>

          <NavBtnToggleMenu
            onClick={() => {
              setShowNavBar(!showNavBar);
            }}
          >
            {!showNavBar ? (
              <i className="bi bi-list"></i>
            ) : (
              <i className="bi bi-x"></i>
            )}
          </NavBtnToggleMenu>
        </Nav>
      </NavBar>
    </>
  );
};

export default Header;
