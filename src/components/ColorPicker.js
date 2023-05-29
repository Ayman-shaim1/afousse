import React from "react";
import {
  ColorPickerContainer,
  ColorPickerItem,
} from "./styles/ColorPicker.styled";

const ColorPicker = ({ colors, pickColor }) => {
  
  const pickColorHandler = (color) => {
    pickColor(color);
  };

  return (
    <ColorPickerContainer>
      {colors &&
        colors.length > 0 &&
        colors.map((color, index) => (
          <ColorPickerItem
            key={index}
            color={color}
            onClick={() => pickColorHandler(color)}
          />
        ))}
    </ColorPickerContainer>
  );
};

export default ColorPicker;
