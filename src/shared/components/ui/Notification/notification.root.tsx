import { ContainerNotification } from "./styled"


interface NotificationRootProps {
    children: React.ReactNode
}

export default function NotificationRoot({children}: NotificationRootProps) {
    return (
        <ContainerNotification>
            {children}
        </ContainerNotification>
    )
}