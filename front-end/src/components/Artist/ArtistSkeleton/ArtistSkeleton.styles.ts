import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";

const pulse = keyframes`
  0% {
    opacity: 0.4;
  }

  50% {
    opacity: 0.8;
  }

  100% {
    opacity: 0.4;
  }
`;

export const SkeletonCard = styled.div`
  display: flex;

  align-items: center;

  gap: 14px;

  min-height: 100px;

  padding: 18px;

  border: 1px solid ${({ theme }) => theme.colors.border};

  border-radius: 16px;

  background: rgba(255, 255, 255, 0.05);
`;

export const SkeletonIcon = styled.div`
  width: 54px;
  height: 54px;

  flex-shrink: 0;

  border-radius: 50%;

  background: rgba(255, 255, 255, 0.1);

  animation: ${pulse} 1.5s ease-in-out infinite;
`;

export const SkeletonText = styled.div`
  width: 45%;
  height: 16px;

  border-radius: 6px;

  background: rgba(255, 255, 255, 0.1);

  animation: ${pulse} 1.5s ease-in-out infinite;
`;
