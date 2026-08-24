import styled from "@emotion/styled";

export const Section = styled.section`
  padding: 120px 0;
  background: #09090f;
`;

export const Container = styled.div`
  width: 90%;
  max-width: 1200px;
  margin: auto;
`;

export const SectionSubtitle = styled.p`
  color: #9f67ff;
  text-align: center;
  letter-spacing: 3px;
  font-weight: 600;
`;

export const SectionTitle = styled.h2`
  color: white;
  text-align: center;
  font-size: 3rem;
  margin: 15px 0 60px;
`;

export const CardGrid = styled.div`
  display: grid;

  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));

  gap: 30px;
`;

export const Card = styled.div`
  background: #12121d;

  border: 1px solid rgba(255, 255, 255, 0.08);

  border-radius: 20px;

  padding: 40px;

  transition: 0.35s;

  cursor: pointer;

  &:hover {
    transform: translateY(-12px);

    border-color: #9f67ff;

    box-shadow: 0 15px 35px rgba(159, 103, 255, 0.3);
  }
`;

export const CardIcon = styled.div`
  font-size: 3rem;

  margin-bottom: 25px;
`;

export const CardTitle = styled.h3`
  color: white;

  margin-bottom: 15px;

  font-size: 1.5rem;
`;

export const CardDescription = styled.p`
  color: #c8c8c8;

  line-height: 1.7;
`;
