import { FunctionComponent } from "react";
import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { SubmitHandler, useForm, useWatch } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Input } from "@/components";
import { axios } from "@/utils";
import { Header } from "@/styles";
import { LoginForm, LoginSchema } from "@/types";
import { FormWrapper, ServerError } from "./styles";

export const Login: FunctionComponent = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<LoginForm>({
    resolver: zodResolver(LoginSchema),
  });
  const emailValue = useWatch({ control, name: "email" });
  const passwordValue = useWatch({ control, name: "password" });

  const submitLogin = useMutation({
    mutationFn: (userLogin: LoginForm) => axios.post("/login", userLogin),
    onSuccess: () => {
      navigate("/success");
    },
  });

  const onSubmit: SubmitHandler<LoginForm> = ({ email, password }) => {
    submitLogin.mutate({ email, password });
  };

  return (
    <>
      <Header>Login</Header>

      {submitLogin.isPending ? (
        "Loading..."
      ) : (
        <FormWrapper onSubmit={handleSubmit(onSubmit)} noValidate>
          <Input name="email" label="Email" error={errors.email} register={register} />
          <Input name="password" label="Password" error={errors.password} register={register} />

          {submitLogin.isError && <ServerError>Invalid credentials</ServerError>}

          <Button type="submit" variant="primary" isDisabled={!emailValue || !passwordValue}>
            Submit
          </Button>
        </FormWrapper>
      )}
    </>
  );
};
