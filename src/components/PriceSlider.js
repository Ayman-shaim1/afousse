import {
  RangeSlider,
  PriceSlider as SCPriceSlider,
} from "./styles/PriceSlider.styled";

const PriceSlider = ({
  minPrice = 1000,
  maxPrice = 3000,
  minPriceChange,
  maxPriceChange,
}) => {
  const handleMinPriceChange = (e) => {
    if (e.target.value < maxPrice) minPriceChange(parseInt(e.target.value));
  };

  const handleMaxPriceChange = (e) => {
    if (e.target.value > minPrice) maxPriceChange(parseInt(e.target.value));
  };

  return (
    <>
      <small>min:{minPrice} DH</small>
      <br />
      <small>max:{maxPrice} DH</small>
      <br />
      <RangeSlider>
        <SCPriceSlider
          value={minPrice}
          onChange={handleMinPriceChange}
          min="10"
          max="5000"
          step="10"
        />
        <SCPriceSlider
          value={maxPrice}
          onChange={handleMaxPriceChange}
          min="10"
          max="5000"
          step="10"
        />
      </RangeSlider>
    </>
  );
};

export default PriceSlider;
