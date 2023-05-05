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
import { Button, Divider, Input, Modal } from "./index";
import GoogleLogo from "../assets/images/google-logo.png";
import FacebookLogo from "../assets/images/facebook-logo.png";

const Header = () => {
  const [showNavBar, setShowNavBar] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPasswrod] = useState("");

  const openModalHandler = (e) => {
    e.preventDefault();
    setShowModal(true);
  };
  const closeModalHandler = (e) => {
    e.preventDefault();
    setShowModal(false);
    setEmail("");
    setPasswrod("");
  };

  return (
    <>
      <Modal show={showModal} title="Login" onClose={closeModalHandler}>
        <form>
          <label>Email</label>
          <Input
            placeholder={"Enter email ..."}
            value={email}
            type="email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <label>Password</label>
          <Input
            placeholder={"Enter password ..."}
            type="password"
            value={password}
            onChange={(e) => setPasswrod(e.target.value)}
          />
          <Button block color="primary">
            Login
          </Button>
          <Divider withOr />
          <Button color="white" block>
            <img src={GoogleLogo} className="ic-img" alt="ic-img" /> Login with
            gmail
          </Button>
          <Button color="white" block>
            <img src={FacebookLogo} className="ic-img" alt="ic-img" /> Login
            with facebook
          </Button>
        </form>
      </Modal>

      <NavBar bg="primary">
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
          <NavResponsiveItem to="/">Search</NavResponsiveItem>
          <NavItem to="/home">Home</NavItem>
          <NavItem to="/shop">Shop</NavItem>
          <NavItem to="/shop/men">Men</NavItem>
          <NavItem to="/shop/men">Women</NavItem>
          <NavItem to="/shop/men">Contact</NavItem>
          <NavResponsiveItem to="/">Favorites</NavResponsiveItem>
          <NavResponsiveItem to="/" onClick={openModalHandler}>
            Login
          </NavResponsiveItem>
        </NavReponsive>
        <Nav>
          <NavItemIcon darker to="/search">
            <i className="bi bi-search"></i>
          </NavItemIcon>
          <NavItemIcon darker to="/login" onClick={openModalHandler}>
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
