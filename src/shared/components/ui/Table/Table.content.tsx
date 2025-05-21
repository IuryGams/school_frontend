"use client";
import Image from "next/image";
import * as S from "./Table.styled";
import { Ellipsis } from "lucide-react";
import { useTableContext } from "@/shared/contexts/SearchInputContext";

interface TableContentProps {
  data: any[];
  onDelete?: (id: string) => void;
}

function TableContent({ data }: TableContentProps) {

  const { search } = useTableContext();

  const filteredData = data.filter((teacher) => {
    return teacher.name.toLowerCase().includes(search.toLowerCase());
  });

  return (
    <>
      {filteredData.length <= 0 ? (
        <S.EmptyData>Sem conteudo</S.EmptyData>
      ) : (
        <S.Table>
          <thead>
            <tr>
              <th>Nome</th>
              <th>Materias</th>
              <th>Classes</th>
              <th>Telefone</th>
              <th>Salário</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((item) => (
              <tr key={item.id}>
                <td data-label="Nome">
                  <div className="profile">
                    <Image
                      src="https://avatars.githubusercontent.com/u/116408591?v=4"
                      width={32}
                      height={32}
                      alt={`Foto de avatar de ${"Iury"}`}
                    />
                    <div>
                      <strong>{item.name}</strong>
                      <span>iury@gmail.com</span>
                    </div>
                  </div>
                </td>
                <td data-label="Materias">{item.subject}</td>
                <td data-label="Classes">{item.class}</td>
                <td data-label="Telefone">{item.phone}</td>
                <td data-label="Salário">{item.salary}</td>
                <td data-label="Ações">
                  <div className="actions">
                    <button type="button">
                      <Ellipsis />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </S.Table>
      )}
    </>
  );
}

export default TableContent;
