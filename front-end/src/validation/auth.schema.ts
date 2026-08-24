import { z } from "zod";

export const loginSchema = z.object({
  email: z.email("Please enter a valid email address"),

  password: z.string().min(8, "Password must be at least 8 characters"),
});

export type LoginSchema = z.infer<typeof loginSchema>;

export const registerSchema = z
  .object({
    username: z.string().min(3, "Username must be at least 3 characters"),

    email: z.email("Invalid email"),

    password: z.string().min(8),

    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ["confirmPassword"],
    message: "Passwords do not match",
  });

export type RegisterSchema = z.infer<typeof registerSchema>;

export const updateProfileSchema = z.object({
  username: z.string().min(3, "Username must be at least 3 characters"),

  email: z.email("Invalid email"),

  avatar: z
    .string()
    .url("Avatar must be a valid URL")
    .or(z.literal(""))
    .optional(),
});

export type UpdateProfileSchema = z.infer<typeof updateProfileSchema>;

export const changePasswordSchema = z
  .object({
    currentPassword: z.string().min(1, "Current password is required"),

    newPassword: z
      .string()
      .min(8, "New password must be at least 8 characters"),

    confirmPassword: z.string(),
  })
  .refine((data) => data.newPassword === data.confirmPassword, {
    path: ["confirmPassword"],
    message: "Passwords do not match",
  });

export type ChangePasswordSchema = z.infer<typeof changePasswordSchema>;
