import { FunctionComponent } from "react";
import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { SubmitHandler, useForm, useWatch } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTranslation } from "react-i18next";
import { Button, Input, Loader } from "@/components";
import { useFormError } from "@/hooks";
import { axios } from "@/utils";
import { BtnVariant, Forms, FormsSchema } from "@/types";
import { FormWrapper, Header } from "@/styles";

export const ForgotPassword: FunctionComponent = () => {
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
  const { emailError } = useFormError(errors);

  const submitLogin = useMutation({
    mutationFn: (email: Forms) => axios.post("/reset-password", email),
    onSuccess: () => {
      navigate("/success", { state: emailValue });
    },
  });

  const onSubmit: SubmitHandler<Forms> = ({ email }) => {
    submitLogin.mutate({ email });
  };

  return (
    <>
      <Header>{t("titles.changePassword")}</Header>

      <FormWrapper onSubmit={handleSubmit(onSubmit)} noValidate>
        {submitLogin.isPending ? (
          <Loader />
        ) : (
          <Input
            name="email"
            label={t("labels.email")}
            hasValue={!!emailValue}
            error={emailError}
            register={register}
          />
        )}

        <Button
          type="submit"
          variant={BtnVariant.BTN}
          isDisabled={!emailValue || submitLogin.isPending}
        >
          {t("buttons.submit")}
        </Button>
      </FormWrapper>
    </>
  );
};
