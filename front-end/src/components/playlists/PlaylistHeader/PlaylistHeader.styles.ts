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

  @media (max-width: 640px) {
    width: 100%;
    flex-direction: column;
    align-items: stretch;
  }
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

  color: rgba(255, 255, 255, 0.7);

  font-size: 0.95rem;
`;

export const SearchContainer = styled.div`
  display: flex;
  align-items: center;

  gap: 0.75rem;

  padding: 0.8rem 1rem;

  width: 320px;

  border-radius: 14px;

  background: rgba(255, 255, 255, 0.08);

  backdrop-filter: blur(15px);

  color: white;

  @media (max-width: 640px) {
    width: 100%;
  }
`;

export const SearchInput = styled.input`
  flex: 1;

  border: none;
  outline: none;

  background: transparent;

  color: white;

  font-size: 0.95rem;

  ::placeholder {
    color: rgba(255, 255, 255, 0.6);
  }
`;

export const AddButton = styled.button`
  display: flex;
  align-items: center;

  gap: 0.6rem;

  border: none;

  padding: 0.9rem 1.3rem;

  border-radius: 14px;

  cursor: pointer;

  font-weight: 600;

  background: linear-gradient(135deg, #7b6cff, #6c63ff);

  color: white;

  transition: 0.25s;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(108, 99, 255, 0.35);
  }
`;
