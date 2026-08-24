import { LogOut, X } from "lucide-react";

import { discoverItems, sidebarItems } from "./sidebarData";
import SidebarItem from "./SidebarItem";

import { useAuthStore } from "../../../store/auth.store";
import { useSidebarStore } from "../../../store/sidebar.store";

import {
  SidebarContainer,
  Overlay,
  CloseButton,
  MenuContent,
  Logo,
  LogoTitle,
  LogoSubtitle,
  Navigation,
  Bottom,
  UserCard,
  UserName,
  UserEmail,
  LogoutButton,
  SectionTitle,
  DiscoverSectionTitle,
} from "./Sidebar.styles";

const Sidebar = () => {
  const { user, logout } = useAuthStore();
  const { isOpen, close } = useSidebarStore();

  return (
    <>
      <Overlay $isOpen={isOpen} onClick={close} />

      <SidebarContainer $isOpen={isOpen}>
        <CloseButton onClick={close}>
          <X size={20} />
        </CloseButton>

        <MenuContent>
          <Logo>
            <LogoTitle>
              Addis<span> ሙዚቃ</span>
            </LogoTitle>

            <LogoSubtitle>Music Management</LogoSubtitle>
          </Logo>
          <SectionTitle>Menu</SectionTitle>
          <Navigation>
            {sidebarItems.map((item) => (
              <SidebarItem key={item.path} {...item} />
            ))}
          </Navigation>

          <DiscoverSectionTitle>Discover</DiscoverSectionTitle>

          <Navigation>
            {discoverItems.map((item) => (
              <SidebarItem key={item.path} {...item} />
            ))}
          </Navigation>
        </MenuContent>

        <Bottom>
          <UserCard>
            <UserName>{user?.username}</UserName>

            <UserEmail>{user?.email}</UserEmail>

            <LogoutButton onClick={logout}>
              <LogOut size={18} />
              Logout
            </LogoutButton>
          </UserCard>
        </Bottom>
      </SidebarContainer>
    </>
  );
};

export default Sidebar;
