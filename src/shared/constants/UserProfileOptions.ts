import { Bell, LogOut, Settings, User } from "lucide-react";


interface UserProfileOption {
    label: string;
    icon: React.ElementType;
    href: string;
}


export const UserProfileOptions: UserProfileOption[] = [
    {
        label: "Meu Perfil",
        icon: User,
        href: "/profile",
    },
    {
        label: "Notificações",
        icon: Bell,
        href: "/settings",
    },
    {
        label: "Configurações",
        icon: Settings,
        href: "/settings",
    },
    {
        label: "Sair",
        icon: LogOut,
        href: "/logout",
    }
];

