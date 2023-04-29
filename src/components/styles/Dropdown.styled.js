import { useEffect, useRef, useState } from "react";
import styled from "styled-components";

const StyledDropdown = styled.div`
  position: relative;
  & > ul {
    display: ${props => (props.show ? "block" : "none")};
  }
`;

export const Dropdown = ({ children }) => {
  const [show, setShow] = useState(false);
  const showMenu = () => setShow(true);

  const dropdownRef = useRef(null);

  const closeMenu = e => {
    if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
      setShow(false);
    }
  };
  useEffect(() => {
    document.addEventListener("click", closeMenu);
    return () => {
      document.removeEventListener("click", closeMenu);
    };
  }, []);
  return (
    <StyledDropdown show={show} ref={dropdownRef} onClick={showMenu}>
      {children}
    </StyledDropdown>
  );
};

export const DropdownMenu = styled.ul`
  position: absolute;
  list-style: "";
  width: 180px;
  border: 1px solid var(--gray-color);
  padding: 0;
  margin-top: 10px;
  transform: translateX(-20%);
  background-color: #fff;
`;

const StyledDropdownItem = styled.li`
  padding: 15px;
  border-bottom: 1px solid var(--gray-color);
  &:hover {
    background-color: var(--light-gray-color);
  }
  &:last-child {
    border-bottom: none;
  }
`;

const DropdownLink = styled.a`
  font-size: 12px;
  font-weight: 500;
`;

export const DropdownItem = ({ children }) => (
  <StyledDropdownItem>
    <DropdownLink>{children}</DropdownLink>
  </StyledDropdownItem>
);
