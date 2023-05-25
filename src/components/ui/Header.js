import React, { useState } from "react";
import {
  Nav,
  NavReponsive,
  NavBar,
  NavItem,
  NavItemIcon,
  NavDropdown,
  NavDropdownItem,
  NavDropdownMenu,
  NavBtnToggleMenu,
  NavResponsiveItem,
  NavLogo,
} from "../styles/Header.styled";
import Search from "./Search";
import { useTranslation } from "react-i18next";
import Logo from "../../assets/images/logo.svg";

const Header = () => {
  const [showNavBar, setShowNavBar] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const { i18n, t } = useTranslation();
  const currentLanguage = i18n.language;

  const closeNavbarHandler = () => {
    setShowNavBar(false);
  };

  const closeSearchHandler = () => {
    setShowSearch(false);
  };

  const openSearchHandler = (e) => {
    e.preventDefault();
    setShowSearch(true);
  };

  const selectLanguageHandler = (e) => {
    e.preventDefault();
    i18n.changeLanguage(e.target.getAttribute("href").split("/")[1]);
  };

  return (
    <>
      <Search show={showSearch} onClose={closeSearchHandler} />
      <NavBar bg="black" currentLanguage={currentLanguage}>
        <Nav></Nav>
        <Nav>
          <NavDropdown>
            <NavItemIcon to="/languages">
              <i className="bi bi-globe"></i>
              <NavDropdownMenu>
                <NavDropdownItem onClick={selectLanguageHandler} to="/en">
                  English
                </NavDropdownItem>
                <NavDropdownItem onClick={selectLanguageHandler} to="/fr">
                  French
                </NavDropdownItem>
                <NavDropdownItem onClick={selectLanguageHandler} to="/ar">
                  Arabe
                </NavDropdownItem>
              </NavDropdownMenu>
            </NavItemIcon>
          </NavDropdown>
        </Nav>
      </NavBar>
      <NavBar currentLanguage={currentLanguage}>
        <NavLogo src={Logo} alt="logo" />
        <NavReponsive show={showNavBar} currentLanguage={currentLanguage}>
          <NavItem to="/home" onClick={closeNavbarHandler}>
            {t("navbar.home")}
          </NavItem>
          <NavItem to="/shop" onClick={closeNavbarHandler}>
            {t("navbar.shop")}
          </NavItem>
          <NavItem to="/shop/men" onClick={closeNavbarHandler}>
            {t("navbar.men")}
          </NavItem>
          <NavItem to="/shop/men" onClick={closeNavbarHandler}>
            {t("navbar.women")}
          </NavItem>
          <NavItem to="/shop/men" onClick={closeNavbarHandler}>
            {t("navbar.contact")}
          </NavItem>
          <NavItem to="/shop/men" onClick={closeNavbarHandler}>
            {t("navbar.about")}
          </NavItem>
          <NavResponsiveItem to="/" onClick={closeNavbarHandler}>
            {t("navbar.favorites")}
          </NavResponsiveItem>
          <NavResponsiveItem to="/Login" onClick={closeNavbarHandler}>
            {t("navbar.signIn")}
          </NavResponsiveItem>
        </NavReponsive>
        <Nav currentLanguage={currentLanguage}>
          <NavItemIcon darker={"true"} onClick={openSearchHandler}>
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

        <Nav currentLanguage={currentLanguage}>
          <NavItemIcon darker to="/search" onClick={openSearchHandler}>
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
