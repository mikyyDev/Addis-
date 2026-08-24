import styled from "@emotion/styled";

export const Container = styled.header`
  display: flex;

  justify-content: flex-end;

  align-items: center;
  padding: 20px;
  margin-bottom: 20px;
  gap: 14px;

  width: 98%;

  @media (max-width: 900px) {
    justify-content: flex-start;
    gap: 12px;
    padding: 12px 0 16px;
    width: 100%;
  }
`;

export const SearchContainer = styled.div`
  display: flex;

  align-items: center;

  width: 300px;

  height: 42px;

  border-radius: 50px;

  background: rgba(255, 255, 255, 0.08);

  backdrop-filter: blur(15px);

  border: 1px solid rgba(255, 255, 255, 0.08);

  transition: 0.3s;

  &:focus-within {
    border-color: #8b5cf6;

    box-shadow: 0 0 25px rgba(139, 92, 246, 0.35);
  }

  @media (max-width: 600px) {
    flex: 1;
    width: auto;
  }
`;

export const SearchIcon = styled.div`
  color: white;

  margin-left: 20px;

  display: flex;

  align-items: center;
`;

export const SearchInput = styled.input`
  flex: 1;

  border: none;

  background: none;

  outline: none;

  color: white;

  padding: 10px 20px;

  font-size: 15px;

  &::placeholder {
    color: #c8c8d5;
  }
`;

export const ProfileContainer = styled.div`
  width: 40px;

  height: 40px;

  border-radius: 50%;

  overflow: hidden;

  cursor: pointer;

  border: 2px solid #8b5cf6;

  transition: 0.3s;

  &:hover {
    transform: scale(1.08);
  }
`;

export const ProfileImage = styled.img`
  width: 100%;

  height: 100%;

  object-fit: cover;
`;

export const AvatarInitials = styled.span`
  width: 100%;

  height: 100%;

  display: flex;

  align-items: center;

  justify-content: center;

  background: linear-gradient(135deg, #7c3aed, #5b21b6);

  color: white;

  font-size: 15px;

  font-weight: 700;

  text-transform: uppercase;
`;
