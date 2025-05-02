import { Home, User } from "lucide-react";

interface SideBarItem {
    icon: React.ElementType;
    label: string;
    href?: string;
    children?: SideBarItem[];
}

export interface SideMenuSection {
    section: string;
    items: SideBarItem[];

}



export const sideMenuOptions: SideMenuSection[] = [
    {
        section: "Dashboard",
        items: [
            {
                icon: Home,
                label: "Inicio",
                href: "home",
            },
            {
                icon: User,
                label: "Alunos",
                children: [
                    {
                        icon: User,
                        label: "Lista de Alunos",
                        href: "/students",
                    },
                    {
                        icon: User,
                        label: "Cadastrar Aluno",
                        href: "/students/create",
                    }
                ]
            }
        ]
    },
    {
        section: "Configurações",
        items: [
            
        ],
    },
];