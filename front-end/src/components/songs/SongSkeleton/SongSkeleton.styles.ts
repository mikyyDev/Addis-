import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";

const pulse = keyframes`
0%{
opacity:.4;
}

50%{
opacity:1;
}

100%{
opacity:.4;
}
`;

export const Card = styled.div`
  padding: 1rem;

  border-radius: 20px;

  background: rgba(255, 255, 255, 5.08);

  animation: ${pulse} 1.4s infinite;
`;

export const Image = styled.div`
  width: 100%;

  height: 220px;

  border-radius: 14px;

  background: #3f3f46;
`;

export const Line = styled.div<{ short?: boolean }>`
  margin-top: 1rem;

  height: 12px;

  border-radius: 10px;

  background: #3f3f46;

  width: ${({ short }) => (short ? "60%" : "100%")};
`;
