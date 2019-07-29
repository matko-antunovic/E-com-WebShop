import React from "react";
import {CustomButtonContainer} from "./CustomButtonStyles"
const Button = (props) => {
  return (
    <CustomButtonContainer {...props}>
      {props.children}
    </CustomButtonContainer>
  );
};

export default Button;
