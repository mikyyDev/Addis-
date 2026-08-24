import styled from "@emotion/styled";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  margin-top: 25px;
  margin-left: 20px;
  gap: 25px;
`;

export const Tabs = styled.div`
  display: flex;
  gap: 18px;
`;

export const Tab = styled.button<{ active: boolean }>`
  padding: 12px 26px;

  border: none;

  border-radius: 30px;

  cursor: pointer;

  font-size: 15px;

  font-weight: 600;

  transition: 0.3s;

  color: white;

  background: ${({ active }) =>
    active
      ? "linear-gradient(135deg,#8B5CF6,#6D28D9)"
      : "rgba(255,255,255,.08)"};

  &:hover {
    transform: translateY(-2px);
  }
`;

export const SongGrid = styled.div`
  display: grid;

  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));

  gap: 25px;
`;
