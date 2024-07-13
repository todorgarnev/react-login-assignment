import { FunctionComponent, PropsWithChildren } from "react";
import { FieldError, UseFormRegister } from "react-hook-form";
import { LoginForm } from "@/types";
import { InputWrapper } from "./styles";

type InputProps = PropsWithChildren & {
  label: string;
  name: "email" | "password";
  error: FieldError | undefined;
  register: UseFormRegister<LoginForm>;
};

export const Input: FunctionComponent<InputProps> = ({ label, name, error, register }) => {
  return (
    <InputWrapper>
      <label htmlFor={name}>{label}</label>

      <input id={name} type={name} {...register(name)} />

      {error && <span>{error.message}</span>}
    </InputWrapper>
  );
};
