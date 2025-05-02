import { SideMenuSection } from "@/shared/constants/side-menu-options";
import { DropDown, DropDownContent, DropDownLabel, DropDownMenu, LinkItem, List, StyledItemMenu } from "./styled";
import { ChevronDown } from "lucide-react";

export default function ItemMenu({ option }: { option: SideMenuSection }) {
  return (
    <>
      <StyledItemMenu>
        {option.section && <h3>{option.section}</h3>}
        <List>
          {option.items.map((item) => {
            const Icon = item.icon;
            const hasChildren = item.children && item.children.length > 0;

            return (
              <li key={item.label}>
                {item.href ? (
                  <LinkItem href={item.href}>
                    <Icon size={20} />
                    <span>{item.label}</span>
                  </LinkItem>
                ) : (
                  <DropDown>
                    <DropDownLabel>
                      <div>
                        <Icon size={20} />
                        <span>{item.label}</span>
                      </div>
                      {hasChildren && <ChevronDown size={20} />}
                    </DropDownLabel>
                    <DropDownContent>
                      {item.children!.map(child => (
                        <li key={child.label}>
                          <LinkItem href={child.href}>
                            <child.icon size={20} />
                            <span>{child.label}</span>  
                          </LinkItem>
                        </li>
                      ))}
                    </DropDownContent>

                  </DropDown>
                )}




              </li>
            )

          })}
        </List>
      </StyledItemMenu>
      {option.items.length > 0 && <hr />}
    </>
  );
}
