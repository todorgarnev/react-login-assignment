import { z, ZodType } from "zod";

export type LoginForm = {
  email: string;
  password: string;
};

export const LoginSchema: ZodType<LoginForm> = z.object({
  email: z.string().email("Invalid email"),
  password: z
    .string()
    .min(5, { message: "Password is too short" })
    .max(20, { message: "Password is too long" }),
});
