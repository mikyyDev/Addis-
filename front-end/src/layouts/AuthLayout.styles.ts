import styled from "@emotion/styled";

interface ContainerProps {
  background: string;
}

export const Container = styled.div<ContainerProps>`
  min-height: 100vh;

  display: flex;

  justify-content: center;

  align-items: center;

  background-image: url(${({ background }) => background});

  background-size: cover;

  background-position: center;

  position: relative;

  overflow: hidden;
`;

export const Overlay = styled.div`
  position: absolute;

  inset: 0;

  backdrop-filter: blur(5px);
`;

export const Card = styled.div`
  position: relative;

  z-index: 2;
  width: 100%;

  max-width: 460px;

  padding: 45px;

  border-radius: 24px;

  background: rgba(44, 44, 94, 0.32);

  backdrop-filter: blur(18px);

  box-shadow: 0 25px 60px rgba(83, 182, 29, 0.45);

  transition: 0.35s;

  &:hover {
    border-color: ${({ theme }) => theme.colors.primary};
    transform: translateY(-4px);
  }

  @media (max-width: 600px) {
    width: 90%;
    padding: 32px 24px;
  }
`;
