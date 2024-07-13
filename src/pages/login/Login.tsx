import { FunctionComponent } from "react";
import { useMutation } from "@tanstack/react-query";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Input } from "@/components";
import { axios } from "@/utils";
import { Header } from "@/styles";
import { LoginForm, LoginSchema } from "@/types";
import { FormWrapper } from "./styles";
import { useNavigate } from "react-router-dom";

export const Login: FunctionComponent = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginForm>({
    resolver: zodResolver(LoginSchema),
  });
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

          <Button type="submit" variant="primary">
            Submit
          </Button>
        </FormWrapper>
      )}
    </>
  );
};
