import { Mail } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { useAuthStore } from "../../store/auth.store";

import AuthLayout from "../../layouts/AuthLayout";

import AuthHeader from "../../components/auth/AuthHeader/AuthHeader";
import AuthInput from "../../components/auth/AuthInput/AuthInput";
import PasswordInput from "../../components/auth/PasswordInput/PasswordInput";
import AuthButton from "../../components/auth/AuthButton/AuthButton";
import Divider from "../../components/auth/Divider/Divider";
import SocialButton from "../../components/auth/SocialButton/SocialButton";
import AuthFooter from "../../components/auth/AuthFooter/AuthFooter";
import { useNavigate } from "react-router-dom";

import { loginSchema, type LoginSchema } from "../../validation/auth.schema";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
  });
  const navigate = useNavigate();
  const { login, loginWithProvider, loading, error } = useAuthStore();

  const onSubmit = async (data: LoginSchema) => {
    try {
      await login(data);

      navigate("/dashboard");
    } catch {
      // Zustand already stores the error
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
      <AuthHeader title="Welcome Back" subtitle="Sign in to continue" />

      <form onSubmit={handleSubmit(onSubmit)}>
        <AuthInput
          label="Email"
          type="email"
          placeholder="Enter your email"
          icon={<Mail size={18} />}
          register={register("email")}
          error={errors.email?.message}
        />

        <PasswordInput
          label="Password"
          placeholder="Enter your password"
          register={register("password")}
          error={errors.password?.message}
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
          {loading ? "Signing In..." : "Sign In"}
        </AuthButton>

        <Divider />

        <SocialButton
          provider="google"
          onClick={() => handleProviderLogin("google")}
          disabled={loading}
        />

        <AuthFooter
          text="Don't have an account?"
          linkText="Create Account"
          to="/register"
        />
      </form>
    </AuthLayout>
  );
};

export default Login;
