import { ActionsBox } from "./styled"

interface NotificationActionsProps {
    children: React.ReactNode
}


export default function NotificationActions({children}: NotificationActionsProps) {
    return (
        <ActionsBox>
            {children}
        </ActionsBox>
    )
}