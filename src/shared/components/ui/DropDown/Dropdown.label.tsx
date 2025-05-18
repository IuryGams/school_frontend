"use client";
import { useDropdownContext } from "@/shared/contexts/DropdownContext";
import * as S from "./styled";

interface DropdownLabelProps {
    tag?: "div" | "ul" | "button";
    children: React.ReactNode;
}

export default function DropdownLabel({ tag = "button", children }: DropdownLabelProps) {

    const {toggleDropdown} = useDropdownContext();

    return (
        <S.Label as={tag} onClick={toggleDropdown}>
            {children}
        </S.Label>
    ) 
    
}
