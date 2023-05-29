import React, { useState } from "react";
import {
  Alert,
  Button,
  ButtonLink,
  Column,
  Divider,
  Flex,
  Margin,
  Row,
} from "../components/ui";
import image from "../assets/images/product.png";
import { ColorPicker, Rating } from "../components";

const ProductDetails = () => {
  const [color, setColor] = useState("");

  return (
    <>
      <ButtonLink to="/shop" color="white">
        go back
      </ButtonLink>
      <Row>
        <Column xl={6} lg={6} md={6} sm={12} xs={12}>
          <img
            src={image}
            alt="product"
            style={{ width: "100%", height: "100%" }}
          />
        </Column>
        <Column xl={6} lg={6} md={6} sm={12} xs={12}>
          <Flex alignItems={"center"} justifyContent={"space-between"}>
            <h5> Lorem ipsum dolor sit amet.</h5>
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

          <Button block> add to card</Button>
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
    </>
  );
};

export default ProductDetails;
