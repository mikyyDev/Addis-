import { useState } from "react";
import { Link } from "react-router-dom";

import {
  Nav,
  NavContainer,
  Logo,
  LogoAccent,
  NavLinks,
  NavItem,
  Actions,
  LoginButton,
  GetStartedButton,
  MobileMenuButton,
  MobileOverlay,
  MobileNav,
  MobileNavItem,
  MobileActions,
} from "./Navbar.styles";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <Nav>
        <NavContainer>
          <Logo>
            Addis<LogoAccent> ሙዚቃ</LogoAccent>
          </Logo>

          <NavLinks>
            <NavItem>
              <a href="#home">Home</a>
            </NavItem>

            <NavItem>
              <a href="#how-it-works">How It Works</a>
            </NavItem>

            <NavItem>
              <a href="#features">Features</a>
            </NavItem>

            <NavItem>
              <a href="#about">About</a>
            </NavItem>
          </NavLinks>

          <Actions>
            <Link to="/login">
              <LoginButton>Sign In</LoginButton>
            </Link>

            <Link to="/register">
              <GetStartedButton>Register</GetStartedButton>
            </Link>
          </Actions>

          <MobileMenuButton onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? "✕" : "☰"}
          </MobileMenuButton>
        </NavContainer>
      </Nav>

      <MobileOverlay $open={mobileOpen} onClick={() => setMobileOpen(false)} />
      <MobileNav $open={mobileOpen}>
        <MobileNavItem>
          <a href="#home" onClick={() => setMobileOpen(false)}>
            Home
          </a>
        </MobileNavItem>
        <MobileNavItem>
          <a href="#how-it-works" onClick={() => setMobileOpen(false)}>
            How It Works
          </a>
        </MobileNavItem>
        <MobileNavItem>
          <a href="#features" onClick={() => setMobileOpen(false)}>
            Features
          </a>
        </MobileNavItem>
        <MobileNavItem>
          <a href="#about" onClick={() => setMobileOpen(false)}>
            About
          </a>
        </MobileNavItem>
        <MobileActions>
          <Link to="/login" onClick={() => setMobileOpen(false)}>
            <LoginButton>Sign In</LoginButton>
          </Link>
          <Link to="/register" onClick={() => setMobileOpen(false)}>
            <GetStartedButton>Register</GetStartedButton>
          </Link>
        </MobileActions>
      </MobileNav>
    </>
  );
};

export default Navbar;
