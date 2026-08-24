import styled from "@emotion/styled";

export const Container = styled.div`
  min-height: 300px;

  display: flex;

  flex-direction: column;

  align-items: center;
  justify-content: center;

  text-align: center;
`;

export const IconWrapper = styled.div`
  width: 64px;
  height: 64px;

  display: flex;

  align-items: center;
  justify-content: center;

  margin-bottom: 16px;

  border-radius: 50%;

  background: rgba(255, 255, 255, 0.06);

  color: ${({ theme }) => theme.colors.primary};
`;

export const Title = styled.h3`
  margin: 0 0 8px;

  color: ${({ theme }) => theme.colors.text};

  font-size: 18px;
`;

export const Message = styled.p`
  max-width: 400px;

  margin: 0;

  color: ${({ theme }) => theme.colors.textSecondary};

  font-size: 14px;
`;
