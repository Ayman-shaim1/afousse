import styled from "styled-components";

export const SearchBtnClose = styled.span`
  position: absolute;
  top: 2%;
  right: 1%;
  color: var(--dark-gray-color);
  cursor: pointer;
  font-size: 18px;
  padding: 20px;
  border-radius: 50%;
  &:hover {
    background-color: var(--light-gray-color);
  }
`;

export const SearchContainer = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: white;
  z-index: 5000;
  display: flex;
  justify-content: center;
  align-items: center;
  display: ${(props) => (props.show ? "block" : "none")};
`;

export const SearchInputContainer = styled.div`
  position: relative;
  display:block;
  width: 800px;
`;

export const SearchInput = styled.input`
  border: none;
  border-bottom: 1px solid var(--dark-gray-color);
  width: 100%;
  outline: none;
  padding: 18px 30px 18px 5px;
  font-size: 18px;
`;

export const SearchInputIcon = styled.span`
  position: absolute;
  top: 32%;
  right: 0;
  color: var(--dark-gray-color);
  cursor: pointer;
  &:hover {
    color: var(--gray-color);
  }
`;