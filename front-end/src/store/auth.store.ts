import { create } from "zustand";

import { authService } from "../services/auth.service";

import type {
  LoginRequest,
  RegisterRequest,
  UpdateProfileRequest,
  User,
} from "../types/auth.types";

const getErrorMessage = (error: unknown, fallback: string): string => {
  if (error instanceof Error) {
    return error.message;
  }

  if (typeof error === "object" && error !== null) {
    const errObj = error as Record<string, unknown>;
    const response = errObj.response;

    if (typeof response === "object" && response !== null) {
      const responseObj = response as Record<string, unknown>;
      const data = responseObj.data;

      if (typeof data === "object" && data !== null) {
        const dataObj = data as Record<string, unknown>;

        const message = dataObj.message;
        if (typeof message === "string") {
          return message;
        }

        if (Array.isArray(dataObj.errors)) {
          const firstError = dataObj.errors[0];
          if (typeof firstError === "object" && firstError !== null) {
            const firstErrorMessage = (firstError as Record<string, unknown>)
              .message;
            if (typeof firstErrorMessage === "string") {
              return firstErrorMessage;
            }
          }
        }
      }
    }
  }

  return fallback;
};

interface AuthState {
  user: User | null;

  isAuthenticated: boolean;

  loading: boolean;

  error: string | null;

  login: (data: LoginRequest) => Promise<void>;

  loginWithProvider: (provider: "google" | "github") => Promise<void>;

  register: (data: RegisterRequest) => Promise<void>;

  logout: () => Promise<void>;

  getProfile: () => Promise<void>;

  updateProfile: (data: UpdateProfileRequest) => Promise<void>;

  uploadAvatar: (file: File) => Promise<void>;

  deleteAccount: () => Promise<void>;

  clearError: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,

  isAuthenticated: Boolean(localStorage.getItem("token")),

  loading: false,

  error: null,

  login: async (data) => {
    try {
      set({
        loading: true,
        error: null,
      });

      const response = await authService.login(data);

      set({
        user: response.user,
        isAuthenticated: true,
        loading: false,
      });
    } catch (error: unknown) {
      set({
        loading: false,
        error: getErrorMessage(error, "Login failed"),
      });

      throw error;
    }
  },

  loginWithProvider: async (provider) => {
    try {
      set({ loading: true, error: null });

      const response = await authService.loginWithProvider(provider);

      set({
        user: response.user,
        isAuthenticated: true,
        loading: false,
      });
    } catch (error: unknown) {
      set({
        loading: false,
        error: getErrorMessage(error, `${provider} sign-in failed`),
      });

      throw error;
    }
  },

  register: async (data) => {
    try {
      set({
        loading: true,
        error: null,
      });

      await authService.register(data);

      set({
        loading: false,
      });
    } catch (error: unknown) {
      set({
        loading: false,
        error: getErrorMessage(error, "Registration failed"),
      });

      throw error;
    }
  },

  logout: async () => {
    await authService.logout();

    set({
      user: null,
      isAuthenticated: false,
    });
  },

  getProfile: async () => {
    try {
      set({
        loading: true,
      });

      const user = await authService.getProfile();

      set({
        user,
        isAuthenticated: true,
        loading: false,
      });
    } catch {
      localStorage.removeItem("token");

      set({
        user: null,
        isAuthenticated: false,
        loading: false,
      });
    }
  },

  updateProfile: async (data) => {
    try {
      set({
        loading: true,
        error: null,
      });

      const user = await authService.updateProfile(data);

      set({
        user,
        loading: false,
      });
    } catch (error: unknown) {
      set({
        loading: false,
        error: getErrorMessage(error, "Failed to update profile"),
      });

      throw error;
    }
  },

  uploadAvatar: async (file) => {
    try {
      set({
        loading: true,
        error: null,
      });

      const user = await authService.uploadAvatar(file);

      set({
        user,
        loading: false,
      });
    } catch (error: unknown) {
      set({
        loading: false,
        error: getErrorMessage(error, "Failed to upload picture"),
      });

      throw error;
    }
  },

  deleteAccount: async () => {
    try {
      set({
        loading: true,
        error: null,
      });

      await authService.deleteAccount();

      set({
        user: null,
        isAuthenticated: false,
        loading: false,
      });
    } catch (error: unknown) {
      set({
        loading: false,
        error: getErrorMessage(error, "Failed to delete account"),
      });

      throw error;
    }
  },

  clearError: () =>
    set({
      error: null,
    }),
}));
