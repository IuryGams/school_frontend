import { ContentContainer } from "./styled";

interface NotificationContentProps {
    text: string;
}

export default function NotificationContent({text}: NotificationContentProps) {
    return (
        <ContentContainer>
            <p>{text}</p>
            <div>
                <span>Convite</span>
                <span>Há 3 minutos</span>
            </div>
        </ContentContainer>
    )
}