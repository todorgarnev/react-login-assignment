import { FunctionComponent } from "react";
import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { SubmitHandler, useForm, useWatch } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Input } from "@/components";
import { axios } from "@/utils";
import { BtnVariant, ForgotPasswordForm, ForgotPasswordSchema } from "@/types";
import { FormWrapper, Header } from "@/styles";

export const ForgotPassword: FunctionComponent = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<ForgotPasswordForm>({
    resolver: zodResolver(ForgotPasswordSchema),
  });
  const emailValue = useWatch({ control, name: "email" });

  const submitLogin = useMutation({
    mutationFn: (email: ForgotPasswordForm) => axios.post("/reset-password", email),
    onSuccess: () => {
      navigate("/success", { state: emailValue });
    },
  });

  const onSubmit: SubmitHandler<ForgotPasswordForm> = ({ email }) => {
    submitLogin.mutate({ email });
  };

  return (
    <>
      <Header>Forgot Password</Header>

      {submitLogin.isPending ? (
        "Loading..."
      ) : (
        <>
          <FormWrapper onSubmit={handleSubmit(onSubmit)} noValidate>
            <Input name="email" label="Email" error={errors.email} register={register} />

            <Button type="submit" variant={BtnVariant.BTN} isDisabled={!emailValue}>
              Submit
            </Button>
          </FormWrapper>
        </>
      )}
    </>
  );
};
