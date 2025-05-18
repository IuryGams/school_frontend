"use client";
import { Ellipsis } from "lucide-react";
import { IoManSharp, IoWomanSharp } from "react-icons/io5";
import TitleSection from "../../ui/TitleSection";
import * as S from "./styled";
import { RadialBar, RadialBarChart, ResponsiveContainer } from "recharts";

const data = [
  {
    name: "Total",
    count: 100,
    fill: "#FFF",
  },
  {
    name: "Alunos",
    count: 50,
    fill: "#C3EBFA",
  },
  {
    name: "Alunas",
    count: 50,
    fill: "#fae27c",
  },
];

export default function StudentChart() {

  return (
    <S.ContainerChart>
      <TitleSection title="Estudantes">
        <i>
          <Ellipsis />
        </i>
      </TitleSection>

      <S.Chart>
        <S.IconsChart>
          <i className="men">
            <IoManSharp />
          </i>
          <i className="woman">
            <IoWomanSharp />
          </i>
        </S.IconsChart>
        <ResponsiveContainer>
          <RadialBarChart
            cx="50%"
            cy="50%"
            innerRadius="45%"
            outerRadius="100%"
            barSize={32}
            data={data}
          >
            <RadialBar background dataKey="count" />
          </RadialBarChart>
        </ResponsiveContainer>
      </S.Chart>

      <S.DetailsDataChart>
        <S.DataChart>
          <div></div>
          <b>45.414</b>
          <span>Alunos (50%)</span>
        </S.DataChart>
        <S.DataChart>
          <div></div>
          <b>40.270</b>
          <span>Alunas (50%)</span>
        </S.DataChart>
      </S.DetailsDataChart>
    </S.ContainerChart>
  );
}
