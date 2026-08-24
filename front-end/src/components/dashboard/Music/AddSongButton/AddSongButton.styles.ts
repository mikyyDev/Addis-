import styled from "@emotion/styled";

export const Button = styled.button`
  display: flex;

  align-items: center;

  gap: 10px;

  padding: 14px 22px;

  border: none;

  border-radius: 14px;

  cursor: pointer;

  color: white;

  font-weight: 600;

  background: linear-gradient(
    135deg,
    ${({ theme }) => theme.colors.primary},
    #7c3aed
  );

  transition: 0.25s;

  &:hover {
    transform: translateY(-2px);

    box-shadow: 0 12px 30px rgba(124, 58, 237, 0.35);
  }

  &:active {
    transform: translateY(0);
  }
`;
