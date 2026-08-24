import styled from "@emotion/styled";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-bottom: 2rem;

  gap: 2rem;

  flex-wrap: wrap;

  @media (max-width: 480px) {
    flex-direction: column;
    align-items: stretch;
    gap: 1rem;
  }
`;

export const Left = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Right = styled.div`
  display: flex;
  align-items: center;

  gap: 1rem;
`;

export const Title = styled.h1`
  font-size: 2rem;
  font-weight: 700;

  color: white;

  @media (max-width: 480px) {
    font-size: 1.5rem;
  }
`;

export const Subtitle = styled.p`
  margin-top: 0.35rem;

  color: rgba(255, 255, 255, 0.65);

  font-size: 0.95rem;
`;

export const SearchContainer = styled.div`
  display: flex;
  align-items: center;

  width: 300px;
  height: 44px;

  border-radius: 50px;

  background: rgba(255, 255, 255, 0.08);

  backdrop-filter: blur(15px);

  border: 1px solid rgba(255, 255, 255, 0.08);

  transition: 0.3s;

  &:focus-within {
    border-color: #8b5cf6;

    box-shadow: 0 0 25px rgba(139, 92, 246, 0.35);
  }

  @media (max-width: 700px) {
    width: 100%;
  }
`;

export const SearchIcon = styled.div`
  color: rgba(255, 255, 255, 0.7);

  margin-left: 18px;

  display: flex;

  align-items: center;
`;

export const SearchInput = styled.input`
  flex: 1;

  border: none;
  background: none;
  outline: none;

  color: white;

  padding: 0 18px;

  font-size: 0.95rem;

  ::placeholder {
    color: rgba(255, 255, 255, 0.55);
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
