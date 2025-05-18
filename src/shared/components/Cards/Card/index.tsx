import { Ellipsis } from "lucide-react";
import * as S from "./styled";
import { HTMLAttributes } from "react";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
    text: string;
    number: number;
}

export default function Card({text, number, ...rest}: CardProps) {
  return (
      <S.Card {...rest}>
        <S.TopCard>
          <S.Label>↑ 15%</S.Label>
          <div>
            <i>
              <Ellipsis />
            </i>
          </div>
        </S.TopCard>
        <S.BottomCard>
          <b>{number}</b>
          <strong></strong>
          <span>{text}</span>
        </S.BottomCard>
      </S.Card>
  );
}
