import styled from "@emotion/styled";

export const UniverseContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 0;
`;

export const OrbitalCanvas = styled.div`
  position: relative;
  width: 280px;
  height: 280px;

  @media (max-width: 480px) {
    width: 220px;
    height: 220px;
  }

  @media (max-width: 360px) {
    width: 180px;
    height: 180px;
  }
`;

export const CenterDot = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  width: 48px;
  height: 48px;
  border-radius: 50%;

  background: linear-gradient(135deg, #6c63ff, #8b83ff);
  box-shadow: 0 0 30px rgba(108, 99, 255, 0.4);

  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;
`;

export const CenterLabel = styled.span`
  color: #fff;
  font-size: 14px;
  font-weight: 800;
`;

export const OrbitalRing = styled.div<{
  $radius: number;
  $color: string;
}>`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  width: ${({ $radius }) => $radius * 2}px;
  height: ${({ $radius }) => $radius * 2}px;
  border-radius: 50%;

  border: 1px solid ${({ $color }) => `${$color}22`};
  background: ${({ $color }) => `${$color}06`};

  transition: 0.3s ease;

  &:hover {
    border-color: ${({ $color }) => `${$color}55`};
    background: ${({ $color }) => `${$color}10`};
  }
`;

export const ConnectionLine = styled.div<{
  $width: number;
  $color: string;
}>`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  width: ${({ $width }) => $width}px;
  height: 1px;
  background: ${({ $color }) => $color};
`;

export const OrbitalLabel = styled.div<{
  $radius: number;
  $angle: number;
}>`
  position: absolute;
  top: 50%;
  left: 50%;
  transform-origin: 0 0;

  transform: rotate(${({ $angle }) => $angle}deg)
    translateX(${({ $radius }) => $radius}px)
    rotate(${({ $angle }) => -$angle}deg);

  z-index: 3;
  padding: 2px 5px;
  border-radius: 4px;
  background: rgba(30, 15, 64, 0.9);
  color: rgba(255, 255, 255, 0.5);
  font-size: 11px;
  font-weight: 500;
  white-space: nowrap;

  display: flex;
  align-items: baseline;
  gap: 4px;
`;

export const OrbitalCount = styled.span<{ $color: string }>`
  color: ${({ $color }) => $color};
  font-size: 13px;
  font-weight: 800;
`;
