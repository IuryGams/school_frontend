import WrapperMain from "@/shared/components/WrapperMain";
import * as S from "@/styles/pages/teachers.styled";
import { Table } from "@/shared/components/ui/Table";

export default async function TeacherPage() {

  const data = [
    {
      id: "1",
      name: "Iury Gama de Sousa Menezes",
      subject: "Matemática",
      class: "2° ano A",
      phone: "(85) 9.8171.6832",
      salary: 1500,
    },
    {
      id: "2",
      name: "Robson de Sousa",
      subject: "Física",
      class: "2° ano A",
      phone: "(85) 9.8171.6832",
      salary: 1500,
    },
    {
      id: "3",
      name: "Ana Larissa Araujo de Brito",
      subject: "Pedagoga",
      class: "2° ano A",
      phone: "(85) 9.8171.6832",
      salary: 1500,
    },
    {
      id: "4",
      name: "Dayse Gama de Sousa Menezes",
      subject: "Historia",
      class: "2° ano A",
      phone: "(85) 9.8171.6832",
      salary: 1500,
    },
  ];

  return (
    <WrapperMain component={S.TeacherMainContent}>
      <Table.Root>
        <Table.Header />
        <Table.Content data={data} />
        <Table.Footer />
      </Table.Root>
    </WrapperMain>
  );
}
