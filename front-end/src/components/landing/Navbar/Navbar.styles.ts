import styled from "@emotion/styled";

export const Nav = styled.nav`
  position: absolute;
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
  width: 92%;
  max-width: 1350px;
  z-index: 999;
  backdrop-filter: blur(18px);
  -webkit-backdrop-filter: blur(18px);
  border-radius: 22px;
  transition: 0.35s ease;
  background: rgba(15, 10, 30, 0.01);
`;

export const NavContainer = styled.div`
  height: 78px;
  padding: 0 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    padding: 0 20px;
    height: 68px;
  }
`;

export const Logo = styled.h2`
  font-size: 2rem;
  font-weight: 800;
  color: white;
  cursor: pointer;
  letter-spacing: 1px;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

export const LogoAccent = styled.span`
  background: linear-gradient(135deg, #8b5cf6, #c084fc);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const NavLinks = styled.ul`
  display: flex;
  align-items: center;
  gap: 45px;
  list-style: none;

  @media (max-width: 900px) {
    display: none;
  }
`;

export const NavItem = styled.li`
  a {
    position: relative;
    color: #f5f5f5;
    text-decoration: none;
    font-size: 16px;
    font-weight: 500;
    transition: 0.35s;
  }

  a:hover {
    color: #c084fc;
  }

  a::after {
    content: "";
    position: absolute;
    bottom: -4px;
    left: 0;
    width: 0;
    height: 2px;
    background: linear-gradient(90deg, #8b5cf6, #c084fc);
    border-radius: 2px;
    transition: width 0.3s ease;
  }

  a:hover::after {
    width: 100%;
  }
`;

export const Actions = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;

  @media (max-width: 900px) {
    display: none;
  }
`;

export const LoginButton = styled.button`
  background: none;
  border: none;
  color: white;
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
  transition: 0.35s;
  padding: 10px 14px;

  &:hover {
    color: #c084fc;
  }
`;

export const GetStartedButton = styled.button`
  padding: 14px 30px;
  border: none;
  border-radius: 14px;
  cursor: pointer;
  font-size: 15px;
  font-weight: 700;
  color: white;
  background: linear-gradient(135deg, #8b5cf6, #cdcbd0ee);
  transition: 0.35s;
  box-shadow: 0 10px 25px rgba(139, 92, 246, 0.35);

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 18px 40px rgba(139, 92, 246, 0.5);
    background: linear-gradient(135deg, #9f67ff, #7c3aed);
  }

  &:active {
    transform: scale(0.98);
  }
`;

export const MobileMenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  color: white;
  font-size: 2rem;
  cursor: pointer;
  transition: 0.2s;

  &:hover {
    color: #c084fc;
  }

  @media (max-width: 900px) {
    display: block;
  }
`;

export const MobileOverlay = styled.div<{ $open: boolean }>`
  display: none;

  @media (max-width: 900px) {
    display: block;
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.6);
    backdrop-filter: blur(4px);
    z-index: 998;
    opacity: ${({ $open }) => ($open ? 1 : 0)};
    pointer-events: ${({ $open }) => ($open ? "auto" : "none")};
    transition: opacity 0.3s ease;
  }
`;

export const MobileNav = styled.div<{ $open: boolean }>`
  display: none;

  @media (max-width: 900px) {
    display: flex;
    flex-direction: column;
    position: fixed;
    top: 0;
    right: 0;
    width: 280px;
    height: 100vh;
    background: rgba(12, 8, 28, 0.98);
    backdrop-filter: blur(20px);
    z-index: 1000;
    padding: 100px 32px 40px;
    gap: 8px;
    transform: translateX(${({ $open }) => ($open ? "0" : "100%")});
    transition: transform 0.35s cubic-bezier(0.4, 0, 0.2, 1);
    border-left: 1px solid rgba(255, 255, 255, 0.06);
  }
`;

export const MobileNavItem = styled.div`
  a {
    display: block;
    color: #f5f5f5;
    text-decoration: none;
    font-size: 18px;
    font-weight: 500;
    padding: 14px 0;
    border-bottom: 1px solid rgba(255, 255, 255, 0.06);
    transition: 0.2s;
  }

  a:hover {
    color: #c084fc;
    padding-left: 8px;
  }
`;

export const MobileActions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-top: 24px;
`;
