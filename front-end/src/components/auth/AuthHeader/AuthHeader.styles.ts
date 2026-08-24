import styled from "@emotion/styled";

export const Container = styled.div`
  text-align: center;
  margin-bottom: 40px;
`;

export const FaviconImage = styled.img`
  width: 80px;
  height: 80px;
  margin-bottom: 5px;
  display: block;
  margin-left: auto;
  margin-right: auto;
`;

export const Title = styled.h2`
  color: white;
  font-size: 2rem;
  margin-bottom: 10px;
`;

export const Subtitle = styled.p`
  color: ${({ theme }) => theme.colors.textSecondary};
`;
