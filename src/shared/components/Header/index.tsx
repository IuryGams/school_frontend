"use client";
import * as S from "./styled";
import Actions from "./Actions";

export default function Header() {

  return (
    <S.Container>
      <S.TopHeader>
        {/* <SearchInput /> */}
        <Actions />
      </S.TopHeader>
      {/* <S.BottomHeader>
        <h1>{pathname.replace("/", "")}</h1>
        <select>
          <option>Hoje</option>
          <option>Há 1 semana</option>
          <option>Há 1 Mês</option>
          <option>Há 3 Meses</option>
        </select>
      </S.BottomHeader> */}
    </S.Container>
  );
}
