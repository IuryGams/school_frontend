"use client"
import { useState } from "react";
import { DropdownHeader, DropdownLabel, DropdownList, StyledDropdown, SubMenuItem } from "./styled";
import { ChevronDown } from "lucide-react";
import { DropdownProps } from "..";

export function ExpandedDropdown({ Icon, label, subMenu }: DropdownProps) {
    const [open, setOpen] = useState(false);
    return (
      <StyledDropdown>
        <DropdownHeader onClick={() => setOpen(o => !o)}>
          <DropdownLabel>
            <Icon size={20} />
            <span>{label}</span>
          </DropdownLabel>
          <ChevronDown size={20} data-open={open} />
        </DropdownHeader>
        <DropdownList data-open={open}>
          {subMenu.map((item) => (
            <li key={item.label}>
              <SubMenuItem href={item.href}>{item.label}</SubMenuItem>
            </li>
          ))}
        </DropdownList>
      </StyledDropdown>
    );
  }
  