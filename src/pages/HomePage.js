import React from "react";
import { Center, Search } from "../components/";

const HomePage = () => {
  return (
    <>
      <Search show={true} />
      <Center horizontal>
        <h1>Hello world</h1>
      </Center>
    </>
  );
};

export default HomePage;
