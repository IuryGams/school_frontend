import Image from "next/image";
import * as S from "./styled";
import { Ellipsis, Mail, Phone } from "lucide-react";

export default function TeacherCard() {
    return (
        <S.ContainerCard>
            <S.Button>
                <Ellipsis />
            </S.Button>
            <figure>
                <Image src="https://avatars.githubusercontent.com/u/116408591?v=4" width={80} height={80} alt="" />
            </figure>
            <h2>Iury Gama</h2>
            <span>Pedagogo</span>
            <S.Icons>
                <Phone/>
                <Mail/>
            </S.Icons>
        </S.ContainerCard>
    )
}