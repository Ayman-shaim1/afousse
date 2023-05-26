import React from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  Column,
  Container,
  Row,
  Flex,
  Margin,
  Input,
  Alert,
} from "../components/ui";
import { Product, PriceSlider } from "../components";
import { v4 as uuid } from "uuid";
import { Link } from "react-router-dom";

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
    <Container>
      <Breadcrumb>
        <BreadcrumbItem to="/home">Home</BreadcrumbItem>
        <BreadcrumbItem>Shop</BreadcrumbItem>
      </Breadcrumb>
      <Alert type={"info"}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis unde
        sed amet magnam incidunt voluptatibus reiciendis facilis, porro
        laudantium cum voluptates! Placeat illo explicabo sapiente quod,
        expedita aspernatur itaque quasi.Lorem ipsum dolor, sit amet consectetur
        adipisicing elit. Officiis unde sed amet magnam incidunt voluptatibus
        reiciendis facilis, porro laudantium cum voluptates! Placeat illo
        explicabo sapiente quod, expedita aspernatur itaque quasi.
      </Alert>
      <Row>
        <Column xl={6} lg={6} md={6} sm={12} xs={12}></Column>
        <Column xl={6} lg={6} md={6} sm={12} xs={12}>
          <Input placeholder="search for product here ..." />
        </Column>
      </Row>
      <Row>
        <Column xl={3} lg={3} md={3} sm={12} xs={12}>
          <div>
            <h5>Category</h5>
            <Flex flexDirection="column">
              <Margin top={"5"} bottom={"5"}>
                <Link>Tode bag</Link>
              </Margin>
              <Margin top={"5"} bottom={"5"}>
                <Link>Tableau</Link>
              </Margin>
              <Margin top={"5"} bottom={"5"}>
                <Link>T-shirt</Link>
              </Margin>
            </Flex>
          </div>
          <div>
            <h5>Color</h5>
            <Row></Row>
          </div>
          <div>
            <h5>Price</h5>
            <PriceSlider />
          </div>
          <div>
            <h5>Size</h5>
          </div>
        </Column>
        <Column xl={9} lg={9} md={9} sm={12} xs={12}>
          <Row>
            {productData.map((product) => (
              <Column xl={4} lg={4} md={6} sm={12} xs={12} key={product.id}>
                <Product product={product} />
              </Column>
            ))}
          </Row>
        </Column>
      </Row>
    </Container>
  );
};

export default ShopPage;
