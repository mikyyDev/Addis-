export interface LoginRequest {
  email: string;
  password: string;
}

export interface RegisterRequest {
  username: string;
  email: string;
  password: string;
}

export interface User {
  id: string;
  username: string;
  email: string;
  avatar?: string | null;
  provider?: "local" | "google" | "github";
  createdAt?: string;
}

export interface UpdateProfileRequest {
  username?: string;
  email?: string;
  avatar?: string | null;
}

export interface ChangePasswordRequest {
  currentPassword: string;
  newPassword: string;
}

export interface AuthResponse {
  success: boolean;
  message: string;
  token: string;
  user: User;
}
