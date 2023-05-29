import React, { useState } from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  Column,
  Row,
  Flex,
  Margin,
  Input,
  Alert,
} from "../components/ui";
import { Product, PriceSlider, ColorPicker } from "../components";
import { v4 as uuid } from "uuid";
import { Link } from "react-router-dom";

const productData = [
  {
    id: uuid(),
    name: "Lorem ipsum dolor ",
    price: 199.9,
    image: require("../assets/images/product.png"),
    rating: 3,
  },
  {
    id: uuid(),
    name: "Lorem ipsum dolor ",
    price: 199.9,
    image: require("../assets/images/product.png"),
    rating: 4.5,
  },
  {
    id: uuid(),
    name: "Lorem ipsum dolor ",
    price: 199.9,
    image: require("../assets/images/product.png"),
    rating: 4.5,
  },
  {
    id: uuid(),
    name: "Lorem ipsum dolor ",
    price: 199.9,
    image: require("../assets/images/product.png"),
    rating: 5,
  },
  {
    id: uuid(),
    name: "Lorem ipsum dolor ",
    price: 199.9,
    image: require("../assets/images/product.png"),
    rating: 4.5,
  },
  {
    id: uuid(),
    name: "Lorem ipsum dolor ",
    price: 199.9,
    image: require("../assets/images/product.png"),
    rating: 4.5,
  },
  {
    id: uuid(),
    name: "Lorem ipsum dolor ",
    price: 199.9,
    image: require("../assets/images/product.png"),
    rating: 4.5,
  },
  {
    id: uuid(),
    name: "Lorem ipsum dolor ",
    price: 199.9,
    image: require("../assets/images/product.png"),
    rating: 4.5,
  },
  {
    id: uuid(),
    name: "Lorem ipsum dolor ",
    price: 199.9,
    image: require("../assets/images/product.png"),
    rating: 4.5,
  },
  {
    id: uuid(),
    name: "Lorem ipsum dolor ",
    price: 199.9,
    image: require("../assets/images/product.png"),
    rating: 4.5,
  },
  {
    id: uuid(),
    name: "Lorem ipsum dolor ",
    price: 199.9,
    image: require("../assets/images/product.png"),
    rating: 4.5,
  },
  {
    id: uuid(),
    name: "Lorem ipsum dolor ",
    price: 199.9,
    image: require("../assets/images/product.png"),
    rating: 4.5,
  },
  {
    id: uuid(),
    name: "Lorem ipsum dolor ",
    price: 199.9,
    image: require("../assets/images/product.png"),
    rating: 4.5,
  },
  {
    id: uuid(),
    name: "Lorem ipsum dolor ",
    price: 199.9,
    image: require("../assets/images/product.png"),
    rating: 4.5,
  },
  {
    id: uuid(),
    name: "Lorem ipsum dolor ",
    price: 199.9,
    image: require("../assets/images/product.png"),
    rating: 4.5,
  },
  {
    id: uuid(),
    name: "Lorem ipsum dolor ",
    price: 199.9,
    image: require("../assets/images/product.png"),
    rating: 4.5,
  },
  {
    id: uuid(),
    name: "Lorem ipsum dolor ",
    price: 199.9,
    image: require("../assets/images/product.png"),
    rating: 4.5,
  },
  {
    id: uuid(),
    name: "Lorem ipsum dolor ",
    price: 199.9,
    image: require("../assets/images/product.png"),
    rating: 4.5,
  },
  {
    id: uuid(),
    name: "Lorem ipsum dolor ",
    price: 199.9,
    image: require("../assets/images/product.png"),
    rating: 4.5,
  },
  {
    id: uuid(),
    name: "Lorem ipsum dolor ",
    price: 199.9,
    image: require("../assets/images/product.png"),
    rating: 4.5,
  },
];

const ShopPage = () => {
  const [minPrice, setMinPrice] = useState(1000);
  const [maxPrice, setMaxPrice] = useState(3000);

  const [color, setColor] = useState("");

  return (
    <>
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
        <Column xl={3} lg={3} md={12} sm={12} xs={12}>
          <div>
            <h5>Category</h5>
            <Flex flexDirection="column">
              <Margin top={"5"} bottom={"5"}>
                <Link className="cat-link" to={"/shop?search=todebag"}>
                  Tode bag
                </Link>
              </Margin>
              <Margin top={"5"} bottom={"5"}>
                <Link className="cat-link" to={"/shop?search=tableaux"}>
                  Tableaux
                </Link>
              </Margin>
              <Margin top={"5"} bottom={"5"}>
                <Link className="cat-link" to={"/shop?search=t-shirt"}>
                  T-shirt
                </Link>
              </Margin>
            </Flex>
          </div>
          <div>
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
          </div>
          <div>
            <h5>Price</h5>
            <PriceSlider
              minPrice={minPrice}
              maxPrice={maxPrice}
              minPriceChange={setMinPrice}
              maxPriceChange={setMaxPrice}
            />
          </div>
          {/* <div>
            <h5>Size</h5>
          </div> */}
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
    </>
  );
};

export default ShopPage;
