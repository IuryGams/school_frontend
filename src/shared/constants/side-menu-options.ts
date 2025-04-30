

interface SideBarItem {
    icon: React.ReactNode;
    label: string;
    href: string;
}

export interface SideMenuSection {
    id: number;
    section?: string;
    items: SideBarItem[];
}



export const sideMenuOptions: SideMenuSection[] = [
    {
        id: 1,
        section: "Alunos",
        items: [
            {
                icon: "",
                label: "Registro de Alunos",
                href: "/students",
            },
            {
                icon: "",
                label: "Cadastrar Aluno",
                href: "/students/create",
            },
        ],
    },
    {
        id: 2,
        items: [
            {
                icon: "",
                label: "Login",
                href: "/auth/sign-in",
            },
            {
                icon: "",
                label: "Cadastro",
                href: "/auth/sign-up",
            },
        ]
    }
];