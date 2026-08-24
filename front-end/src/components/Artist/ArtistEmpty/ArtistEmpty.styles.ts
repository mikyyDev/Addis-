import styled from "@emotion/styled";

export const Container = styled.div`
  min-height: 300px;

  display: flex;

  flex-direction: column;

  align-items: center;
  justify-content: center;

  gap: 12px;

  padding: 40px;

  text-align: center;
`;

export const IconWrapper = styled.div`
  width: 64px;
  height: 64px;

  display: flex;

  align-items: center;
  justify-content: center;

  margin-bottom: 8px;

  border-radius: 50%;

  background: rgba(255, 255, 255, 0.08);

  color: ${({ theme }) => theme.colors.primary};
`;

export const Title = styled.h2`
  margin: 0;

  color: ${({ theme }) => theme.colors.text};

  font-size: 20px;
`;

export const Description = styled.p`
  max-width: 420px;

  margin: 0;

  color: ${({ theme }) => theme.colors.textSecondary};

  font-size: 14px;

  line-height: 1.6;
`;

export const Button = styled.button`
  margin-top: 8px;

  padding: 10px 18px;

  border: none;

  border-radius: 9px;

  background: ${({ theme }) => theme.colors.primary};

  color: white;

  font-size: 14px;
  font-weight: 600;

  cursor: pointer;

  transition: opacity 0.2s ease;

  &:hover {
    opacity: 0.9;
  }
`;
