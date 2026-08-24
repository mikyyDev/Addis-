import styled from "@emotion/styled";

export const Overlay = styled.div<{ $isOpen: boolean }>`
  display: none;

  @media (max-width: 900px) {
    display: block;
    position: fixed;
    inset: 0;
    z-index: 90;
    background: rgba(0, 0, 0, 0.6);
    backdrop-filter: blur(4px);
    opacity: ${({ $isOpen }) => ($isOpen ? 1 : 0)};
    pointer-events: ${({ $isOpen }) => ($isOpen ? "auto" : "none")};
    transition: opacity 0.3s ease;
  }
`;

export const SidebarContainer = styled.aside<{ $isOpen: boolean }>`
  width: 300px;
  flex: 0 0 300px;
  height: calc(100vh - 60px);
  grid-area: sidebar;

  position: fixed;
  z-index: 20;

  box-sizing: border-box;

  padding: 35px 25px;
  background: rgba(18, 8, 42, 0.15);

  backdrop-filter: blur(10px);

  border: 1px solid rgba(255, 255, 255, 0.08);

  color: white;
  border-radius: 30px;
  margin: 30px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (max-width: 900px) {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    width: 280px;
    height: 100%;
    z-index: 100;
    margin: 0;
    padding: 28px 20px;
    border-radius: 0 24px 24px 0;
    background: rgba(14, 8, 32, 0.98);
    backdrop-filter: blur(20px);
    transform: translateX(${({ $isOpen }) => ($isOpen ? "0" : "-100%")});
    transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }
`;

export const CloseButton = styled.button`
  display: none;

  @media (max-width: 900px) {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 36px;
    height: 36px;
    border: 1px solid rgba(255, 255, 255, 0.12);
    border-radius: 10px;
    background: rgba(255, 255, 255, 0.06);
    color: rgba(255, 255, 255, 0.7);
    cursor: pointer;
    transition: all 0.2s ease;
    position: absolute;
    top: 16px;
    right: 16px;

    &:hover {
      background: rgba(255, 255, 255, 0.12);
      color: #fff;
    }
  }
`;

export const MenuContent = styled.div`
  flex: 1;

  min-height: 0;

  overflow-y: auto;
  overflow-x: hidden;

  padding-right: 6px;

  scrollbar-width: thin;
  scrollbar-color: transparent transparent;

  &::-webkit-scrollbar {
    width: 5px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 999px;
    background: transparent;
  }

  &:hover {
    scrollbar-color: rgba(139, 92, 246, 0.7) transparent;

    &::-webkit-scrollbar-thumb {
      background: rgba(139, 92, 246, 0.7);
    }
  }
`;

export const Logo = styled.div`
  margin-bottom: 20px;
`;

export const LogoTitle = styled.h1`
  color: white;

  font-size: 28px;

  font-weight: 700;

  span {
    color: #8b5cf6;
  }
`;

export const LogoSubtitle = styled.p`
  color: #94a3b8;

  margin-top: 1px;
  margin-bottom: 20px;

  font-size: 14px;
`;
export const SectionTitle = styled.h4`
  margin-bottom: 10px;

  color: #bdbdd6;

  font-size: 0.95rem;

  text-transform: uppercase;

  letter-spacing: 1px;
`;

export const DiscoverSectionTitle = styled(SectionTitle)`
  margin-top: 24px;
`;
export const Navigation = styled.nav`
  display: flex;

  flex-direction: column;
  margin-left: 5px;
  gap: 0;
`;
export const Item = styled.div<{ active: boolean }>`
  width: 100%;

  border-radius: 14px;

  cursor: pointer;

  transition: 0.3s;

  background: ${({ active }) =>
    active ? "linear-gradient(90deg,#7C3AED,#5B21B6)" : "transparent"};

  &:hover {
    background: rgba(124, 58, 237, 0.15);

    transform: translateX(5px);
  }
`;
export const ItemContent = styled.div`
  display: flex;

  align-items: center;

  gap: 14px;

  padding: 10px 10px;
`;
export const IconWrapper = styled.div`
  color: white;
`;
export const Title = styled.span`
  color: white;

  font-weight: 500;

  font-size: 15px;
`;
export const Bottom = styled.div`
  display: flex;

  flex-direction: column;

  gap: 15px;

  flex-shrink: 0;

  margin-top: 20px;
`;
export const UserCard = styled.div`
  background: rgba(203, 32, 32, 0.04);

  border: 1px solid rgba(255, 255, 255, 0.08);

  border-radius: 18px;
  margin-top: 0;
  padding: 18px;
`;
export const UserName = styled.h4`
  color: white;

  margin-bottom: 6px;
`;
export const UserEmail = styled.p`
  color: #94a3b8;

  font-size: 13px;
`;
export const LogoutButton = styled.button`
  width: 100%;
  margin-top: 18px;
  padding: 12px;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  border: none;
  border-radius: 12px;

  background: #ef4444;
  color: white;

  cursor: pointer;
  transition: 0.3s;

  &:hover {
    background: #dc2626;
    transform: translateY(-2px);
  }
`;
