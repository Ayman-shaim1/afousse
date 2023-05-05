import styled from "styled-components";

export const Tabs = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;
export const Tab = styled.div`
  width: 100%;
`;
export const TabTitle = styled.h5`
  margin-left: 5px;
  margin-right: 5px;
  padding: 16px 18px;
  text-align: center;
  cursor: pointer;

  &:hover {
    background-color: var(--light-gray-color);
  }
`;

export const TabContent = styled.div`
  width: 100%;
  display: ${(props) => (props.active ? "block" : "none")};
`;
