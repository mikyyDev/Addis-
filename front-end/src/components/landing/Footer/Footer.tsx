import {
  FooterContainer,
  FooterContent,
  Logo,
  Copyright,
} from "./Footer.styles";

const Footer = () => {
  return (
    <FooterContainer id="contact">
      <FooterContent>
        <Logo>
          Addis<span> ሙዚቃ</span>
        </Logo>

        <Copyright>© 2026 Addis Music. All Rights Reserved.</Copyright>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer;
