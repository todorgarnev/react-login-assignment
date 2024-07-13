import { FunctionComponent, PropsWithChildren } from "react";
import { UseFormRegister } from "react-hook-form";
import { LoginForm } from "@/types";
import { InputWrapper } from "./styles";

type InputProps = PropsWithChildren & {
  label: string;
  name: "email" | "password";
  register: UseFormRegister<LoginForm>;
  type: "email" | "password";
};

export const Input: FunctionComponent<InputProps> = ({ label, name, register, type }) => {
  return (
    <InputWrapper>
      <label htmlFor={name}>{label}</label>
      <input id={name} type={type} {...register(name)} />
    </InputWrapper>
  );
};
