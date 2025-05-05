'use client';
import { Home, User, BookOpen, Users  } from "lucide-react";

type NavItemLink = {
    type: "link",
    label: string,
    icon: React.ElementType,
    href: string;
}

type NavItemDropdown = {
    type: "dropdown",
    label: string,
    icon: React.ElementType,
    subMenu: {
        label: string;
        href: string;
    }[];
}

export type NavItem = NavItemLink | NavItemDropdown

export const navigationOptions: NavItem[] = [
    {
        type: "link",
        label: "Inicio",
        icon: Home,
        href: "/home"
    },
    {
        type: 'dropdown',
        label: 'Alunos',
        icon: User,
        subMenu: [
          { label: 'Alunos', href: '/students' },
          { label: 'Cadastrar aluno', href: '/students/create' },
          { label: 'Atualizar aluno', href: '/students/update' },
          { label: 'Excluir aluno', href: '/students/delete' },
        ],
    },
    {
        type: 'dropdown',
        label: 'Professores',
        icon: BookOpen,
        subMenu: [
          { label: 'Professores', href: '/teachers' },
          { label: 'Cadastrar professor', href: '/teacher/create' },
          { label: 'Atualizar professor', href: '/teacher/update' },
          { label: 'Excluir professor', href: '/teacher/delete' },
        ],
    },
    {
        type: "link",
        label: "Responsáveis",
        icon: Users,
        href: "/parents"
    },
    
];