import styled from "@emotion/styled";

export const Card = styled.div`
  background: transparent;

  backdrop-filter: none;

  border: 1px solid transparent;

  border-radius: 20px;

  overflow: hidden;

  cursor: pointer;

  transition: 0.3s;

  &:hover {
    transform: translateY(-2px);

    border-color: rgba(255, 255, 255, 0.08);

    box-shadow: none;
  }
`;

export const CoverWrap = styled.div`
  position: relative;

  &:hover > div[data-overlay] {
    opacity: 1;
  }
`;

export const CoverImage = styled.img`
  width: 100%;

  height: 200px;

  object-fit: cover;

  display: block;
`;

export const PlayOverlay = styled.div`
  position: absolute;

  inset: 0;

  display: flex;

  align-items: center;

  justify-content: center;

  background: rgba(0, 0, 0, 0.35);

  opacity: 0;

  transition: 0.25s;
`;

export const PlayCircle = styled.div`
  display: flex;

  align-items: center;

  justify-content: center;

  width: 54px;

  height: 54px;

  border-radius: 50%;

  background: linear-gradient(135deg, #8b2fc9, #d94f88);

  color: white;

  box-shadow: 0 10px 30px rgba(139, 47, 201, 0.5);
`;

export const Content = styled.div`
  padding: 1.1rem 1.2rem 1.2rem;
`;

export const Title = styled.h3`
  color: white;

  font-size: 1.08rem;

  font-weight: 700;

  margin: 0;

  white-space: nowrap;

  overflow: hidden;

  text-overflow: ellipsis;
`;

export const Artist = styled.p`
  color: rgba(255, 255, 255, 0.6);

  font-size: 0.88rem;

  margin: 0.25rem 0 0.8rem;

  white-space: nowrap;

  overflow: hidden;

  text-overflow: ellipsis;
`;

export const Info = styled.div`
  display: flex;

  gap: 0.45rem;

  flex-wrap: wrap;

  margin-bottom: 1rem;
`;

export const Badge = styled.span`
  padding: 0.3rem 0.7rem;

  background: rgba(139, 47, 201, 0.28);

  border: 1px solid rgba(139, 47, 201, 0.35);

  border-radius: 30px;

  color: #d8b4fe;

  font-size: 0.73rem;

  white-space: nowrap;
`;

export const Actions = styled.div`
  display: flex;

  align-items: center;

  justify-content: space-between;

  gap: 0.5rem;
`;

export const LeftActions = styled.div`
  display: flex;

  align-items: center;

  gap: 0.4rem;
`;

export const PlaylistButton = styled.button`
  display: flex;

  align-items: center;

  gap: 0.45rem;

  border: none;

  padding: 0.5rem 0.85rem;

  border-radius: 10px;

  cursor: pointer;

  font-size: 0.82rem;

  font-weight: 600;

  color: white;

  background: linear-gradient(135deg, #8b2fc9, #d94f88);

  transition: 0.2s;

  &:hover {
    transform: translateY(-2px);

    box-shadow: 0 8px 22px rgba(139, 47, 201, 0.4);
  }
`;

export const LinkButton = styled.a`
  display: flex;

  align-items: center;

  justify-content: center;

  width: 32px;

  height: 32px;

  border-radius: 9px;

  color: rgba(255, 255, 255, 0.65);

  text-decoration: none;

  transition: 0.2s;

  &:hover {
    background: rgba(255, 255, 255, 0.12);

    color: white;
  }
`;
