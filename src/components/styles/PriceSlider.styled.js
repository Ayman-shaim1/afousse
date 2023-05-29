import styled from "styled-components";

export const RangeSlider = styled.div`
  width: 100%;
  position: relative;
  margin: 15px 0 30px 0;
`;

const StyledPriceSlider = styled.input`
  -webkit-appearance: none;
  width: 70%;
  background: transparent;
  position: absolute;
  left: 0;

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    height: 15px;
    width: 15px;
    border-radius: 50%;
    background: var(--primary-color);
    cursor: pointer;
    margin-top: -5px;
    position: relative;
    z-index: 1;
  }

  &::-webkit-slider-runnable-track {
    width: 90%;
    height: 5px;
    background: #e8e8e8;
    border-radius: 3px;
    border: none;
  }
`;

export const PriceSlider = ({ ...otherProps }) => (
  <StyledPriceSlider type="range" {...otherProps} />
);
