import * as S from "./styled";
import Actions from "./Actions";

export default function Header() {
  return (
    <S.Container>
      <S.DetailsPage>
        <h1>Titulo da pagina</h1>
        <span>Descrição da pagina</span>
      </S.DetailsPage>

      <Actions />
    </S.Container>
  );
}
