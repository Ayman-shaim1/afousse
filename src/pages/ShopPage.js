import React from "react";
import { Breadcrumb, BreadcrumbItem, Column, Row } from "../components/ui";
import { Product } from "../components";
import { v4 as uuid } from "uuid";

const productData = [
  {
    id: uuid(),
    name: "Lorem ipsum dolor ",
    price: 199.9,
    image: require("../assets/images/product.png"),
  },
  {
    id: uuid(),
    name: "Lorem ipsum dolor ",
    price: 199.9,
    image: require("../assets/images/product.png"),
  },
  {
    id: uuid(),
    name: "Lorem ipsum dolor ",
    price: 199.9,
    image: require("../assets/images/product.png"),
  },
  {
    id: uuid(),
    name: "Lorem ipsum dolor ",
    price: 199.9,
    image: require("../assets/images/product.png"),
  },
  {
    id: uuid(),
    name: "Lorem ipsum dolor ",
    price: 199.9,
    image: require("../assets/images/product.png"),
  },
  {
    id: uuid(),
    name: "Lorem ipsum dolor ",
    price: 199.9,
    image: require("../assets/images/product.png"),
  },
  {
    id: uuid(),
    name: "Lorem ipsum dolor ",
    price: 199.9,
    image: require("../assets/images/product.png"),
  },
  {
    id: uuid(),
    name: "Lorem ipsum dolor ",
    price: 199.9,
    image: require("../assets/images/product.png"),
  },
  {
    id: uuid(),
    name: "Lorem ipsum dolor ",
    price: 199.9,
    image: require("../assets/images/product.png"),
  },
  {
    id: uuid(),
    name: "Lorem ipsum dolor ",
    price: 199.9,
    image: require("../assets/images/product.png"),
  },
  {
    id: uuid(),
    name: "Lorem ipsum dolor ",
    price: 199.9,
    image: require("../assets/images/product.png"),
  },
  {
    id: uuid(),
    name: "Lorem ipsum dolor ",
    price: 199.9,
    image: require("../assets/images/product.png"),
  },
  {
    id: uuid(),
    name: "Lorem ipsum dolor ",
    price: 199.9,
    image: require("../assets/images/product.png"),
  },
  {
    id: uuid(),
    name: "Lorem ipsum dolor ",
    price: 199.9,
    image: require("../assets/images/product.png"),
  },
  {
    id: uuid(),
    name: "Lorem ipsum dolor ",
    price: 199.9,
    image: require("../assets/images/product.png"),
  },
  {
    id: uuid(),
    name: "Lorem ipsum dolor ",
    price: 199.9,
    image: require("../assets/images/product.png"),
  },
  {
    id: uuid(),
    name: "Lorem ipsum dolor ",
    price: 199.9,
    image: require("../assets/images/product.png"),
  },
  {
    id: uuid(),
    name: "Lorem ipsum dolor ",
    price: 199.9,
    image: require("../assets/images/product.png"),
  },
  {
    id: uuid(),
    name: "Lorem ipsum dolor ",
    price: 199.9,
    image: require("../assets/images/product.png"),
  },
  {
    id: uuid(),
    name: "Lorem ipsum dolor ",
    price: 199.9,
    image: require("../assets/images/product.png"),
  },
];

const ShopPage = () => {
  return (
    <>
      <Breadcrumb>
        <BreadcrumbItem to="/home">Home</BreadcrumbItem>
        <BreadcrumbItem>Shop</BreadcrumbItem>
      </Breadcrumb>
      <Row>
        {productData.map((product) => (
          <Column xl={3} lg={4} md={6} sm={12} xs={12} key={product.id}>
            <Product product={product} />
          </Column>
        ))}
      </Row>
    </>
  );
};

export default ShopPage;
