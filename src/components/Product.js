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
import { Button, Flex, Margin } from "./ui";
import { Link } from "react-router-dom";
import Rating from "./Rating";

const Product = ({ product }) => {
  return (
    <StyledProduct>
      <ProductImageContainer to={`/product-details/${product.id}`}>
        <ProductImage src={product.image} alt="product" />
      </ProductImageContainer>
      <ProductInfoContainer>
        <ProductInfo>
          <ProductName>{product.name}</ProductName>
          <ProductPrice>{product.price} DH</ProductPrice>
        </ProductInfo>
        <ProductInfoFavButton />
      </ProductInfoContainer>
      <Margin top={10}>
        <Flex horizontal justifyContent={"space-between"}>
          <Rating value={product.rating} />
          <Link to={`/product-details/${product.id}`}>
            <small>view details</small>
          </Link>
        </Flex>
      </Margin>
      <Button color="white" block>
        Add to cart
      </Button>
    </StyledProduct>
  );
};

export default Product;
