import styled from "styled-components";

export const Tabs = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  position: relative;
`;
export const Tab = styled.div`
  width: 100%;
`;
export const TabTitle = styled.h5`
  padding: 15px 18px;
  text-align: center;
  cursor: pointer;
  border-bottom: ${(props) =>
    props.active
      ? "2px solid var(--primary-color)"
      : "1px solid var(--gray-color)"};

  &:hover {
    background-color: ${(props) => !props.active && "var(--light-gray-color)"};
  }
`;

export const TabContent = styled.div`
  position: absolute;
  width: 100%;
  left: 0;
  display: ${(props) => (props.active ? "block" : "none")};
  z-index: 100;
`;
