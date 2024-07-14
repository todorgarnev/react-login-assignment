import { z, ZodType } from "zod";
import i18next from "i18next";

export type ForgotPasswordForm = {
  email: string;
};

export type LoginForm = ForgotPasswordForm & {
  password?: string;
};

export const ForgotPasswordSchema = z.object({
  email: z.string().email(i18next.t("errors.invalidEmail")),
}) satisfies z.ZodType<ForgotPasswordForm>;

export const LoginSchema: ZodType<LoginForm> = ForgotPasswordSchema.extend({
  password: z
    .string()
    .transform((t) => t?.trim())
    .pipe(z.string().min(1, { message: i18next.t("errors.invalidPassword") })),
});
