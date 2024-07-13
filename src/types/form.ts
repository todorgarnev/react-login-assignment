import { z, ZodType } from "zod";

export type ForgotPasswordForm = {
  email: string;
};

export type LoginForm = ForgotPasswordForm & {
  password?: string;
};

export const ForgotPasswordSchema = z.object({
  email: z.string().email("Invalid email"),
}) satisfies z.ZodType<ForgotPasswordForm>;

export const LoginSchema: ZodType<LoginForm> = ForgotPasswordSchema.extend({
  password: z
    .string()
    .transform((t) => t?.trim())
    .pipe(z.string().min(1, { message: "Password is required" })),
});
