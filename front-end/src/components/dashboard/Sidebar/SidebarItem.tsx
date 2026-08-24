import { NavLink } from "react-router-dom";

import { useSidebarStore } from "../../../store/sidebar.store";

import { Item, ItemContent, IconWrapper, Title } from "./Sidebar.styles";

interface SidebarItemProps {
  title: string;
  path: string;
  icon: React.ElementType;
}

const SidebarItem = ({ title, path, icon: Icon }: SidebarItemProps) => {
  const close = useSidebarStore((s) => s.close);

  return (
    <NavLink
      to={path}
      style={{ textDecoration: "none" }}
      onClick={() => close()}
    >
      {({ isActive }) => (
        <Item active={isActive}>
          <ItemContent>
            <IconWrapper>
              <Icon size={20} />
            </IconWrapper>

            <Title>{title}</Title>
          </ItemContent>
        </Item>
      )}
    </NavLink>
  );
};

export default SidebarItem;
