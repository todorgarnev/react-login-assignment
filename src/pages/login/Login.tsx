import { FunctionComponent } from "react";
import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { SubmitHandler, useForm, useWatch } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTranslation } from "react-i18next";
import { Button, Input, Loader } from "@/components";
import { useFormError } from "@/hooks";
import { axios } from "@/utils";
import { FormWrapper, Header } from "@/styles";
import { BtnVariant, Forms, FormsSchema } from "@/types";
import { ServerError } from "./styles";

export const Login: FunctionComponent = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<Forms>({
    resolver: zodResolver(FormsSchema),
  });
  const emailValue = useWatch({ control, name: "email" });
  const passwordValue = useWatch({ control, name: "password" });
  const { emailError, passwordError } = useFormError(errors);

  const submitLogin = useMutation({
    mutationFn: (userLogin: Forms) => axios.post("/login", userLogin),
    onSuccess: () => {
      navigate("/success");
    },
  });

  const onSubmit: SubmitHandler<Forms> = ({ email, password }) => {
    submitLogin.mutate({ email, password });
  };

  return (
    <>
      <Header>{t("titles.login")}</Header>

      <FormWrapper onSubmit={handleSubmit(onSubmit)} noValidate>
        {submitLogin.isPending ? (
          <Loader />
        ) : (
          <>
            <Input
              name="email"
              label={t("labels.email")}
              hasValue={!!emailValue}
              error={emailError}
              register={register}
            />
            <Input
              name="password"
              label={t("labels.password")}
              hasValue={!!passwordValue}
              error={passwordError}
              register={register}
            />

            {submitLogin.isError && <ServerError>{t("errors.invalidCredentials")}</ServerError>}
          </>
        )}

        <Button
          type="submit"
          variant={BtnVariant.BTN}
          isDisabled={!emailValue || !passwordValue || submitLogin.isPending}
        >
          {t("buttons.submit")}
        </Button>
      </FormWrapper>

      <Button variant={BtnVariant.TEXT} clickHandler={() => navigate("/forgot-password")}>
        {t("labels.forgotPassword")}
      </Button>
    </>
  );
};
