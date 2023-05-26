import React, { useState } from "react";
// import { PriceSliderContainer, RangeSlider } from "./styles/PriceSlider.styled";

const PriceSlider = () => {
  const [minPrice, setMinPrice] = useState(1000);
  const [maxPrice, setMaxPrice] = useState(3000);

  const handleMinPriceChange = (e) => {
    if(e.target.value < maxPrice)
    setMinPrice(parseInt(e.target.value));
  };

  const handleMaxPriceChange = (e) => {
    if(e.target.value > minPrice)
    setMaxPrice(parseInt(e.target.value));
  };

  return (
    <>
      <small>min:{minPrice} DH</small>
      <br />
      <small>max:{maxPrice} DH</small>
      <br />
      <div class="range-slider">
        <input
          type="range"
          class="min-price"
          value={minPrice}
          onChange={handleMinPriceChange}
          min="10"
          max="5000"
          step="10"
        />
        <input
          type="range"
          class="max-price"
          value={maxPrice}
          onChange={handleMaxPriceChange}
          min="10"
          max="5000"
          step="10"
        />
      </div>
    </>
  );
};

export default PriceSlider;
