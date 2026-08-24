import styled from "@emotion/styled";

export const Toolbar = styled.div`
  display: flex;

  align-items: center;

  justify-content: space-between;

  gap: 1rem;

  flex-wrap: wrap;

  margin-bottom: 1.5rem;

  padding: 0.9rem 1.25rem;

  backdrop-filter: blur(16px);
`;

export const Filters = styled.div`
  display: flex;

  align-items: center;

  gap: 0.75rem;

  flex-wrap: wrap;
`;

export const Select = styled.select`
  padding: 0.55rem 0.9rem;

  border-radius: 12px;

  border: 1px solid rgba(255, 255, 255, 0.12);

  outline: none;

  background: rgba(255, 255, 255, 0.08);

  color: white;

  font-size: 0.9rem;

  cursor: pointer;

  option {
    background: #1a1a2e;

    color: white;
  }
`;

export const Right = styled.div`
  display: flex;

  align-items: center;

  gap: 0.75rem;
`;

export const ResultCount = styled.span`
  color: rgba(255, 255, 255, 0.55);

  font-size: 0.9rem;

  white-space: nowrap;
`;
