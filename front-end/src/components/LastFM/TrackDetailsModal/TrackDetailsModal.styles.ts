import styled from "@emotion/styled";

export const Backdrop = styled.div`
  position: fixed;
  inset: 0;
  z-index: 990;

  display: flex;
  justify-content: flex-end;

  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(6px);

  animation: fadeIn 0.2s ease;

  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }
`;

export const PanelShell = styled.div`
  position: relative;
  width: 100%;
  max-width: 440px;
  height: 100%;

  animation: slideIn 0.25s ease-out;

  @keyframes slideIn {
    from { transform: translateX(100%); }
    to { transform: translateX(0); }
  }

  @media (max-width: 480px) {
    max-width: 100%;
  }
`;

export const Panel = styled.div`
  position: relative;
  width: 100%;
  height: 100%;

  overflow-y: auto;

  padding: 0;

  background: linear-gradient(180deg, #121218 0%, #0e0e14 100%);
  border-left: 1px solid rgba(255, 255, 255, 0.08);
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 16px;
  right: 16px;
  z-index: 10;

  width: 36px;
  height: 36px;

  display: flex;
  align-items: center;
  justify-content: center;

  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 50%;

  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(8px);

  color: #aaa;

  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.1);
    color: #fff;
  }
`;

export const HeroArtwork = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 1 / 1;
  overflow: hidden;

  background: rgba(255, 255, 255, 0.04);

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 120px;
    background: linear-gradient(transparent, #121218);
    pointer-events: none;
  }
`;

export const ArtworkPlaceholder = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  color: rgba(255, 255, 255, 0.3);
  background: linear-gradient(135deg, rgba(108, 99, 255, 0.1), rgba(255, 107, 157, 0.05));
`;

export const TrackHeader = styled.div`
  padding: 0 24px;
  margin-top: -30px;
  position: relative;
  z-index: 2;

  @media (max-width: 480px) {
    padding: 0 16px;
    margin-top: -20px;
  }
`;

export const Title = styled.h2`
  margin: 0 0 6px;

  color: #fff;
  font-size: 26px;
  font-weight: 800;
  letter-spacing: -0.03em;
  line-height: 1.15;

  overflow-wrap: anywhere;

  @media (max-width: 480px) {
    font-size: 20px;
  }
`;

export const ArtistButton = styled.button`
  margin: 0;
  padding: 0;

  border: none;
  background: none;

  color: #a99cff;
  font-size: 15px;
  font-weight: 500;

  cursor: pointer;
  transition: color 0.15s ease;

  &:hover {
    color: #c4b5fd;
    text-decoration: underline;
  }
`;

export const AlbumChip = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 6px;

  margin-top: 12px;
  padding: 6px 12px;

  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 8px;

  background: rgba(255, 255, 255, 0.04);

  color: rgba(255, 255, 255, 0.6);
  font-size: 12px;
  font-weight: 500;
`;

export const Divider = styled.div`
  height: 1px;
  margin: 24px 24px;
  background: rgba(255, 255, 255, 0.06);

  @media (max-width: 480px) {
    margin: 16px;
  }
`;

export const InLibraryBadge = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 7px;

  margin: 0 24px;

  padding: 10px 16px;

  border: 1px solid rgba(76, 175, 80, 0.35);
  border-radius: 10px;

  background: rgba(76, 175, 80, 0.08);

  color: #4caf50;
  font-size: 13px;
  font-weight: 600;

  @media (max-width: 480px) {
    margin: 0 16px;
    padding: 8px 12px;
    font-size: 12px;
  }
`;

export const PrimaryButton = styled.button`
  width: calc(100% - 48px);
  margin: 0 24px;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  padding: 14px 20px;

  border: none;
  border-radius: 12px;

  background: linear-gradient(135deg, #6c63ff 0%, #7b6cff 100%);

  color: #fff;
  font-size: 14px;
  font-weight: 700;

  cursor: pointer;
  transition: all 0.2s ease;

  box-shadow: 0 8px 24px rgba(108, 99, 255, 0.3);

  &:hover {
    background: linear-gradient(135deg, #7b6cff 0%, #8b7cff 100%);
    transform: translateY(-1px);
    box-shadow: 0 12px 32px rgba(108, 99, 255, 0.4);
  }

  &:active {
    transform: translateY(0);
  }

  @media (max-width: 480px) {
    width: calc(100% - 32px);
    margin: 0 16px;
    padding: 12px 16px;
    font-size: 13px;
  }
`;

export const SectionTitle = styled.h4`
  margin: 0 0 12px;
  padding: 0 24px;

  color: rgba(255, 255, 255, 0.4);
  font-size: 11px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1.5px;

  @media (max-width: 480px) {
    padding: 0 16px;
  }
`;

export const SourceGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  padding: 0 24px;

  @media (max-width: 480px) {
    grid-template-columns: repeat(2, 1fr);
    padding: 0 16px;
    gap: 8px;
  }

  @media (max-width: 400px) {
    grid-template-columns: 1fr;
  }
`;

export const SourceButton = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 6px;
  padding: 16px 10px;

  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;

  background: rgba(255, 255, 255, 0.03);

  color: rgba(255, 255, 255, 0.7);
  font-size: 12px;
  font-weight: 600;

  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: rgba(108, 99, 255, 0.12);
    border-color: rgba(108, 99, 255, 0.3);
    color: #fff;
    transform: translateY(-2px);
  }

  svg {
    flex-shrink: 0;
    color: rgba(255, 255, 255, 0.4);
  }

  &:hover svg {
    color: #a99cff;
  }
`;
