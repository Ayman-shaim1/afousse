import { useState } from "react";
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

export const ProductInfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const ProductInfo = styled.div``;

const StyledProductInfoFavButton = styled.button`
  background-color: white;
  border: none;
  outline: none;
  cursor: pointer;
  .red {
    color:var(--red-color);
  }
`;

export const ProductInfoFavButton = ({ ...otherProps }) => {
  const [className, setClassName] = useState("bi bi-heart");

  return (
    <StyledProductInfoFavButton
      {...otherProps}
      onMouseOver={() => setClassName("bi bi-heart-fill red")}
      onMouseLeave={() => setClassName("bi bi-heart ")}
    >
      <i className={className}></i>
    </StyledProductInfoFavButton>
  );
};
