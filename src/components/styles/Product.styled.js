import styled from "styled-components";

export const Product = styled.div`
  > button {
    padding: 13px 15px;
    font-size: 12px;
  }
`;
export const ProductImageContainer = styled.div`
  position: relative;
  width: 100%;
  z-index: 10;
`;
export const ProductImage = styled.img`
  width: 100%;
`;

export const ProductName = styled.span`
  display: block;
  font-size: 15px;
`;

export const ProductPrice = styled.small`
  margin-top: 5px;
  display: block;
  color: var(--dark-gray-color);
  font-weight: bold;
`;
