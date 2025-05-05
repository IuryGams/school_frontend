import { StyledToolTip } from "../sibebar/item-menu/styled";
import { StyledLink } from "./styled";


interface LinkItemMenuProps {
    href: string;
    Icon: React.ElementType;
    label: string;
    collapsed: boolean
}

export default function LinkItemMenu({href, Icon, label, collapsed}: LinkItemMenuProps) {

    const Label = !collapsed ? <span>{label}</span> : <StyledToolTip>{label}</StyledToolTip>

    return (
        <StyledLink data-collapsed={collapsed} href={href} >
            <Icon size={20} />
            {Label}
        </StyledLink>
    )
}