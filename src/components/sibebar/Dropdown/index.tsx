"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import {
  DropDown,
  DropDownContent,
  DropDownHeader,
  DropDownLabel,
  SubMenuItem,
} from "./styled";
import { SideBarItem } from "@/shared/constants/side-menu-options";

interface DropDownMenuItemProps {
  item: SideBarItem;
}

export default function DropDownMenuItem({ item }: DropDownMenuItemProps) {
  const [open, setOpen] = useState(false);

  const toggleOpen = () => setOpen((prev) => !prev);

  return (
    <DropDown>
      <DropDownHeader
        data-open={open}
        onClick={toggleOpen}
        role="button"
        aria-haspopup="true"
        aria-expanded={open}
      >
        <DropDownLabel>
          <item.icon size={20} />
          <span>{item.label}</span>
        </DropDownLabel>
        <ChevronDown
          size={20}
          data-open={open}
        />
      </DropDownHeader>
      <DropDownContent data-open={open}>
        {item.children?.map((child) => (
          <li key={child.label}>
            <SubMenuItem href={child.href ?? "#"}>
              <child.icon size={20} />
              <span>{child.label}</span>
            </SubMenuItem>
          </li>
        ))}
      </DropDownContent>
  
    </DropDown>
  );
}
