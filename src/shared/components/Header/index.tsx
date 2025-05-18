"use client";
import * as S from "./styled";
import Actions from "./Actions";
import SearchInput from "../SearchInput";
import { usePathname } from 'next/navigation'

export default function Header() {

  const pathname = usePathname();

  return (
    <S.Container>
      <S.TopHeader>
        <SearchInput />
        <Actions />
      </S.TopHeader>
      <S.BottomHeader>
        <h1>{pathname.replace("/", "")}</h1>
        <select>
          <option>Hoje</option>
          <option>Há 1 semana</option>
          <option>Há 1 Mês</option>
          <option>Há 3 Meses</option>
        </select>
      </S.BottomHeader>
    </S.Container>
  );
}
