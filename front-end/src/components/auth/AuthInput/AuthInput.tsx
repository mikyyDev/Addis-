import type { ReactNode } from "react";
import type { UseFormRegisterReturn } from "react-hook-form";

import {
  Container,
  Label,
  InputWrapper,
  StyledInput,
  Icon,
  ErrorText,
} from "./AuthInput.styles";

interface AuthInputProps {
  label: string;
  type?: string;
  placeholder: string;
  icon: ReactNode;

  register: UseFormRegisterReturn;

  error?: string;
}

const AuthInput = ({
  label,
  type = "text",
  placeholder,
  icon,
  register,
  error,
}: AuthInputProps) => {
  return (
    <Container>
      <Label>{label}</Label>

      <InputWrapper hasError={!!error}>
        <Icon>{icon}</Icon>

        <StyledInput type={type} placeholder={placeholder} {...register} />
      </InputWrapper>

      {error && <ErrorText>{error}</ErrorText>}
    </Container>
  );
};

export default AuthInput;
