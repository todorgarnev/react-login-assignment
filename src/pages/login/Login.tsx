import { FunctionComponent } from "react";
import { useMutation } from "@tanstack/react-query";
import { SubmitHandler, useForm } from "react-hook-form";
import { Button, Input } from "@/components";
import { axios } from "@/utils";
import { Header } from "@/styles";
import { LoginForm } from "./types";
import { FormWrapper } from "./styles";
import { useNavigate } from "react-router-dom";

export const Login: FunctionComponent = () => {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm<LoginForm>();
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

      <FormWrapper onSubmit={handleSubmit(onSubmit)}>
        <Input name="email" label="Email" type="email" register={register} />
        <Input name="password" label="Password" type="password" register={register} />

        <Button type="submit" variant="primary">
          Submit
        </Button>
      </FormWrapper>
    </>
  );
};
