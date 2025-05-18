"use client";
import { NavItem } from "@/shared/constants/navigationMenuOptions";
import {  StyledItemMenu } from "./styled";
import LinkItemMenu from "../../ui/LinkItem"; 
import Dropdown from "../Dropdown";

export default function ItemMenu({
  item,
  collapsed,
}: {
  item: NavItem;
  collapsed: boolean;
}) {

  return (
    <StyledItemMenu>
      {item.type == "link" ? (
        <LinkItemMenu collapsed={collapsed} href={item.href} Icon={item.icon} label={item.label}  />
      ) : (
        <Dropdown collapsed={collapsed} Icon={item.icon} label={item.label} subMenu={item.subMenu} />
      )}

    </StyledItemMenu>
  );
}
