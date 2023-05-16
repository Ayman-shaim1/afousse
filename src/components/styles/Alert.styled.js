import styled from "styled-components";

export const Alert = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  background-color: ${(props) =>
    props.type ? `var(--${props.type}-color)` : ``};
  border-radius: 5px;
`;
export const AlertContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: ${(props) =>
    props.type ? `var(--light-${props.type}-color)` : ``};
  height: 100%;
  width: 99.5%;
  padding: 10px 14px;
  border-radius: 0 5px 5px 0;
`;
export const AlertIcon = styled.span`
  margin-right: 20px;
  font-size: 20px;
  color: ${(props) =>
    props.type ? `var(--very-dark-${props.type}-color)` : ``};
`;
export const AlertText = styled.p`
  color: ${(props) =>
    props.type ? `var(--very-dark-${props.type}-color)` : ``};
`;
