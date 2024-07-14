import { FieldErrors } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { Forms } from "@/types";

export const useFormError = (messages: FieldErrors<Forms>) => {
  const { t } = useTranslation();

  return {
    emailError: t(messages.email?.message as string) ?? "",
    passwordError: t(messages.password?.message as string) ?? "",
  };
};
