import { FunctionComponent, PropsWithChildren } from "react";
import { FieldError, UseFormRegister } from "react-hook-form";
import { ForgotPasswordForm, LoginForm } from "@/types";
import { CustomInput, InputWrapper } from "./styles";

type InputProps = PropsWithChildren & {
  label: string;
  name: "email" | "password";
  hasValue: boolean;
  error: FieldError | undefined;
  register: UseFormRegister<LoginForm | ForgotPasswordForm>;
};

export const Input: FunctionComponent<InputProps> = ({
  label,
  name,
  hasValue,
  error,
  register,
}) => (
  <InputWrapper>
    <CustomInput
      id={name}
      type={name}
      $hasError={!!error}
      $hasValue={hasValue}
      {...register(name)}
    />

    <label htmlFor={name}>{label}</label>

    {error && <span>{error.message}</span>}
  </InputWrapper>
);
