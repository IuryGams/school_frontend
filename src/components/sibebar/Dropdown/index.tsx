import { CollapsedDropdown } from "./CollapseDropdown";
import { ExpandedDropdown } from "./ExpandedDropdown";

export interface DropdownProps {
  Icon: React.ElementType;
  label: string;
  subMenu: { label: string; href: string }[];
  collapsed?: boolean;
}

export default function Dropdown({ Icon, label, subMenu, collapsed }: DropdownProps) {
  return collapsed ? (
    <CollapsedDropdown Icon={Icon} label={label} subMenu={subMenu} />
  ) : (
    <ExpandedDropdown Icon={Icon} label={label} subMenu={subMenu} />
  );
}
