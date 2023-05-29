import styled from "styled-components";

export const Alert = styled.div`
  background-color: ${(props) =>
    props.type ? `var(--bs-${props.type}-bg)` : ``};
  /* height: 100%; */
  width: 100%;
  padding: 20px 16px;
  z-index: 100;
  border: ${(props) =>
    props.type ? `1px var(--bs-${props.type}-border-color) solid` : ``};
  color: ${(props) => (props.type ? `var(--bs-${props.type}-color)` : ``)};
  border-radius: 2px;
`;
