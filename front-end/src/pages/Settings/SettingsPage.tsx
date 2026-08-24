import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";
import { Settings, User, Trash2, Mail, Lock, KeyRound } from "lucide-react";

import Sidebar from "../../components/dashboard/Sidebar/Sidebar";
import MobileToggle from "../../components/dashboard/Sidebar/MobileToggle";
import { useAuthStore } from "../../store/auth.store";
import { authService } from "../../services/auth.service";
import { getErrorMessage } from "../../utils/getErrorMessage";

import {
  updateProfileSchema,
  changePasswordSchema,
  type UpdateProfileSchema,
  type ChangePasswordSchema,
} from "../../validation/auth.schema";

import {
  SettingsContainer,
  MainContent,
  Header,
  IconWrapper,
  TextContainer,
  Title,
  Subtitle,
  Content,
  Card,
  CardTitle,
  CardDescription,
  PictureRow,
  Avatar,
  AvatarImage,
  AvatarInitials,
  ChangePictureButton,
  ReadOnlyRow,
  ReadOnlyValue,
  Field,
  Label,
  InputWrapper,
  InputIcon,
  StyledInput,
  ErrorText,
  SaveButton,
  DangerCard,
  DangerTitle,
  DangerDescription,
  DangerButton,
  ModalOverlay,
  ModalDialog,
  ModalTitle,
  ModalText,
  DeleteList,
  ModalActions,
  CancelButton,
  Toast,
} from "./Settings.styles";

interface ToastState {
  type: "success" | "error";
  message: string;
}

const SettingsPage = () => {
  const {
    user,
    loading,
    getProfile,
    updateProfile,
    uploadAvatar,
    deleteAccount,
  } = useAuthStore();

  const navigate = useNavigate();

  const [toast, setToast] = useState<ToastState | null>(null);
  const [profileError, setProfileError] = useState<string | null>(null);
  const [passwordError, setPasswordError] = useState<string | null>(null);
  const [changingPassword, setChangingPassword] = useState(false);
  const [uploadingAvatar, setUploadingAvatar] = useState(false);
  const [confirmDelete, setConfirmDelete] = useState(false);
  const [deleting, setDeleting] = useState(false);

  const avatarInputRef = useRef<HTMLInputElement>(null);

  const profileForm = useForm<UpdateProfileSchema>({
    resolver: zodResolver(updateProfileSchema),
    defaultValues: {
      username: user?.username ?? "",
      email: user?.email ?? "",
    },
  });

  const passwordForm = useForm<ChangePasswordSchema>({
    resolver: zodResolver(changePasswordSchema),
    defaultValues: {
      currentPassword: "",
      newPassword: "",
      confirmPassword: "",
    },
  });

  /* Refresh profile on mount so avatar/provider/createdAt are populated. */
  useEffect(() => {
    if (user) {
      profileForm.reset({
        username: user.username,
        email: user.email,
      });
    } else {
      getProfile();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user?.id]);

  const showToast = (type: ToastState["type"], message: string) => {
    setToast({ type, message });
    setTimeout(() => setToast(null), 3000);
  };

  const handleProfileSubmit = async (data: UpdateProfileSchema) => {
    setProfileError(null);

    try {
      await updateProfile({
        username: data.username,
        email: data.email,
      });

      showToast("success", "Profile updated successfully");
    } catch (error) {
      setProfileError(getErrorMessage(error, "Failed to update profile"));
    }
  };

  const handleAvatarChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    // Allow selecting the same file again later.
    e.target.value = "";

    if (!file) {
      return;
    }

    if (!file.type.startsWith("image/")) {
      setProfileError("Please choose an image file");
      return;
    }

    try {
      setUploadingAvatar(true);
      setProfileError(null);

      await uploadAvatar(file);

      showToast("success", "Profile picture updated");
    } catch (error) {
      setProfileError(getErrorMessage(error, "Failed to upload picture"));
    } finally {
      setUploadingAvatar(false);
    }
  };

  const handlePasswordSubmit = async (data: ChangePasswordSchema) => {
    setPasswordError(null);

    try {
      setChangingPassword(true);

      await authService.changePassword({
        currentPassword: data.currentPassword,
        newPassword: data.newPassword,
      });

      passwordForm.reset();
      showToast("success", "Password changed successfully");
    } catch (error) {
      setPasswordError(getErrorMessage(error, "Failed to change password"));
    } finally {
      setChangingPassword(false);
    }
  };

  const handleDeleteAccount = async () => {
    setDeleting(true);

    try {
      await deleteAccount();

      showToast("success", "Account deleted. Goodbye!");
      setTimeout(() => navigate("/login"), 500);
    } catch (error) {
      setDeleting(false);
      setConfirmDelete(false);
      showToast("error", getErrorMessage(error, "Failed to delete account"));
    }
  };

  const memberSince = user?.createdAt
    ? new Date(user.createdAt).toLocaleDateString(undefined, {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : null;

  return (
    <SettingsContainer>
      <Sidebar />

      <MainContent>
        <MobileToggle />

        <Header>
          <IconWrapper>
            <Settings size={22} />
          </IconWrapper>

          <TextContainer>
            <Title>Settings</Title>

            <Subtitle>Manage your profile and account security.</Subtitle>
          </TextContainer>
        </Header>

        <Content>
          <Card>
            <CardTitle>Profile</CardTitle>

            <CardDescription>
              Update your personal information and profile picture.
            </CardDescription>

            <PictureRow>
              <Avatar>
                {user?.avatar ? (
                  <AvatarImage src={user.avatar} alt={user.username} />
                ) : (
                  <AvatarInitials>
                    {user?.username?.charAt(0) ?? "U"}
                  </AvatarInitials>
                )}
              </Avatar>

              <div>
                <ChangePictureButton
                  type="button"
                  disabled={uploadingAvatar}
                  onClick={() => avatarInputRef.current?.click()}
                >
                  {uploadingAvatar ? "Uploading..." : "Change Picture"}
                </ChangePictureButton>

                <input
                  ref={avatarInputRef}
                  type="file"
                  accept="image/*"
                  style={{ display: "none" }}
                  onChange={handleAvatarChange}
                />
              </div>
            </PictureRow>

            <form onSubmit={profileForm.handleSubmit(handleProfileSubmit)}>
              <Field>
                <Label>Username</Label>

                <InputWrapper
                  hasError={!!profileForm.formState.errors.username?.message}
                >
                  <InputIcon>
                    <User size={18} />
                  </InputIcon>

                  <StyledInput
                    type="text"
                    placeholder="Your username"
                    {...profileForm.register("username")}
                  />
                </InputWrapper>

                {profileForm.formState.errors.username?.message && (
                  <ErrorText>
                    {profileForm.formState.errors.username.message}
                  </ErrorText>
                )}
              </Field>

              <Field>
                <Label>Email</Label>

                <InputWrapper
                  hasError={!!profileForm.formState.errors.email?.message}
                >
                  <InputIcon>
                    <Mail size={18} />
                  </InputIcon>

                  <StyledInput
                    type="email"
                    placeholder="example@gmail.com"
                    {...profileForm.register("email")}
                  />
                </InputWrapper>

                {profileForm.formState.errors.email?.message && (
                  <ErrorText>
                    {profileForm.formState.errors.email.message}
                  </ErrorText>
                )}
              </Field>

              <ReadOnlyRow>
                <span>Account created</span>

                <ReadOnlyValue>{memberSince ?? "—"}</ReadOnlyValue>
              </ReadOnlyRow>

              {profileError && <ErrorText>{profileError}</ErrorText>}

              <SaveButton type="submit" disabled={loading}>
                {loading ? "Saving..." : "Save Changes"}
              </SaveButton>
            </form>
          </Card>

          <Card>
            <CardTitle>Security</CardTitle>

            <CardDescription>
              Use a strong password you don&apos;t use anywhere else.
            </CardDescription>

            <form onSubmit={passwordForm.handleSubmit(handlePasswordSubmit)}>
              <Field>
                <Label>Current Password</Label>

                <InputWrapper
                  hasError={
                    !!passwordForm.formState.errors.currentPassword?.message
                  }
                >
                  <InputIcon>
                    <Lock size={18} />
                  </InputIcon>

                  <StyledInput
                    type="password"
                    placeholder="Current password"
                    {...passwordForm.register("currentPassword")}
                  />
                </InputWrapper>

                {passwordForm.formState.errors.currentPassword?.message && (
                  <ErrorText>
                    {passwordForm.formState.errors.currentPassword.message}
                  </ErrorText>
                )}
              </Field>

              <Field>
                <Label>New Password</Label>

                <InputWrapper
                  hasError={
                    !!passwordForm.formState.errors.newPassword?.message
                  }
                >
                  <InputIcon>
                    <KeyRound size={18} />
                  </InputIcon>

                  <StyledInput
                    type="password"
                    placeholder="New password"
                    {...passwordForm.register("newPassword")}
                  />
                </InputWrapper>

                {passwordForm.formState.errors.newPassword?.message && (
                  <ErrorText>
                    {passwordForm.formState.errors.newPassword.message}
                  </ErrorText>
                )}
              </Field>

              <Field>
                <Label>Confirm New Password</Label>

                <InputWrapper
                  hasError={
                    !!passwordForm.formState.errors.confirmPassword?.message
                  }
                >
                  <InputIcon>
                    <KeyRound size={18} />
                  </InputIcon>

                  <StyledInput
                    type="password"
                    placeholder="Confirm new password"
                    {...passwordForm.register("confirmPassword")}
                  />
                </InputWrapper>

                {passwordForm.formState.errors.confirmPassword?.message && (
                  <ErrorText>
                    {passwordForm.formState.errors.confirmPassword.message}
                  </ErrorText>
                )}
              </Field>

              {passwordError && <ErrorText>{passwordError}</ErrorText>}

              <SaveButton type="submit" disabled={changingPassword}>
                {changingPassword ? "Updating..." : "Change Password"}
              </SaveButton>
            </form>
          </Card>

          <DangerCard>
            <DangerTitle>Delete Account</DangerTitle>

            <DangerDescription>
              Permanently delete your account and all your artists, albums,
              songs, and playlists. This action cannot be undone.
            </DangerDescription>

            <DangerButton type="button" onClick={() => setConfirmDelete(true)}>
              <Trash2 size={16} />
              Delete Account
            </DangerButton>
          </DangerCard>
        </Content>

        {confirmDelete && (
          <ModalOverlay onClick={() => !deleting && setConfirmDelete(false)}>
            <ModalDialog onClick={(e) => e.stopPropagation()}>
              <ModalTitle>Are you sure?</ModalTitle>

              <ModalText>
                This will permanently delete all of the following:
              </ModalText>

              <DeleteList>
                <li> Artists</li>
                <li> Albums</li>
                <li> Songs</li>
                <li> Genres</li>
                <li> Playlists</li>
                <li> Account data</li>
              </DeleteList>

              <ModalActions>
                <CancelButton
                  type="button"
                  disabled={deleting}
                  onClick={() => setConfirmDelete(false)}
                >
                  Cancel
                </CancelButton>

                <DangerButton
                  type="button"
                  disabled={deleting}
                  onClick={handleDeleteAccount}
                >
                  {deleting ? "Deleting..." : "Delete Everything"}
                </DangerButton>
              </ModalActions>
            </ModalDialog>
          </ModalOverlay>
        )}

        {toast && <Toast type={toast.type}>{toast.message}</Toast>}
      </MainContent>
    </SettingsContainer>
  );
};

export default SettingsPage;
