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
  max-width: 640px;

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
  align-items: center;
  gap: 18px;

  @media (max-width: 520px) {
    flex-direction: column;
    text-align: center;
  }
`;

export const Avatar = styled.div`
  position: relative;

  width: 96px;
  height: 96px;

  flex-shrink: 0;

  overflow: hidden;

  border-radius: 50%;

  background: rgba(255, 255, 255, 0.06);

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }

  @media (max-width: 480px) {
    width: 72px;
    height: 72px;
  }
`;

export const AvatarPlaceholder = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  color: rgba(255, 255, 255, 0.6);
`;

export const Title = styled.h2`
  margin: 0 0 4px;

  color: #fff;

  font-size: 24px;
  font-weight: 700;

  overflow-wrap: anywhere;

  @media (max-width: 480px) {
    font-size: 20px;
  }
`;

export const Stats = styled.div`
  display: flex;
  gap: 16px;

  margin-top: 6px;

  color: ${({ theme }) => theme.colors.textSecondary};

  font-size: 12px;

  span {
    display: inline-flex;
    align-items: center;
    gap: 5px;
  }
`;

export const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;

  margin-top: 10px;
`;

export const Tag = styled.span`
  padding: 4px 10px;

  border: 1px solid rgba(108, 99, 255, 0.3);
  border-radius: 999px;

  background: rgba(108, 99, 255, 0.12);

  color: #a99cff;

  font-size: 11px;
  font-weight: 600;
`;

export const LastFmLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 6px;

  margin-top: 10px;

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

export const Bio = styled.p`
  margin: 12px 0 0;

  color: ${({ theme }) => theme.colors.textSecondary};

  font-size: 14px;
  line-height: 1.6;
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

export const Rank = styled.span`
  width: 22px;

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

export const TrackMeta = styled.span`
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

export const AlbumGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(130px, 1fr));
  gap: 16px;

  @media (max-width: 480px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
  }
`;

export const AlbumItem = styled.button`
  min-width: 0;

  padding: 0;

  border: none;
  background: none;

  text-align: left;

  cursor: pointer;

  img {
    width: 100%;
    aspect-ratio: 1 / 1;
    object-fit: cover;

    border-radius: 12px;

    display: block;

    transition: transform 0.2s ease;
  }

  &:hover img {
    transform: scale(1.04);
  }
`;

export const AlbumPlaceholder = styled.div`
  width: 100%;
  aspect-ratio: 1 / 1;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 12px;

  background: rgba(255, 255, 255, 0.06);

  color: rgba(255, 255, 255, 0.5);
`;

export const AlbumName = styled.span`
  display: block;

  margin-top: 7px;

  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  color: ${({ theme }) => theme.colors.text};

  font-size: 13px;
  font-weight: 600;
`;

export const AlbumArtist = styled.span`
  display: block;

  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  color: ${({ theme }) => theme.colors.textSecondary};

  font-size: 11px;
`;

export const CenterState = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  min-height: 220px;

  color: ${({ theme }) => theme.colors.textSecondary};

  font-size: 14px;
`;

export const ErrorBox = styled.div`
  margin: 12px 0;

  padding: 12px 14px;

  border: 1px solid rgba(244, 67, 54, 0.4);
  border-radius: 10px;

  background: rgba(244, 67, 54, 0.1);

  color: #f44336;

  font-size: 13px;
`;
