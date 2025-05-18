import { DropdownProps } from "..";
import { LinkItem } from "../../item-menu/styled";
import { CollapsedDropdownWrapper, IconButton, SubMenuList } from "./styled";

export function CollapsedDropdown({ Icon, label, subMenu }: DropdownProps) {
    return (
        <CollapsedDropdownWrapper>
            <IconButton>
                <Icon size={20} />
            </IconButton>
            <SubMenuList>
                {subMenu.map(item => (
                    <li key={item.label}>
                        <LinkItem href={item.href}>
                            <span>{item.label}</span>
                        </LinkItem>
                    </li>
                ))}
            </SubMenuList>
        </CollapsedDropdownWrapper>

    );
}
