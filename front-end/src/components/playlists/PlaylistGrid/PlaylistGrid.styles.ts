import styled from "@emotion/styled";

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 24px;
  width: 100%;

  @media (max-width: 640px) {
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    gap: 16px;
  }

  @media (max-width: 430px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 12px;
  }
`;

export const Skeleton = styled.div`
  background: rgba(255, 255, 255, 0.05);
  border-radius: 12px;
  aspect-ratio: 1 / 1.15;
  animation: pulse 2s ease-in-out infinite;
`;

export const Empty = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  gap: 12px;
  padding: 60px 20px;

  border: 1px dashed rgba(255, 255, 255, 0.15);
  border-radius: 16px;

  color: rgba(255, 255, 255, 0.6);
  text-align: center;
`;

export const EmptyTitle = styled.h3`
  margin: 0;
  color: white;
  font-size: 1.2rem;
`;

export const EmptyText = styled.p`
  margin: 0;
  font-size: 0.9rem;
  max-width: 380px;
`;

export const CreateButton = styled.button`
  margin-top: 8px;
  padding: 0.75rem 1.4rem;

  border: 1px solid rgba(108, 99, 255, 0.5);
  border-radius: 12px;

  background: rgba(108, 99, 255, 0.18);
  color: #fff;

  font-size: 0.9rem;
  font-weight: 600;

  cursor: pointer;

  transition: 0.2s;

  &:hover {
    background: rgba(108, 99, 255, 0.32);
  }
`;
