import React, { useState } from "react";
import {
  Alert,
  Breadcrumb,
  BreadcrumbItem,
  Button,
  ButtonLink,
  Column,
  Divider,
  Flex,
  ImagePopup,
  Margin,
  Row,
} from "../components/ui";
import image from "../assets/images/product.png";
import { ColorPicker, Rating } from "../components";
import { ProductImage, ProductMiniImage } from "./styles/ProductDetails.styled";

const ProductDetails = () => {
  const [color, setColor] = useState("");
  const [showImgPp, setShowImgPp] = useState(false);
  const [imgPp, setImgPp] = useState(null);

  const showImagePPHandler = (e) => {
    setImgPp(e.target.src);
    setShowImgPp(true);
  };

  return (
    <>
      <Breadcrumb>
        <BreadcrumbItem to="/home">Home</BreadcrumbItem>
        <BreadcrumbItem to="/shop">Shop</BreadcrumbItem>
        <BreadcrumbItem>Product details</BreadcrumbItem>
      </Breadcrumb>
      <ImagePopup
        image={imgPp}
        show={showImgPp}
        onClose={() => setShowImgPp(false)}
      />
      <Margin bottom={"30"}>
        <ButtonLink to="/shop" color="white">
          go back
        </ButtonLink>
      </Margin>
      <Row>
        <Column xl={6} lg={6} md={6} sm={12} xs={12}>
          <Flex>
            <Flex flexDirection={"column"}>
              <ProductMiniImage src={image} alt="product" />
              <ProductMiniImage src={image} alt="product" />
              <ProductMiniImage src={image} alt="product" />
              <ProductMiniImage src={image} alt="product" />
              <ProductMiniImage src={image} alt="product" />
              <ProductMiniImage src={image} alt="product" />
            </Flex>
            <ProductImage
              onClick={showImagePPHandler}
              src={image}
              alt="product"
              style={{ width: "100%", height: "100%" }}
            />
          </Flex>
        </Column>
        <Column xl={6} lg={6} md={6} sm={12} xs={12}>
          <Flex alignItems={"center"} justifyContent={"space-between"}>
            <h2> Lorem ipsum dolor sit amet.</h2>
            <Rating value={4} text={"from 1000 users"} />
          </Flex>
          <Flex alignItems={"center"}>
            <h1>Price: </h1>
            <Margin left={10}>
              <h1 style={{ color: "var(--dark-gray-color)" }}>199.9 DH</h1>
            </Margin>
          </Flex>
          <Divider />
          <h5>Description</h5>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque et,
            illum quidem ea modi tenetur ducimus mollitia aliquid odit aliquam
            quisquam sunt alias facere, tempore expedita veritatis laborum
            obcaecati facilis?
          </p>
          <Divider />
          <h5>Color</h5>
          <ColorPicker
            color={color}
            pickColor={setColor}
            colors={[
              "var(--secondary-color)",
              "var(--red-color)",
              "var(--green-color)",
              "var(--info-color)",
              "var(--yellow-color)",
            ]}
          />
          <h5>Quantity</h5>
          <Divider />
          <Button block>Add to card</Button>
          <Alert type={"gray"}>
            <h5 style={{ color: "var(--primary-color)" }}>Livraison</h5>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
              et, illum quidem ea modi tenetur ducimus mollitia aliquid odit
              aliquam quisquam sunt alias facere, tempore expedita veritatis
              laborum obcaecati facilis?
            </p>
            <Divider />
            <h5 style={{ color: "var(--primary-color)" }}>
              Lorem ipsum dolor sit
            </h5>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
              et, illum quidem ea modi tenetur ducimus mollitia aliquid odit
              aliquam quisquam sunt alias facere, tempore expedita veritatis
              laborum obcaecati facilis?
            </p>
          </Alert>
        </Column>
      </Row>
      <Row>
        <Column xl={6} lg={6} md={6} sm={12} xs={12}>
          
        </Column>
        <Column xl={6} lg={6} md={6} sm={12} xs={12}></Column>
      </Row>
    </>
  );
};

export default ProductDetails;
