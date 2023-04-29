import React from "react";
import {
  Nav,
  NavBar,
  NavItem,
  NavLogoLink,
  NavItemIcon,
  NavDropdown,
  NavDropdownItem,
  NavDropdownMenu,
} from "./styles/Header.styled";

const Header = () => {
  return (
    <NavBar>
      <Nav>
        <NavItem to='/home'>Home</NavItem>
        <NavItem to='/shop'>Shop</NavItem>
      </Nav>
      <NavLogoLink to="/">Afousse</NavLogoLink>
      <Nav>
        <NavItemIcon>
          <NavDropdown>
            <i className='bi bi-globe'></i>
            <NavDropdownMenu>
              <NavDropdownItem to='/english'>English</NavDropdownItem>
              <NavDropdownItem to='/arabe'>Arabe</NavDropdownItem>
            </NavDropdownMenu>
          </NavDropdown>
        </NavItemIcon>

        <NavItemIcon>
          <i className='bi bi-person'></i>
        </NavItemIcon>
        <NavItemIcon>
          <i className='bi bi-bag'></i>
        </NavItemIcon>
        <NavItemIcon>
          <i className='bi bi-heart'></i>
        </NavItemIcon>
      </Nav>
    </NavBar>
  );
};

export default Header;
