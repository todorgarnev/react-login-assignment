import { FunctionComponent, PropsWithChildren } from "react";
import { InputWrapper } from "./styles";

type InputProps = PropsWithChildren & {
  label: string;
  type: "email" | "password";
};

export const Input: FunctionComponent<InputProps> = ({ label, type }) => {
  return (
    <InputWrapper>
      <label>{label}</label>
      <input type={type} />
    </InputWrapper>
  );
};
