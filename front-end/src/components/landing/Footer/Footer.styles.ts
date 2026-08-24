import styled from "@emotion/styled";

export const FooterContainer = styled.footer`
  background: transparent;
  padding: 50px 0;
  border-top: 1px solid rgba(255, 255, 255, 0.06);
`;

export const FooterContent = styled.div`
  width: 90%;
  max-width: 1200px;
  margin: auto;

  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 20px;
  }
`;

export const Logo = styled.h2`
  color: white;

  span {
    color: #9f67ff;
  }
`;

export const Copyright = styled.p`
  color: #a0a0a0;
`;
