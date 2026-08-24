import { useState } from "react";
import { Eye, EyeOff, Lock } from "lucide-react";
import type { UseFormRegisterReturn } from "react-hook-form";

import {
  Container,
  Label,
  InputWrapper,
  StyledInput,
  LeftIcon,
  RightIcon,
  ErrorText,
} from "./PasswordInput.styles";

interface PasswordInputProps {
  label: string;
  placeholder: string;
  register: UseFormRegisterReturn;
  error?: string;
}

const PasswordInput = ({
  label,
  placeholder,
  register,
  error,
}: PasswordInputProps) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <Container>
      <Label>{label}</Label>

      <div style={{ flex: 1 }}>
        <InputWrapper hasError={!!error}>
          <LeftIcon>
            <Lock size={18} />
          </LeftIcon>

          <StyledInput
            type={showPassword ? "text" : "password"}
            placeholder={placeholder}
            {...register}
          />

          <RightIcon onClick={() => setShowPassword((prev) => !prev)}>
            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
          </RightIcon>
        </InputWrapper>

        {error && <ErrorText>{error}</ErrorText>}
      </div>
    </Container>
  );
};

export default PasswordInput;
