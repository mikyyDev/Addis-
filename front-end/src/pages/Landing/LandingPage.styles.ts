import styled from "@emotion/styled";
import backgroundImage from "../../assets/images/background.png";

export const PageWrapper = styled.div`
  html {
    scroll-behavior: smooth;
  }

  min-height: 100vh;
  overflow-x: hidden;
  color: #f7f3ff;
  background-color: #080714;
  background-image:
    linear-gradient(rgba(8, 7, 20, 0.78), rgba(8, 7, 20, 0.9)),
    url(${backgroundImage});
  background-size:
    100% 100%,
    cover;
  background-position:
    center,
    center top;
  background-repeat: no-repeat, no-repeat;
  background-attachment: scroll, fixed;
`;
