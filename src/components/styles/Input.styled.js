import styled from "styled-components";

export const Input = styled.input`
  padding: 14px 18px;
  border: none;
  background-color: var(--light-gray-color);
  outline: none;
  width: 100%;
  display: block;
  margin: 5px 0 10px 0;

  &:focus {
    color: #55595c;
    background-color: #f7f7f9;
    border-color: #8d8d8d;
    outline: 0;
    box-shadow: 0 0 0 0.25rem rgba(26, 26, 26, 0.25);
  }
`;
