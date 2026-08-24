import styled from "@emotion/styled";

export const Empty = styled.div`
  min-height: 340px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  text-align: center;
  padding: 40px 20px;
`;

export const IconWrapper = styled.div`
  width: 72px;
  height: 72px;

  display: flex;
  align-items: center;
  justify-content: center;

  margin-bottom: 20px;

  border-radius: 50%;

  background: linear-gradient(135deg, rgba(108, 99, 255, 0.15), rgba(255, 107, 157, 0.1));
  border: 1px solid rgba(108, 99, 255, 0.2);

  color: ${({ theme }) => theme.colors.primary};
`;

export const Title = styled.h3`
  margin: 0 0 8px;

  color: #fff;
  font-size: 20px;
  font-weight: 700;
  letter-spacing: -0.02em;
`;

export const Message = styled.p`
  max-width: 420px;
  margin: 0 0 28px;

  color: rgba(255, 255, 255, 0.45);
  font-size: 14px;
  line-height: 1.6;
`;

export const Suggestions = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 14px;
`;

export const SuggestionsTitle = styled.div`
  display: flex;
  align-items: center;
  gap: 7px;

  color: rgba(255, 255, 255, 0.4);
  font-size: 13px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
`;

export const SuggestionChips = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 8px;
  max-width: 480px;
`;

export const SuggestionChip = styled.button`
  padding: 8px 16px;

  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 999px;

  background: rgba(255, 255, 255, 0.04);

  color: rgba(255, 255, 255, 0.7);
  font-size: 13px;
  font-weight: 500;

  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: rgba(108, 99, 255, 0.15);
    border-color: rgba(108, 99, 255, 0.4);
    color: #fff;
    transform: translateY(-1px);
  }
`;
