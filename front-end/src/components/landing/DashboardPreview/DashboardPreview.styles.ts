import styled from "@emotion/styled";

export const Section = styled.section`
  padding: 80px 0;
  background: transparent;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    bottom: -100px;
    left: 50%;
    transform: translateX(-50%);
    width: 600px;
    height: 400px;
    border-radius: 50%;
    background: radial-gradient(
      ellipse,
      rgba(139, 92, 246, 0.1) 0%,
      transparent 70%
    );
    pointer-events: none;
  }
`;

export const Container = styled.div`
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
`;

export const PreviewWrapper = styled.div`
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 24px;
  overflow: hidden;

  @media (max-width: 600px) {
    border-radius: 16px;
  }
  backdrop-filter: blur(12px);
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
  transition: 0.3s ease;

  &:hover {
    border-color: rgba(255, 255, 255, 0.12);
    box-shadow: 0 25px 70px rgba(0, 0, 0, 0.4),
      0 0 80px rgba(139, 92, 246, 0.05);
  }
`;

export const PreviewHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 24px 28px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);

  @media (max-width: 600px) {
    padding: 16px 16px;
    flex-wrap: wrap;
    gap: 12px;
  }
`;

export const PreviewTitle = styled.h3`
  color: white;
  font-size: 1.25rem;
  font-weight: 600;
  margin: 0;
`;

export const DashboardButton = styled.button`
  padding: 10px 20px;
  border-radius: 10px;
  border: 1px solid rgba(139, 92, 246, 0.4);
  background: rgba(139, 92, 246, 0.15);
  color: #c084fc;
  font-size: 13px;
  font-weight: 600;
  cursor: pointer;
  transition: 0.2s ease;

  &:hover {
    background: rgba(139, 92, 246, 0.25);
    box-shadow: 0 0 20px rgba(139, 92, 246, 0.15);
  }
`;

export const PreviewContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 280px;
  gap: 0;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

export const TableSection = styled.div`
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;

  /* Hide scrollbar on mobile for cleaner look */
  @media (max-width: 600px) {
    &::-webkit-scrollbar {
      display: none;
    }
  }
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

export const TableHead = styled.thead`
  th {
    padding: 14px 16px;
    text-align: left;
    color: rgba(255, 255, 255, 0.5);
    font-size: 12px;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    border-bottom: 1px solid rgba(255, 255, 255, 0.06);
  }
`;

export const TableBody = styled.tbody``;

export const TableRow = styled.tr`
  transition: 0.15s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.03);
  }
`;

export const TableCell = styled.td`
  padding: 14px 16px;
  color: rgba(255, 255, 255, 0.4);
  font-size: 13px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.04);
  white-space: nowrap;
`;

export const TableCellTitle = styled.td`
  padding: 14px 16px;
  color: white;
  font-size: 14px;
  font-weight: 600;
  border-bottom: 1px solid rgba(255, 255, 255, 0.04);
  display: flex;
  align-items: center;
  white-space: nowrap;
`;

export const TableCellArtist = styled.td`
  padding: 14px 16px;
  color: rgba(255, 255, 255, 0.7);
  font-size: 13px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.04);
  white-space: nowrap;
`;

export const TableCellAlbum = styled.td`
  padding: 14px 16px;
  color: rgba(255, 255, 255, 0.5);
  font-size: 13px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.04);
  white-space: nowrap;
`;

export const TableCellDuration = styled.td`
  padding: 14px 16px;
  color: rgba(255, 255, 255, 0.4);
  font-size: 13px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.04);
  white-space: nowrap;
`;

export const TableCellMenu = styled.td`
  padding: 14px 16px;
  color: rgba(255, 255, 255, 0.3);
  font-size: 16px;
  cursor: pointer;
  border-bottom: 1px solid rgba(255, 255, 255, 0.04);

  &:hover {
    color: white;
  }
`;

export const Pagination = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 24px;
  padding: 16px;
  border-top: 1px solid rgba(255, 255, 255, 0.06);

  @media (max-width: 480px) {
    gap: 16px;
    padding: 12px;
  }
`;

export const PaginationText = styled.span`
  color: rgba(255, 255, 255, 0.4);
  font-size: 13px;
  cursor: pointer;

  &:hover {
    color: white;
  }
`;

export const SideCard = styled.div`
  padding: 24px;
  border-left: 1px solid rgba(255, 255, 255, 0.06);
  background: rgba(255, 255, 255, 0.02);

  @media (max-width: 900px) {
    border-left: none;
    border-top: 1px solid rgba(255, 255, 255, 0.06);
  }
`;

export const SideCardTitle = styled.h4`
  color: white;
  font-size: 1rem;
  font-weight: 600;
  margin: 0 0 8px;
`;

export const SideCardSubtitle = styled.p`
  color: rgba(255, 255, 255, 0.5);
  font-size: 13px;
  margin: 0 0 20px;
`;

export const SideCardActions = styled.div`
  display: flex;
  gap: 10px;
`;

export const SideCardAction = styled.button<{ $primary?: boolean }>`
  flex: 1;
  padding: 10px 16px;
  border-radius: 8px;
  border: 1px solid
    ${({ $primary }) =>
      $primary ? "rgba(139, 92, 246, 0.4)" : "rgba(255, 255, 255, 0.1)"};
  background: ${({ $primary }) =>
    $primary ? "rgba(139, 92, 246, 0.2)" : "rgba(255, 255, 255, 0.05)"};
  color: ${({ $primary }) => ($primary ? "#c084fc" : "rgba(255,255,255,0.7)")};
  font-size: 12px;
  font-weight: 600;
  cursor: pointer;
  transition: 0.2s ease;

  &:hover {
    background: ${({ $primary }) =>
      $primary ? "rgba(139, 92, 246, 0.3)" : "rgba(255, 255, 255, 0.1)"};
  }
`;
