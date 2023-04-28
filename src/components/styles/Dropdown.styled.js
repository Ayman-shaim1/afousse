import styled from "styled-components";

export const Dropdown = styled.div`
  position: relative;
`;

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
