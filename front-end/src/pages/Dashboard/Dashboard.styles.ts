import styled from "@emotion/styled";

import background from "../../assets/images/background.png";

export const DashboardContainer = styled.div`
  display: grid;
  grid-template-columns: 360px minmax(0, 1fr);
  grid-template-rows: 1fr;
  grid-template-areas: "sidebar main";
  height: 100vh;
  background-image: url(${background});
  background-size: cover;
  background-position: center;
  overflow: hidden;

  @media (max-width: 900px) {
    display: block;
    min-height: 100vh;
    height: auto;
    overflow: visible;
  }
`;

export const MainContent = styled.main`
  grid-area: main;
  min-width: 0;
  padding: 20px 28px;
  margin-left: 0;
  height: 100%;
  overflow-y: auto;
  padding-bottom: 20px;

  @media (max-width: 900px) {
    height: auto;
    min-height: 100vh;
    padding: 16px;
    overflow: visible;
  }
`;
