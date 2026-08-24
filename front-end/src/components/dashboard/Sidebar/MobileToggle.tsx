import { Menu } from "lucide-react";

import { useSidebarStore } from "../../../store/sidebar.store";

import { ToggleButton } from "./MobileToggle.styles";

const MobileToggle = () => {
  const toggle = useSidebarStore((s) => s.toggle);

  return (
    <ToggleButton onClick={toggle} aria-label="Open menu">
      <Menu size={22} />
    </ToggleButton>
  );
};

export default MobileToggle;
