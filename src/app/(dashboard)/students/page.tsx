import { Table } from "@/shared/components/ui/Table";
import WrapperMain from "@/shared/components/WrapperMain";
import * as S from "@/styles/pages/student.styled";

export default function StudentPage() {

  const data = [
    {
      id: "1",
      name: "Dante Gama Araujo de Brito",
      class: "2° ano A",
      parents: [
        {
          name: "Iury Gama de Sousa Menezes",
          kinship: "Pai",
          phone: "(85) 9.8171.6832",
          email: "email@gmail.com",
        },
        {
          name: "Ana Larissa Araujo de Brito",
          kinship: "Mãe",
          phone: "(85) 9.8171.6832",
          email: "email@gmail.com",
        }
      ],
    },
    {
      id: "2",
      name: "Dante Gama Araujo de Brito",
      class: "2° ano A",
      parents: [
        {
          name: "Iury Gama de Sousa Menezes",
          kinship: "Pai",
          phone: "(85) 9.8171.6832",
          email: "iury_gama@gmail.com",
        },
        {
          name: "Ana Larissa Araujo de Brito",
          kinship: "Mãe",
          phone: "(85) 9.8171.6832",
          email: "ana_larissa@gmail.com",
        }
      ],
    },
    {
      id: "3",
      name: "Dante Gama Araujo de Brito",
      class: "2° ano A",
      parents: [
        {
          name: "Iury Gama de Sousa Menezes",
          kinship: "Pai",
          phone: "(85) 9.8171.6832",
          email: "iury_gama@gmail.com",
        },
        {
          name: "Ana Larissa Araujo de Brito",
          kinship: "Mãe",
          phone: "(85) 9.8171.6832",
          email: "ana_larissa@gmail.com",
        }
      ],
    },
  ];

  return (
    <WrapperMain component={S.StudentMainContent}>
      <Table.Root>
        <Table.Header />
        <Table.Content data={data} />
        <Table.Footer />
      </Table.Root>
    </WrapperMain>
  );
}
