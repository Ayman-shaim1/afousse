import React from "react";
import {
  Nav,
  NavBar,
  NavItem,
  NavLogoLink,
  NavItemIcon,
} from "./styles/Header.styled";

import { Dropdown, DropdownItem, DropdownMenu } from "./styles/Dropdown.styled";

const Header = () => {
  return (
    <NavBar>
      <Nav>
        <NavItem>Home</NavItem>
        <NavItem>Shop</NavItem>
      </Nav>
      <NavLogoLink>Afousse</NavLogoLink>
      <Nav>
        <NavItemIcon>
          <i className="bi bi-person"></i>
        </NavItemIcon>
        <NavItemIcon>
          <i className="bi bi-bag"></i>
        </NavItemIcon>
        <NavItemIcon>
          <i className="bi bi-heart"></i>
        </NavItemIcon>

        <NavItemIcon>
          <Dropdown>
            <i className="bi bi-globe"></i>
            <DropdownMenu>
              <DropdownItem>English</DropdownItem>
              <DropdownItem>Arabe</DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </NavItemIcon>
      </Nav>
    </NavBar>
  );
};

export default Header;
