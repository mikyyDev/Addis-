import { Mail, User } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";

import { useAuthStore } from "../../store/auth.store";

import AuthLayout from "../../layouts/AuthLayout";
import AuthHeader from "../../components/auth/AuthHeader/AuthHeader";
import AuthInput from "../../components/auth/AuthInput/AuthInput";
import PasswordInput from "../../components/auth/PasswordInput/PasswordInput";
import AuthButton from "../../components/auth/AuthButton/AuthButton";
import Divider from "../../components/auth/Divider/Divider";
import SocialButton from "../../components/auth/SocialButton/SocialButton";
import AuthFooter from "../../components/auth/AuthFooter/AuthFooter";

import {
  registerSchema,
  type RegisterSchema,
} from "../../validation/auth.schema";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterSchema>({
    resolver: zodResolver(registerSchema),
  });

  const {
    register: registerUser,
    loginWithProvider,
    loading,
    error,
  } = useAuthStore();

  const navigate = useNavigate();

  const onSubmit = async (data: RegisterSchema) => {
    try {
      await registerUser({
        username: data.username,
        email: data.email,
        password: data.password,
      });

      navigate("/login");
    } catch (err) {
      console.error(err);
    }
  };

  const handleProviderLogin = async (provider: "google" | "github") => {
    try {
      await loginWithProvider(provider);
      navigate("/dashboard");
    } catch {
      // Zustand already stores the error
    }
  };

  return (
    <AuthLayout>
      <AuthHeader title="Create Account" subtitle="Join Addis Music today." />

      <form onSubmit={handleSubmit(onSubmit)}>
        <AuthInput
          label="Username"
          placeholder="Your name "
          icon={<User size={18} />}
          register={register("username")}
          error={errors.username?.message}
        />

        <AuthInput
          label="Email"
          type="email"
          placeholder="example@gmail.com"
          icon={<Mail size={18} />}
          register={register("email")}
          error={errors.email?.message}
        />

        <PasswordInput
          label="Password"
          placeholder="Create password"
          register={register("password")}
          error={errors.password?.message}
        />

        <PasswordInput
          label="Confirm"
          placeholder="Confirm password"
          register={register("confirmPassword")}
          error={errors.confirmPassword?.message}
        />

        {error && (
          <p
            style={{
              color: "#ef4444",
              textAlign: "center",
              marginBottom: "1rem",
            }}
          >
            {error}
          </p>
        )}

        <AuthButton type="submit">
          {loading ? "Creating Account..." : "Create Account"}
        </AuthButton>

        <Divider />

        <SocialButton
          provider="google"
          onClick={() => handleProviderLogin("google")}
          disabled={loading}
        />

        <AuthFooter
          text="Already have an account?"
          linkText="Sign In"
          to="/login"
        />
      </form>
    </AuthLayout>
  );
};

export default Register;
