import { FunctionComponent } from "react";
import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { SubmitHandler, useForm, useWatch } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTranslation } from "react-i18next";
import { Button, Input, Loader } from "@/components";
import { axios } from "@/utils";
import { FormWrapper, Header } from "@/styles";
import { BtnVariant, LoginForm, LoginSchema } from "@/types";
import { ServerError } from "./styles";

export const Login: FunctionComponent = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
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
      <Header>{t("login")}</Header>

      <FormWrapper onSubmit={handleSubmit(onSubmit)} noValidate>
        {submitLogin.isPending ? (
          <Loader />
        ) : (
          <>
            <Input name="email" label="Email" error={errors.email} register={register} />
            <Input name="password" label="Password" error={errors.password} register={register} />

            {submitLogin.isError && <ServerError>Invalid credentials</ServerError>}
          </>
        )}

        <Button
          type="submit"
          variant={BtnVariant.BTN}
          isDisabled={!emailValue || !passwordValue || submitLogin.isPending}
        >
          Submit
        </Button>
      </FormWrapper>

      <Button variant={BtnVariant.TEXT} clickHandler={() => navigate("/forgot-password")}>
        Forgot password
      </Button>
    </>
  );
};
