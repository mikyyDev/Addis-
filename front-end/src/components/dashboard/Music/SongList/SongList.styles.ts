import styled from "@emotion/styled";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const SectionHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  padding: 0 4px;
`;

export const SectionTitle = styled.h3`
  margin: 0;
  color: #fff;
  font-size: 18px;
  font-weight: 700;
  letter-spacing: -0.02em;
`;

export const SongCount = styled.span`
  color: rgba(255, 255, 255, 0.35);
  font-size: 13px;
  font-weight: 500;
`;

export const Header = styled.div`
  display: grid;
  grid-template-columns: 2.5fr 1.5fr 1.5fr 1fr 80px;
  padding: 8px 24px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);
  margin-bottom: 4px;
  color: rgba(255, 255, 255, 0.3);
  font-size: 11px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1px;
`;

export const EmptyState = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 14px;
  padding: 60px 20px;
  text-align: center;
  color: rgba(255, 255, 255, 0.35);
  font-size: 14px;
`;

export const EmptyIcon = styled.div`
  width: 64px;
  height: 64px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.04);
  color: rgba(255, 255, 255, 0.25);
`;
