import React from "react";
import {FormConatiner,FormInputLabelStyles,FormInputStyles} from "./FormInputStyles"

const FormInput = (props) => {

 const{ handleChange, label }=props;
  return (
    <FormConatiner>
      <FormInputStyles onChange={handleChange} {...props} />
      {label ? (
        <FormInputLabelStyles className={props.value.length ? 'shrink' : ''} >{label}</FormInputLabelStyles>
      ) : null}
    </FormConatiner>
  );
};

export default FormInput;
