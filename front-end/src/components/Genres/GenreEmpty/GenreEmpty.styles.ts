import styled from "@emotion/styled";

export const Container = styled.div`
  min-height: 320px;

  display: flex;

  flex-direction: column;

  align-items: center;
  justify-content: center;

  padding: 40px;

  text-align: center;
`;

export const IconWrapper = styled.div`
  width: 72px;
  height: 72px;

  display: flex;

  align-items: center;
  justify-content: center;

  margin-bottom: 20px;

  border-radius: 20px;

  background: rgba(255, 255, 255, 0.07);

  color: ${({ theme }) => theme.colors.primary};
`;

export const Title = styled.h3`
  margin: 0 0 8px;

  color: ${({ theme }) => theme.colors.text};

  font-size: 20px;

  font-weight: 700;
`;

export const Description = styled.p`
  max-width: 400px;

  margin: 0;

  color: ${({ theme }) => theme.colors.textSecondary};

  font-size: 14px;

  line-height: 1.6;
`;
