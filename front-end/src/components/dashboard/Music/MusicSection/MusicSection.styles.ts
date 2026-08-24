import styled from "@emotion/styled";

export const Container = styled.section`
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.04);
  border-radius: 20px;
  padding: 24px 28px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const Header = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 16px;
  flex-wrap: wrap;
`;

export const LeftSide = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const Title = styled.h2`
  margin: 0;
  color: #fff;
  font-size: 24px;
  font-weight: 800;
  letter-spacing: -0.02em;
`;

export const Subtitle = styled.p`
  margin: 0;
  color: rgba(255, 255, 255, 0.4);
  font-size: 14px;
`;

export const RightSide = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;
