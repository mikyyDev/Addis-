import styled from "@emotion/styled";

export const Panel = styled.div`
  width: 100%;
  max-width: 560px;

  max-height: 88vh;

  display: flex;
  flex-direction: column;

  padding: 26px;

  border: 1px solid rgba(108, 99, 255, 0.25);
  border-radius: 16px;

  background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);

  box-shadow: 0 24px 64px rgba(0, 0, 0, 0.45);
`;

export const SearchContainer = styled.div`
  display: flex;
  align-items: center;

  gap: 10px;

  margin-bottom: 16px;
  padding: 10px 13px;

  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 10px;

  background: rgba(255, 255, 255, 0.05);

  color: rgba(255, 255, 255, 0.6);
`;

export const SearchInput = styled.input`
  flex: 1;

  border: none;
  outline: none;

  background: transparent;

  color: #fff;

  font-size: 14px;

  ::placeholder {
    color: rgba(255, 255, 255, 0.4);
  }
`;

export const List = styled.div`
  flex: 1;

  overflow-y: auto;

  display: flex;
  flex-direction: column;
  gap: 8px;

  min-height: 200px;
`;

export const Row = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;

  padding: 9px 11px;

  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: 10px;

  background: rgba(255, 255, 255, 0.03);

  transition: background 0.15s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.07);
  }
`;

export const Checkbox = styled.input`
  width: 17px;
  height: 17px;

  accent-color: #6c63ff;

  cursor: pointer;
`;

export const Thumb = styled.div`
  width: 40px;
  height: 40px;

  flex-shrink: 0;

  overflow: hidden;

  border-radius: 8px;

  background: rgba(255, 255, 255, 0.06);

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const ThumbPlaceholder = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  color: rgba(255, 255, 255, 0.4);
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

  color: rgba(255, 255, 255, 0.55);

  font-size: 12px;
`;

export const AddedBadge = styled.span`
  flex-shrink: 0;

  padding: 3px 9px;

  border: 1px solid rgba(76, 175, 80, 0.4);
  border-radius: 999px;

  background: rgba(76, 175, 80, 0.12);

  color: #4caf50;

  font-size: 11px;
  font-weight: 600;
`;

export const Footer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  gap: 12px;

  margin-top: 18px;
  padding-top: 16px;

  border-top: 1px solid rgba(255, 255, 255, 0.08);
`;

export const SelectedCount = styled.span`
  color: rgba(255, 255, 255, 0.65);

  font-size: 13px;
`;

export const AddButton = styled.button`
  flex-shrink: 0;
  display: inline-flex;
  align-items: center;
  gap: 5px;

  padding: 6px 12px;

  border: 1px solid rgba(108, 99, 255, 0.4);
  border-radius: 8px;

  background: rgba(108, 99, 255, 0.12);
  color: #6c63ff;

  font-size: 0.8rem;
  font-weight: 600;

  cursor: pointer;

  transition: 0.2s;

  &:hover:not(:disabled) {
    background: rgba(108, 99, 255, 0.25);
    border-color: rgba(108, 99, 255, 0.6);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

export const CenterState = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  min-height: 200px;

  color: rgba(255, 255, 255, 0.55);

  font-size: 14px;
`;

export const ErrorText = styled.div`
  margin-bottom: 12px;

  color: #f44336;

  font-size: 13px;
`;
