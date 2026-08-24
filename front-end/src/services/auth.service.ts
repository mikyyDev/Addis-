import api from "./api";
import { getFirebaseAuth } from "../config/firebase";
import {
  GithubAuthProvider,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";

import type {
  LoginRequest,
  RegisterRequest,
  AuthResponse,
  User,
  UpdateProfileRequest,
  ChangePasswordRequest,
} from "../types/auth.types";

export const authService = {
  async login(data: LoginRequest): Promise<AuthResponse> {
    const response = await api.post("/auth/login", data);

    localStorage.setItem("token", response.data.token);

    return response.data;
  },

  async loginWithProvider(provider: "google" | "github"): Promise<AuthResponse> {
    const auth = getFirebaseAuth();
    const authProvider =
      provider === "google"
        ? new GoogleAuthProvider()
        : new GithubAuthProvider();
    const result = await signInWithPopup(auth, authProvider);
    const firebaseToken = await result.user.getIdToken();
    const response = await api.post<AuthResponse>("/auth/firebase", {
      token: firebaseToken,
      provider,
    });

    localStorage.setItem("token", response.data.token);

    return response.data;
  },

  async register(data: RegisterRequest) {
    const response = await api.post("/auth/register", data);

    return response.data;
  },

  async logout() {
    localStorage.removeItem("token");
  },

  async getProfile(): Promise<User> {
    const response = await api.get("/auth/profile");

    return response.data;
  },

  async updateProfile(data: UpdateProfileRequest): Promise<User> {
    const response = await api.put("/auth/profile", data);

    return response.data.user;
  },

  async uploadAvatar(file: File): Promise<User> {
    const formData = new FormData();
    formData.append("avatar", file);

    const response = await api.post("/auth/avatar", formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });

    return response.data.user;
  },

  async changePassword(data: ChangePasswordRequest) {
    const response = await api.put("/auth/password", data);

    return response.data;
  },

  async deleteAccount() {
    const response = await api.delete("/auth/profile");

    localStorage.removeItem("token");

    return response.data;
  },
};
