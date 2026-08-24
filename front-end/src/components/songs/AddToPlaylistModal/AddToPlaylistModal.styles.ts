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
  width: min(480px, 100%);

  max-height: 85vh;

  display: flex;

  flex-direction: column;

  border-radius: 24px;

  background: rgba(25, 25, 35, 0.97);

  border: 1px solid rgba(255, 255, 255, 0.1);

  box-shadow: 0 25px 80px rgba(0, 0, 0, 0.45);

  color: white;

  overflow: hidden;

  @media (max-width: 480px) {
    border-radius: 16px;
    max-height: 80vh;
  }
`;

export const Header = styled.div`
  display: flex;

  align-items: flex-start;

  justify-content: space-between;

  padding: 1.4rem 1.5rem 1rem;

  @media (max-width: 480px) {
    padding: 1rem 1rem 0.8rem;
  }
`;

export const Title = styled.h2`
  margin: 0;

  font-size: 1.3rem;

  font-weight: 700;
`;

export const Subtitle = styled.p`
  margin: 0.3rem 0 0;

  color: rgba(255, 255, 255, 0.6);

  font-size: 0.9rem;
`;

export const CloseButton = styled.button`
  display: flex;

  align-items: center;

  justify-content: center;

  width: 36px;

  height: 36px;

  border: none;

  border-radius: 10px;

  background: rgba(255, 255, 255, 0.08);

  color: white;

  cursor: pointer;

  transition: 0.2s;

  &:hover {
    background: rgba(255, 255, 255, 0.15);
  }
`;

export const List = styled.div`
  flex: 1;

  overflow-y: auto;

  padding: 0 1.5rem;

  display: flex;

  flex-direction: column;

  gap: 0.5rem;
`;

export const PlaylistItem = styled.label`
  display: flex;

  align-items: center;

  gap: 0.85rem;

  padding: 0.7rem 0.85rem;

  border-radius: 14px;

  background: rgba(255, 255, 255, 0.05);

  border: 1px solid rgba(255, 255, 255, 0.07);

  cursor: pointer;

  transition: 0.2s;

  &:hover {
    background: rgba(255, 255, 255, 0.09);
  }
`;

export const Checkbox = styled.input`
  accent-color: #8b2fc9;

  width: 17px;

  height: 17px;

  cursor: pointer;
`;

export const Thumb = styled.img`
  width: 42px;

  height: 42px;

  object-fit: cover;

  border-radius: 10px;
`;

export const PlaceholderThumb = styled.div`
  width: 42px;

  height: 42px;

  display: flex;

  align-items: center;

  justify-content: center;

  border-radius: 10px;

  background: linear-gradient(135deg, rgba(139, 47, 201, 0.5), rgba(217, 79, 136, 0.4));

  color: white;

  font-size: 0.7rem;

  font-weight: 700;
`;

export const ItemInfo = styled.div`
  flex: 1;

  min-width: 0;
`;

export const ItemName = styled.div`
  color: white;

  font-weight: 600;

  font-size: 0.95rem;

  white-space: nowrap;

  overflow: hidden;

  text-overflow: ellipsis;
`;

export const ItemCount = styled.div`
  color: rgba(255, 255, 255, 0.5);

  font-size: 0.8rem;
`;

export const AddedBadge = styled.span`
  padding: 0.25rem 0.6rem;

  border-radius: 30px;

  background: rgba(34, 197, 94, 0.18);

  color: #4ade80;

  font-size: 0.75rem;

  font-weight: 600;

  white-space: nowrap;
`;

export const Empty = styled.div`
  padding: 2rem 1rem;

  text-align: center;

  color: rgba(255, 255, 255, 0.55);
`;

export const Footer = styled.div`
  display: flex;

  justify-content: flex-end;

  gap: 0.75rem;

  padding: 1rem 1.5rem 1.4rem;

  @media (max-width: 480px) {
    flex-direction: column;
    padding: 0.8rem 1rem 1.2rem;

    & > button {
      width: 100%;
    }
  }
`;

export const CancelButton = styled.button`
  padding: 0.7rem 1.2rem;

  border: 1px solid rgba(255, 255, 255, 0.15);

  border-radius: 12px;

  background: transparent;

  color: white;

  font-weight: 600;

  cursor: pointer;

  transition: 0.2s;

  &:hover {
    background: rgba(255, 255, 255, 0.08);
  }
`;

export const AddButton = styled.button`
  padding: 0.7rem 1.4rem;

  border: none;

  border-radius: 12px;

  background: linear-gradient(135deg, #8b2fc9, #d94f88);

  color: white;

  font-weight: 600;

  cursor: pointer;

  transition: 0.2s;

  &:disabled {
    opacity: 0.5;

    cursor: not-allowed;
  }

  &:not(:disabled):hover {
    transform: translateY(-2px);
  }
`;
