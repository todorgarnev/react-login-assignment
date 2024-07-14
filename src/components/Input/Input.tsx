import { FunctionComponent, PropsWithChildren } from "react";
import { FieldError, UseFormRegister } from "react-hook-form";
import { ForgotPasswordForm, LoginForm } from "@/types";
import { CustomInput, InputWrapper } from "./styles";

type InputProps = PropsWithChildren & {
  label: string;
  name: "email" | "password";
  error: FieldError | undefined;
  register: UseFormRegister<LoginForm | ForgotPasswordForm>;
};

export const Input: FunctionComponent<InputProps> = ({ label, name, error, register }) => {
  return (
    <InputWrapper>
      <label htmlFor={name}>{label}</label>

      <CustomInput id={name} type={name} $hasError={!!error} {...register(name)} />

      {error && <span>{error.message}</span>}
    </InputWrapper>
  );
};
