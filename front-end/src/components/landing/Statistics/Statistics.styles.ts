import styled from "@emotion/styled";

export const Section = styled.section`
  padding: 100px 0;
  background: #0d0d15;
`;

export const Container = styled.div`
  width: 90%;
  max-width: 1200px;
  margin: auto;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 30px;
`;

export const StatCard = styled.div`
  background: #171722;

  padding: 50px 20px;

  text-align: center;

  border-radius: 20px;

  transition: 0.3s;

  &:hover {
    background: #9f67ff;

    transform: translateY(-10px);
  }
`;

export const Number = styled.h2`
  color: white;

  font-size: 3rem;

  margin-bottom: 10px;
`;

export const Label = styled.p`
  color: #dddddd;

  font-size: 18px;
`;
