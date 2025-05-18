import * as S from "./styled";

interface DialogContentProps {
    children: React.ReactNode;
}

export default function DialogContent({children}: DialogContentProps) {
    return (
        <S.DialogContent>
            {children}
        </S.DialogContent>
    )   
}