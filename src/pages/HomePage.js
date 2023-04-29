import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <>
      <h1 className='title'>Hello World</h1>
      <h1>Hello World</h1>
      <h2>Hello World</h2>
      <h3>Hello World</h3>
      <h4>Hello World</h4>
      <Link to="/">Hello world</Link>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus
        vero, impedit incidunt voluptas ut quia voluptate? Fugiat repudiandae
        vitae maxime quisquam reprehenderit facilis sequi ipsum ipsa delectus
        pariatur. Quisquam, saepe?
      </p>
    </>
  );
};

export default HomePage;
