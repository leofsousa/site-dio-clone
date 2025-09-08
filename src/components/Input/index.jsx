import React from "react";
import { IconContainer, InputContainer, InputText } from "./styles";
import { Controller } from "react-hook-form";
import { ErrorText } from "./styles";

const Input = ({ leftIcon, control, errorMessage, name, ...rest }) => {
  return (
    <>
      <InputContainer>
        {leftIcon ? <IconContainer>{leftIcon}</IconContainer> : null}
        <Controller
          name={name}
          control={control}
          rules={{ required: true }}
          render={({ field }) => <InputText {...field} {...rest} />}
        />
      </InputContainer>
      {errorMessage ? <ErrorText>{errorMessage}</ErrorText> : null}
    </>
  );
};
export { Input };
