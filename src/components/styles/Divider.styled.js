import styled from "styled-components";

export const Divider = styled.div`
  position: relative;
  height: 1px;
  width: 100%;
  background-color: var(--gray-color);
  margin: 15px 0;
`;

export const DividerOr = styled.span`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: var(--white-color);
  padding: 5px 7px;
  font-size:13px;
`;
