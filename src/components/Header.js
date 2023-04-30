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
      <NavLogoLink to='/'>Afousse</NavLogoLink>
      <Nav>
        <NavItem to='/home'>Home</NavItem>
        <NavItem to='/shop'>Shop</NavItem>
        <NavItem to='/shop/men'>Men</NavItem>
        <NavItem to='/shop/men'>Women</NavItem>
        <NavItem to='/shop/men'>Contact</NavItem>
      </Nav>
      <Nav>
        <NavItemIcon>
          <i className='bi bi-search'></i>
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
        <NavDropdown>
          <NavItemIcon>
            <i className='bi bi-globe'></i>
            <NavDropdownMenu>
              <NavDropdownItem to='/english'>English</NavDropdownItem>
              <NavDropdownItem to='/arabe'>Arabe</NavDropdownItem>
            </NavDropdownMenu>
          </NavItemIcon>
        </NavDropdown>
      </Nav>
      <Nav>
      
        <NavItemIcon>
          <i className='bi bi-bag'></i>
        </NavItemIcon>
        <NavDropdown>
          <NavItemIcon>
            <i className='bi bi-globe'></i>
            <NavDropdownMenu>
              <NavDropdownItem to='/english'>English</NavDropdownItem>
              <NavDropdownItem to='/arabe'>Arabe</NavDropdownItem>
            </NavDropdownMenu>
          </NavItemIcon>
        </NavDropdown>
      </Nav>
    </NavBar>
  );
};

export default Header;
