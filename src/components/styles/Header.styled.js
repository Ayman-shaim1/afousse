import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";
// import React, { useEffect, useRef, useState } from "react";

const progressAnimation = keyframes`
  from {
    width:0 ;
  }
  to {
    width:100%;
  }
`;

export const NavBar = styled.nav`
  background: transparent;
  display: flex;
  align-content: center;
  justify-content: space-around;
  padding: 30px 0;
  width: 100%;

  & > :nth-child(4) {
    display: none;
  }

  @media (max-width: 1200px) {
    justify-content: space-between;
    & > :nth-child(2) {
      flex-direction: column;
      display: ${(props) => (props.show ? "flex" : "none")};
    }
    & > :nth-child(3) {
      flex-direction: column;
      display: none;
    }
    & > :nth-child(4) {
      display: flex;
    }
  }
`;

export const Nav = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const NavItem = styled(Link)`
  margin: 0 10px;
  color: var(--black-color);
  text-decoration: none;
  text-transform: uppercase;
  text-align: center;
  font-weight: bold;
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
  font-size: 30px;
  text-transform: uppercase;
  color: var(--black-color);
  text-decoration: none;
  cursor: pointer;
  padding: 0;
`;

export const NavLogo = styled.img`
  width: 55px;
  height: 55px;
  border-radius: 50%;
`;

export const NavItemIcon = styled.a`
  margin: 0 12px;
  font-size: 18px;
  font-weight: bold;
  color: var(--dark-gray-color);
  text-decoration: none;
  text-transform: uppercase;
  transition: 0.1s;
  cursor: pointer;
  &:hover {
    color: var(--black-color);
  }
`;

export const NavDropdown = styled.div`
  position: relative;
  &:hover div {
    display: block;
  }
`;

export const NavDropdownMenu = styled.div`
  position: absolute;
  right: -60%;
  display: none;
  width: 150px;
  border: 1px solid var(--gray-color);
  padding: 0;
  margin-top: 5px;
  /* transform: translateX(-30%); */
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

export const NavBtnToggleMenu = styled.button`
  display: block;
  font-size: 20px;
  color: var(--dark-gray-color);
  /* background-color: var(--white-color); */
  background: transparent;
  border-radius: 50%;
  width: 50px;
  height: 50px;

  border: none;
  cursor: pointer;
  /* padding: 10px 15px; */
  &:hover {
    background-color: var(--light-gray-color);
  }
`;
