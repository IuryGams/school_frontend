'use client';
import { Home, User, BookOpen } from "lucide-react";

export interface SideBarItem {
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
                href: "/home",
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
                    },
                    {
                        icon: User,
                        label: "Cadastrar Update",
                        href: "/students/update",
                    },
                    {
                        icon: User,
                        label: "Cadastrar excluir",
                        href: "/students/delete",
                    },
                ]
            },
            {
                icon: BookOpen,
                label: "Professores",
                href: "/teachers",
            }
        ]
    },
    {
        section: "Configurações",
        items: [
            
        ],
    },
];