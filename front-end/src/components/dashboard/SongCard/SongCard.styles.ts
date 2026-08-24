import styled from "@emotion/styled";

export const Card = styled.div`
  position: relative;

  background: rgba(255, 255, 255, 0.05);

  border-radius: 24px;

  overflow: hidden;

  cursor: pointer;

  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-6px);

    box-shadow: 0 12px 30px rgba(0, 0, 0, 0.3);
  }

  &:hover > div {
    opacity: 1;
  }
`;

export const Cover = styled.img`
  width: 100%;

  height: 240px;

  object-fit: cover;
`;

export const Overlay = styled.div`
  position: absolute;

  inset: 0;

  display: flex;

  justify-content: center;

  align-items: center;

  background: rgba(0, 0, 0, 0.45);

  opacity: 0;

  transition: 0.3s;
`;

export const PlayButton = styled.button`
  width: 65px;

  height: 65px;

  border-radius: 50%;

  border: none;

  background: ${({ theme }) => theme.colors.primary};

  color: white;

  cursor: pointer;

  display: flex;

  align-items: center;

  justify-content: center;
`;

export const Title = styled.h3`
  color: white;

  font-size: 18px;

  padding: 16px 16px 4px;
`;

export const Artist = styled.p`
  color: ${({ theme }) => theme.colors.textSecondary};

  padding: 0 16px 16px;

  font-size: 14px;
`;
