import styled from "styled-components";

export const ColorPickerContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
`;

export const ColorPickerItem = styled.span`
  width: 30px;
  height: 30px;
  margin: 5px;
  border-radius: 50%;
  display: block;
  border: 1px solid var(--dark-gray-color);
  background-color: ${(props) =>
    props.color ? `${props.color}` : "var(--white-color)"};
  cursor: pointer;
  :hover {
    transform: scale(0.96);
    opacity: 0.8;
  }
`;
