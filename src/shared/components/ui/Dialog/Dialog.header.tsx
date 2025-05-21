import { X } from "lucide-react";
import * as S from "./styled";
import React from "react";

interface DialogHeaderProps {
    title: string;
    onClose: () => void;
}

function DialogHeader({title, onClose}: DialogHeaderProps) {
    return (
        <S.DialogHeader>
            <h2>{title}</h2>
            <button type="button" aria-label="Icon" onClick={onClose}>
                <X size={32} />
            </button>
        </S.DialogHeader>
    )   
}

export default React.memo(DialogHeader);