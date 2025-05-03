import { SideMenuSection } from "@/shared/constants/side-menu-options";
import { LinkItem, List, StyledItemMenu, StyledToolTip, Title } from "./styled";
import DropDownMenuItem from "@/components/sibebar/Dropdown";

export default function ItemMenu({
  option,
  collapsed,
}: {
  option: SideMenuSection;
  collapsed: boolean;
}) {
  return (
    <>
      <StyledItemMenu>
        {option.section && <Title>{option.section}</Title>}
        <List>
          {option.items.map((item) => {
            const Icon = item.icon;

            return (
              <li key={item.label}>
                {item.href ? (
                  <LinkItem data-collapsed={collapsed} href={item.href}>
                    <Icon size={20} />
                    {!collapsed ? (
                      <span>{item.label}</span>
                    ) : (
                      <StyledToolTip>{item.label}</StyledToolTip>
                    )}
                  </LinkItem>
                ) : (
                  <DropDownMenuItem item={item} />
                )}
              </li>
            );
          })}
        </List>
      </StyledItemMenu>
      {option.items.length > 0 && <hr />}
    </>
  );
}
