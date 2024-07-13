import { FunctionComponent, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { SubmitHandler, useForm } from "react-hook-form";
import { Button, Input } from "@/components";
import { axios } from "@/utils";
import { Header } from "@/styles";
import { LoginForm } from "./types";
import { FormWrapper } from "./styles";

export const Login: FunctionComponent = () => {
  const { register, handleSubmit } = useForm<LoginForm>();
  const { data, refetch } = useQuery({
    queryKey: ["submitLogin"],
    queryFn: ({ signal }) => axios("/login", { signal }).then((res: { data: string }) => res.data),
    enabled: false,
  });

  const onSubmit: SubmitHandler<LoginForm> = (data) => {
    console.log(data);
    // refetch();
  };

  useEffect(() => {
    console.log("data >>>: ", data);
  }, [data]);

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
