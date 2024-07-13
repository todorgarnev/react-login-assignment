import { z, ZodType } from "zod";

export type LoginForm = {
  email: string;
  password: string;
};

export const LoginSchema: ZodType<LoginForm> = z.object({
  email: z.string().email("Invalid email"),
  password: z
    .string()
    .transform((t) => t?.trim())
    .pipe(z.string().min(1, { message: "Password is required" })),
});
