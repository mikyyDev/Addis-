import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

import { Button } from "./SocialButton.styles";

interface SocialButtonProps {
  provider: "google" | "github";
  onClick: () => void;
  disabled?: boolean;
}

const SocialButton = ({ provider, onClick, disabled = false }: SocialButtonProps) => {
  return (
    <Button type="button" onClick={onClick} disabled={disabled}>
      {provider === "google" ? <FcGoogle size={22} /> : <FaGithub size={22} />}
      Continue with {provider === "google" ? "Google" : "GitHub"}
    </Button>
  );
};

export default SocialButton;
