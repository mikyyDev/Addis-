import styled from "@emotion/styled";

export const Section = styled.section`
  margin-top: 44px;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  margin-bottom: 16px;
  padding-bottom: 12px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);

  @media (max-width: 480px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 6px;
  }
`;

export const Title = styled.h2`
  margin: 0;
  color: #fff;
  font-size: 18px;
  font-weight: 700;
  letter-spacing: -0.02em;
`;

export const ViewAllLink = styled.a`
  color: #a99cff;
  font-size: 13px;
  font-weight: 600;
  text-decoration: none;
  transition: color 0.15s ease;

  &:hover {
    color: #c4b5fd;
    text-decoration: underline;
  }
`;

export const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const Item = styled.li`
  display: flex;
  align-items: center;
  gap: 14px;

  padding: 10px 14px;

  border-radius: 10px;

  background: transparent;

  transition: background 0.2s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.04);
  }

  @media (max-width: 480px) {
    gap: 10px;
    padding: 8px 10px;
  }
`;

export const Thumb = styled.div`
  position: relative;
  width: 44px;
  height: 44px;
  flex-shrink: 0;
  overflow: hidden;
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.06);

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.25s ease;
  }

  @media (max-width: 480px) {
    width: 38px;
    height: 38px;
  }
`;

export const ThumbPlaceholder = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  color: rgba(255, 255, 255, 0.3);
`;

export const Info = styled.div`
  flex: 1;
  min-width: 0;
`;

export const SongTitle = styled.span`
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: #fff;
  font-size: 14px;
  font-weight: 600;
`;

export const SongArtist = styled.span`
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: rgba(255, 255, 255, 0.45);
  font-size: 12px;
`;

export const AddedAt = styled.span`
  flex-shrink: 0;
  color: rgba(255, 255, 255, 0.3);
  font-size: 12px;
  font-weight: 500;

  display: flex;
  align-items: center;
  gap: 5px;

  @media (max-width: 480px) {
    display: none;
  }
`;

export const RemoveButton = styled.button`
  width: 30px;
  height: 30px;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 0;
  border-radius: 50%;
  background: transparent;
  color: rgba(255, 255, 255, 0.45);
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover:not(:disabled) {
    background: rgba(255, 255, 255, 0.08);
    color: #fff;
  }

  &:disabled {
    opacity: 0.45;
    cursor: wait;
  }
`;

export const Skeleton = styled.div`
  height: 64px;
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.04);
  animation: shimmer 1.5s ease-in-out infinite;
  background-size: 200% 100%;
  background-image: linear-gradient(
    90deg,
    rgba(255, 255, 255, 0.03) 25%,
    rgba(255, 255, 255, 0.08) 50%,
    rgba(255, 255, 255, 0.03) 75%
  );
`;

export const Empty = styled.p`
  margin: 0;
  padding: 24px;
  border: 1px dashed rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  color: rgba(255, 255, 255, 0.4);
  font-size: 13px;
  text-align: center;
  line-height: 1.6;

  strong {
    color: rgba(255, 255, 255, 0.65);
    font-weight: 600;
  }
`;
