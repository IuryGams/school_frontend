import { ChevronLeft, ChevronRight } from "lucide-react";
import * as S from "./Table.styled"

interface TableFooterProps {

}

function TableFooter({}: TableFooterProps) {
  return (
    <>
      <S.Pagination>
        <button type="button" className="prev-page">
          <ChevronLeft />
          Anterior
        </button>
        <div>
          {Array.from({ length: 5 }, (_, i) => (
            <button key={i} type="button">
              {i + 1}
            </button>
          ))}
        </div>
        <button type="button" className="next-page">
          Proximo
          <ChevronRight />
        </button>
      </S.Pagination>

      
    </>
  );
}

export default TableFooter;
