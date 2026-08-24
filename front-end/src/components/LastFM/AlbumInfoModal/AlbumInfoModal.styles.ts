import styled from "@emotion/styled";

export const Backdrop = styled.div`
  position: fixed;
  inset: 0;
  z-index: 991;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 20px;

  background: rgba(0, 0, 0, 0.65);
  backdrop-filter: blur(4px);
`;

export const Panel = styled.div`
  position: relative;

  width: 100%;
  max-width: 600px;

  max-height: 90vh;

  overflow-y: auto;

  padding: 28px;

  border: 1px solid rgba(108, 99, 255, 0.25);
  border-radius: 16px;

  background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);

  box-shadow: 0 24px 64px rgba(0, 0, 0, 0.45);

  @media (max-width: 480px) {
    padding: 20px 16px;
    max-height: 85vh;
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 16px;
  right: 16px;
  z-index: 2;

  width: 32px;
  height: 32px;

  display: flex;
  align-items: center;
  justify-content: center;

  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 50%;

  background: rgba(255, 255, 255, 0.06);

  color: #bbb;

  cursor: pointer;

  transition: all 0.2s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.14);
    color: #fff;
  }
`;

export const Header = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 18px;

  @media (max-width: 520px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
`;

export const Artwork = styled.div`
  width: 140px;
  height: 140px;

  flex-shrink: 0;

  overflow: hidden;

  border-radius: 14px;

  background: rgba(255, 255, 255, 0.06);

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }

  @media (max-width: 480px) {
    width: 100px;
    height: 100px;
  }
`;

export const ArtworkPlaceholder = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  color: rgba(255, 255, 255, 0.5);
`;

export const Title = styled.h2`
  margin: 0 0 4px;

  color: #fff;

  font-size: 22px;
  font-weight: 700;

  overflow-wrap: anywhere;

  @media (max-width: 480px) {
    font-size: 18px;
  }
`;

export const ArtistButton = styled.button`
  margin: 0;
  padding: 0;

  border: none;
  background: none;

  color: #a99cff;

  font-size: 15px;

  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

export const Meta = styled.p`
  margin: 8px 0 0;

  color: ${({ theme }) => theme.colors.textSecondary};

  font-size: 13px;
`;

export const LastFmLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 6px;

  margin-top: 12px;

  color: #6c63ff;

  font-size: 13px;
  font-weight: 600;

  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

export const SectionTitle = styled.h3`
  margin: 26px 0 12px;

  color: ${({ theme }) => theme.colors.text};

  font-size: 16px;
  font-weight: 650;
`;

export const TrackList = styled.ol`
  margin: 0;
  padding: 0;

  list-style: none;
`;

export const TrackItem = styled.li`
  display: flex;
  align-items: center;
  gap: 12px;

  padding: 10px 12px;

  border-radius: 10px;

  transition: background 0.15s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.05);
  }

  @media (max-width: 480px) {
    gap: 8px;
    padding: 8px 8px;
  }
`;

export const TrackNumber = styled.span`
  width: 26px;

  color: ${({ theme }) => theme.colors.textSecondary};

  font-size: 13px;
  font-weight: 700;

  text-align: center;
`;

export const TrackName = styled.span`
  flex: 1;
  min-width: 0;

  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  color: ${({ theme }) => theme.colors.text};

  font-size: 14px;
  font-weight: 500;
`;

export const TrackDuration = styled.span`
  color: ${({ theme }) => theme.colors.textSecondary};

  font-size: 12px;

  white-space: nowrap;
`;

export const TrackAction = styled.button`
  width: 30px;
  height: 30px;

  display: flex;
  align-items: center;
  justify-content: center;

  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 50%;

  background: rgba(255, 255, 255, 0.05);

  color: ${({ theme }) => theme.colors.textSecondary};

  cursor: pointer;

  transition: all 0.15s ease;

  &:hover {
    border-color: rgba(108, 99, 255, 0.5);
    color: #fff;
  }
`;

export const CenterState = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  min-height: 220px;

  color: ${({ theme }) => theme.colors.textSecondary};

  font-size: 14px;
`;

export const EmptyTracks = styled.p`
  margin: 0;

  padding: 16px;

  border: 1px dashed rgba(255, 255, 255, 0.15);
  border-radius: 10px;

  color: ${({ theme }) => theme.colors.textSecondary};

  font-size: 13px;

  text-align: center;
`;
