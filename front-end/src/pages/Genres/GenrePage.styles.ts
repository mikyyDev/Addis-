import styled from "@emotion/styled";
import background from "../../assets/images/background.png";

export const GenreContainer = styled.div`
  position: relative;

  min-height: 100vh;

  width: 100%;

  background:
    linear-gradient(rgba(10, 10, 15, 0.72), rgba(10, 10, 15, 0.86)),
    url(${background});

  background-size: cover;
  background-position: center;
  background-attachment: fixed;

  &::before {
    position: fixed;
    inset: 0;
    z-index: 0;

    content: "";
    pointer-events: none;

    background: linear-gradient(
      90deg,
      rgba(7, 5, 25, 0.82) 0%,
      rgba(16, 8, 46, 0.52) 42%,
      rgba(31, 10, 57, 0.38) 100%
    );
  }
`;

export const MainContent = styled.main`
  position: relative;
  z-index: 1;

  width: calc(100% - 350px);
  min-width: 0;

  margin-left: 350px;
  padding: 42px 48px 60px 34px;

  box-sizing: border-box;

  overflow-x: hidden;

  @media (max-width: 1200px) {
    margin-left: 300px;
    width: calc(100% - 300px);
  }

  @media (max-width: 900px) {
    width: 100%;
    margin-left: 0;
    padding: 16px;
    min-height: 100vh;
  }
`;

export const ErrorMessage = styled.div`
  margin-bottom: 20px;

  padding: 12px 14px;

  border: 1px solid rgba(255, 107, 107, 0.2);

  border-radius: 10px;

  background: rgba(255, 107, 107, 0.08);

  color: #ff6b6b;

  font-size: 14px;
`;

export const LoadingMessage = styled.div`
  padding: 60px 20px;

  color: ${({ theme }) => theme.colors.textSecondary};

  font-size: 14px;

  text-align: center;
`;
