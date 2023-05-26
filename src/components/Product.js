import React from "react";
import {
  Product as StyledProduct,
  ProductImage,
  ProductName,
  ProductPrice,
  ProductImageContainer,
  ProductInfoContainer,
  ProductInfo,
  ProductInfoFavButton,
} from "./styles/Product.styled";
import { Button } from "./ui";

const Product = ({ product }) => {
  return (
    <StyledProduct>
      <ProductImageContainer>
        <ProductImage src={product.image} alt="product" />
      </ProductImageContainer>
      <ProductInfoContainer>
        <ProductInfo>
          <ProductName>{product.name}</ProductName>
          <ProductPrice>{product.price} DH</ProductPrice>
        </ProductInfo>
        <ProductInfoFavButton></ProductInfoFavButton>
      </ProductInfoContainer>
      <Button color="white" block>
        Add to cart
      </Button>
    </StyledProduct>
  );
};

export default Product;
