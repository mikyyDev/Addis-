import { Button } from "./AuthButton.styles";

interface Props {
  children: React.ReactNode;

  type?: "button" | "submit";
}

const AuthButton = ({
  children,

  type = "submit",
}: Props) => {
  return <Button type={type}>{children}</Button>;
};

export default AuthButton;
