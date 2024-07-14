import { z } from "zod";

export const FormsSchema = z.object({
  email: z.string().email({ message: "errors.invalidEmail" }),
  password: z
    .string()
    .transform((t) => t?.trim())
    .pipe(z.string().min(1, { message: "errors.invalidPassword" }))
    .optional(),
});

export type Forms = z.infer<typeof FormsSchema>;
