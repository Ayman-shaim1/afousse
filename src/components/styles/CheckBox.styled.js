import styled from "styled-components";

const FormLabel = styled.label`
  font-size: 15px;
`;

const StyledFormCheckContainer = styled.div`
  display: flex;
  align-items: center;
`;

const StyledFormCheckLabel = styled(FormLabel)`
  user-select: none;
  position: relative;
  padding-left: 25px;
  padding-top: 3px;

  &::before {
    content: "";
    width: 17px;
    height: 17px;
    border: 1px solid lightgray;
    position: absolute;
    left: 0;
    top: 3px;
  }
  &::after {
    font-family: "FontAwesome";
    content: "\f00c";
    position: absolute;
    left: 0;
    top: 2px;
    width: 17px;
    height: 17px;
    background-color: var(--primary-color);
    color: #fff;
    font-size: 13px;
    text-align: center;
    padding: 1px;
    padding-top: 3px;
    display: none;
  }
`;

const StyledFormCheck = styled.input.attrs({ type: "checkbox" })`
  --webkit-appearance: none;
  appearance: none;
  width: 17px;
  height: 17px;
  position: absolute;
  z-index: 100;
  cursor: pointer;
  &:checked + label {
    &::after {
      display: block;
    }
  }
`;

export const CheckBox = ({ label, ...otherProps }) => {
  return (
    <StyledFormCheckContainer>
      <StyledFormCheck {...otherProps} />
      <StyledFormCheckLabel>{label}</StyledFormCheckLabel>
    </StyledFormCheckContainer>
  );
};
