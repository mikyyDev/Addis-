import styled from "@emotion/styled";

/* ─── Back Button ─── */

export const BackButton = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 7px;

  margin-bottom: 1.5rem;
  padding: 8px 14px;

  border: 1px solid rgba(255, 255, 255, 0.14);
  border-radius: 10px;

  background: rgba(255, 255, 255, 0.06);

  color: rgba(255, 255, 255, 0.8);
  font-size: 0.9rem;
  font-weight: 600;

  cursor: pointer;

  transition: 0.2s;

  &:hover {
    background: rgba(255, 255, 255, 0.12);
    color: #fff;
  }
`;

/* ─── Hero Section ─── */

export const Hero = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 32px;

  margin-bottom: 2rem;

  @media (max-width: 640px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 20px;
  }
`;

export const Cover = styled.div`
  width: 232px;
  height: 232px;
  flex-shrink: 0;

  overflow: hidden;
  border-radius: 8px;

  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);

  @media (max-width: 640px) {
    width: 160px;
    height: 160px;
  }
`;

export const Info = styled.div`
  flex: 1;
  min-width: 0;
`;

export const PlaylistLabel = styled.span`
  display: inline-block;

  margin-bottom: 8px;

  color: #d97706;
  font-size: 0.75rem;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 1.5px;
`;

export const Title = styled.h1`
  margin: 0;

  color: #fff;
  font-size: 3rem;
  font-weight: 900;
  line-height: 1.1;

  overflow-wrap: anywhere;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

export const Description = styled.p`
  margin: 0.6rem 0 0;

  color: rgba(255, 255, 255, 0.65);
  font-size: 0.95rem;
`;

/* ─── Stats Row ─── */

export const StatsRow = styled.div`
  display: flex;
  gap: 12px;

  margin-top: 1.2rem;

  @media (max-width: 480px) {
    flex-wrap: wrap;
    gap: 8px;
  }
`;

export const StatBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 14px 24px;

  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 10px;

  min-width: 80px;

  @media (max-width: 480px) {
    padding: 10px 16px;
    min-width: 60px;
  }
`;

export const StatValue = styled.span`
  color: #fff;
  font-size: 1.5rem;
  font-weight: 800;
`;

export const StatLabel = styled.span`
  color: rgba(255, 255, 255, 0.5);
  font-size: 0.68rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

/* ─── Action Buttons ─── */

export const Actions = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-top: 1.5rem;
  flex-wrap: wrap;

  @media (max-width: 480px) {
    gap: 8px;

    & > button {
      width: 100%;
      justify-content: center;
    }
  }
`;

export const PrimaryButton = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 8px;

  padding: 0.75rem 1.6rem;

  border: none;
  border-radius: 50px;

  background: #d97706;
  color: #000;

  font-size: 0.9rem;
  font-weight: 700;

  cursor: pointer;

  transition: 0.2s;

  &:hover {
    background: #f59e0b;
    transform: scale(1.03);
  }
`;

export const GhostButton = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 8px;

  padding: 0.75rem 1.25rem;

  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 50px;

  background: transparent;
  color: rgba(255, 255, 255, 0.85);

  font-size: 0.85rem;
  font-weight: 600;

  cursor: pointer;

  transition: 0.2s;

  &:hover {
    border-color: rgba(255, 255, 255, 0.5);
    color: #fff;
  }
`;

export const DangerButton = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 8px;

  padding: 0.75rem 1.25rem;

  border: 1px solid rgba(239, 68, 68, 0.4);
  border-radius: 50px;

  background: rgba(239, 68, 68, 0.1);
  color: #ef4444;

  font-size: 0.85rem;
  font-weight: 600;

  cursor: pointer;

  transition: 0.2s;

  &:hover {
    background: rgba(239, 68, 68, 0.2);
    border-color: rgba(239, 68, 68, 0.6);
  }
`;

/* ─── Song Table ─── */

export const SongTableHeader = styled.div`
  display: grid;
  grid-template-columns: 48px 1fr 120px 120px;

  align-items: center;

  padding: 8px 16px;

  border-bottom: 1px solid rgba(255, 255, 255, 0.1);

  color: rgba(255, 255, 255, 0.5);
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;

  @media (max-width: 640px) {
    grid-template-columns: 36px 1fr auto;
    padding: 8px 10px;
  }

  @media (max-width: 480px) {
    display: none;
  }
`;

export const SongTableHeaderNum = styled.span`
  text-align: center;
`;

export const SongTableHeaderTitle = styled.span`
  padding-left: 12px;
`;

export const SongTableHeaderLinks = styled.span`
  text-align: center;
`;

export const AddSongsButton = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 7px;

  padding: 0.7rem 1.1rem;

  border: 1px solid rgba(108, 99, 255, 0.45);
  border-radius: 10px;

  background: rgba(108, 99, 255, 0.15);
  color: #fff;

  font-size: 0.85rem;
  font-weight: 600;

  cursor: pointer;

  transition: 0.2s;

  &:hover {
    background: rgba(108, 99, 255, 0.3);
  }
`;

/* ─── Empty State ─── */

export const EmptySongs = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 12px;

  padding: 60px 20px;

  border: 1px dashed rgba(255, 255, 255, 0.15);
  border-radius: 16px;

  text-align: center;
  color: rgba(255, 255, 255, 0.5);
`;

export const EmptySongsTitle = styled.h3`
  margin: 0;
  color: #fff;
  font-size: 1.1rem;
`;

export const EmptySongsText = styled.p`
  margin: 0;
  font-size: 0.9rem;
`;

/* ─── Drag Hint ─── */

export const DragHint = styled.p`
  margin: 10px 0 0;
  color: rgba(255, 255, 255, 0.35);
  font-size: 0.8rem;
`;

/* ─── Visibility Badge ─── */

export const VisibilityBadge = styled.span<{ $public?: boolean }>`
  display: inline-flex;
  align-items: center;
  gap: 5px;

  padding: 4px 10px;
  margin-top: 0.5rem;

  border-radius: 8px;

  font-size: 0.72rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;

  ${({ $public }) =>
    $public
      ? `
        background: rgba(76, 175, 80, 0.15);
        color: #4caf50;
        border: 1px solid rgba(76, 175, 80, 0.3);
      `
      : `
        background: rgba(255, 255, 255, 0.08);
        color: #999;
        border: 1px solid rgba(255, 255, 255, 0.12);
      `}
`;
