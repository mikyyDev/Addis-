import styled from "@emotion/styled";

export const Overlay = styled.div`
  position: fixed;

  inset: 0;

  z-index: 1000;

  display: flex;

  align-items: center;

  justify-content: center;

  padding: 1.5rem;

  background: rgba(0, 0, 0, 0.7);

  backdrop-filter: blur(8px);

  overflow-y: auto;
`;

export const Modal = styled.div`
  width: min(560px, 100%);

  border-radius: 24px;

  background: rgba(25, 25, 35, 0.97);

  border: 1px solid rgba(255, 255, 255, 0.1);

  box-shadow: 0 25px 80px rgba(0, 0, 0, 0.45);

  color: white;

  overflow: hidden;
`;

export const Hero = styled.div`
  position: relative;

  display: flex;

  flex-direction: column;

  align-items: center;

  gap: 1rem;

  padding: 2rem 1.5rem 1.5rem;

  background: linear-gradient(160deg, rgba(139, 47, 201, 0.35), rgba(217, 79, 136, 0.15) 60%, transparent);
`;

export const CloseButton = styled.button`
  position: absolute;

  top: 1rem;

  right: 1rem;

  display: flex;

  align-items: center;

  justify-content: center;

  width: 36px;

  height: 36px;

  border: none;

  border-radius: 10px;

  background: rgba(255, 255, 255, 0.1);

  color: white;

  cursor: pointer;

  transition: 0.2s;

  &:hover {
    background: rgba(255, 255, 255, 0.2);

    transform: rotate(90deg);
  }
`;

export const Artwork = styled.img`
  width: 170px;

  height: 170px;

  object-fit: cover;

  border-radius: 18px;

  border: 1px solid rgba(255, 255, 255, 0.15);

  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.4);

  @media (max-width: 480px) {
    width: 130px;
    height: 130px;
  }
`;

export const Title = styled.h2`
  margin: 0;

  font-size: 1.6rem;

  font-weight: 700;

  text-align: center;
`;

export const Artist = styled.p`
  margin: -0.5rem 0 0;

  color: rgba(255, 255, 255, 0.65);

  font-size: 1rem;
`;

export const SourceRow = styled.div`
  display: flex;

  justify-content: center;

  gap: 0.6rem;

  flex-wrap: wrap;

  @media (max-width: 480px) {
    gap: 0.4rem;
  }
`;

export const SourceLink = styled.a`
  display: flex;

  align-items: center;

  gap: 0.45rem;

  padding: 0.5rem 0.9rem;

  border-radius: 10px;

  text-decoration: none;

  color: white;

  font-size: 0.85rem;

  font-weight: 600;

  transition: 0.2s;

  &:hover {
    transform: translateY(-2px);
  }
`;

export const YoutubeLink = styled(SourceLink)`
  background: rgba(255, 0, 0, 0.75);
`;

export const SpotifyLink = styled(SourceLink)`
  background: rgba(29, 185, 84, 0.8);
`;

export const LastFmLink = styled(SourceLink)`
  background: rgba(255, 255, 255, 0.12);

  border: 1px solid rgba(255, 255, 255, 0.15);
`;

export const Body = styled.div`
  padding: 1.25rem 1.5rem 1.5rem;
`;

export const InfoGrid = styled.div`
  display: grid;

  grid-template-columns: repeat(2, 1fr);

  gap: 0.75rem;

  margin-bottom: 1.25rem;

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

export const InfoItem = styled.div`
  padding: 0.8rem 1rem;

  border-radius: 14px;

  background: rgba(255, 255, 255, 0.06);

  border: 1px solid rgba(255, 255, 255, 0.07);
`;

export const InfoLabel = styled.div`
  display: flex;

  align-items: center;

  gap: 0.4rem;

  color: rgba(255, 255, 255, 0.5);

  font-size: 0.75rem;

  text-transform: uppercase;

  letter-spacing: 0.05em;

  margin-bottom: 0.3rem;
`;

export const InfoValue = styled.div`
  color: white;

  font-size: 0.95rem;

  font-weight: 600;
`;

export const Actions = styled.div`
  display: flex;

  gap: 0.75rem;

  flex-wrap: wrap;

  @media (max-width: 480px) {
    flex-direction: column;

    & > button {
      width: 100%;
    }
  }
`;

export const ActionButton = styled.button`
  flex: 1;

  min-width: 130px;

  display: flex;

  align-items: center;

  justify-content: center;

  gap: 0.5rem;

  padding: 0.75rem 1rem;

  border: none;

  border-radius: 12px;

  cursor: pointer;

  font-weight: 600;

  font-size: 0.9rem;

  transition: 0.2s;

  &:hover {
    transform: translateY(-2px);
  }
`;

export const PlaylistButton = styled(ActionButton)`
  background: linear-gradient(135deg, #8b2fc9, #d94f88);

  color: white;
`;

export const EditButton = styled(ActionButton)`
  background: rgba(255, 255, 255, 0.1);

  border: 1px solid rgba(255, 255, 255, 0.15);

  color: white;
`;

export const DeleteButton = styled(ActionButton)`
  background: rgba(239, 68, 68, 0.15);

  border: 1px solid rgba(239, 68, 68, 0.4);

  color: #f87171;
`;
