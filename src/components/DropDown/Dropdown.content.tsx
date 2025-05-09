"use client";
import { useDropdownContext } from "@/shared/contexts/DropdownContext";
import * as S from "./styled";

interface DropdownContentProps {
    tag?: "div" | "ul";
    children: React.ReactNode;
}

export default function DropdownContent({ tag = "div", children }: DropdownContentProps) {

    const { isOpen } = useDropdownContext();

    return (
        <S.Content data-open={isOpen} as={tag} >
            {children}
        </S.Content>
    )
}