"use client"

import { Search } from "lucide-react";
import * as S from "./styled";

export default function SearchInput() {

    return (
        <S.ContainerSearch>
            <i>
                <Search size={14} />
            </i>
            <input type="search" placeholder="Pesquise..." />
        </S.ContainerSearch>
    )
}