import styled from "styled-components";

export const ProductImage = styled.img`
  width: 100%;
  height: 100%;
  cursor: pointer;
 
`;

export const ProductMiniImage = styled.img`
  width: 50px;
  height: 50px;
  display: block;
  border: 1px solid var(--gray-color);
  cursor: pointer;
  margin-bottom: 3px;
  :hover {
    opacity: 0.5;
  }
`;
