import styled from "@emotion/styled";

export const Section = styled.section`
  margin-top: 40px;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  margin-bottom: 16px;

  @media (max-width: 480px) {
    flex-wrap: wrap;
    gap: 8px;
  }
`;

export const Title = styled.h2`
  margin: 0;
  color: #fff;
  font-size: 16px;
  font-weight: 700;
  letter-spacing: -0.02em;
`;

export const Count = styled.span`
  color: rgba(255, 255, 255, 0.35);
  font-size: 13px;
  font-weight: 500;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(190px, 1fr));
  gap: 14px;

  @media (max-width: 640px) {
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    gap: 10px;
  }

  @media (max-width: 430px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 8px;
  }
`;

export const Card = styled.div`
  position: relative;

  padding: 14px;

  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 12px;

  background: rgba(255, 255, 255, 0.03);

  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.06);
    border-color: rgba(108, 99, 255, 0.3);
    transform: translateY(-2px);
  }

  @media (max-width: 480px) {
    padding: 10px;
  }
`;

export const RemoveButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;

  width: 26px;
  height: 26px;

  display: flex;
  align-items: center;
  justify-content: center;

  border: 1px solid rgba(255, 107, 107, 0.25);
  border-radius: 50%;

  background: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(6px);

  color: rgba(255, 107, 107, 0.7);
  font-size: 12px;

  cursor: pointer;
  opacity: 1;
  transition: all 0.2s ease;

  &:hover {
    background: rgba(255, 107, 107, 0.2);
    border-color: rgba(255, 107, 107, 0.5);
    color: #ff6b6b;
    transform: scale(1.1);
  }
`;

export const Image = styled.div`
  width: 100px;
  height: 100px;

  margin: 0 auto 12px;

  overflow: hidden;
  border-radius: 10px;

  background: rgba(255, 255, 255, 0.06);

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media (max-width: 480px) {
    width: 80px;
    height: 80px;
    margin-bottom: 8px;
  }
`;

export const ImagePlaceholder = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  color: rgba(255, 255, 255, 0.3);
`;

export const CardTitle = styled.div`
  font-size: 14px;
  font-weight: 600;
  color: #fff;

  margin-bottom: 4px;

  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  text-align: center;
`;

export const Artist = styled.div`
  font-size: 12px;
  color: rgba(255, 255, 255, 0.45);

  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  text-align: center;
`;
