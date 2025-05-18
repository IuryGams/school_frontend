"use client";
import * as S from "./styled";
import TitleSection from "../../ui/TitleSection";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  TooltipProps,
} from "recharts";
import { weekMap } from "@/shared/constants/mappings";

export default function AttendanceChart() {


  const data = [
    { name: "Seg", present: 50, absent: 10 },
    { name: "Ter", present: 50, absent: 10 },
    { name: "Qua", present: 50, absent: 10 },
    { name: "Qui", present: 50, absent: 10 },
    { name: "Sex", present: 50, absent: 10 },
  ];

  const CustomTooltip = ({
    active,
    payload,
    label,
  }: TooltipProps<number, string>) => {
    label = weekMap[label] || label;

    if (active && payload && payload.length) {
      return (
        <S.CustomToolTip>
          <strong>{label}</strong>
          <div>
            <div className="yellow"></div>
            <b>Presença: </b>
            <span>{payload[0].value}%</span>
          </div>
          <div>
            <div className="blue"></div>
            <b>Ausência: </b>
            <span> {payload[1].value}%</span>
          </div>
        </S.CustomToolTip>
      );
    }
    return null;
  };

  return (
    <S.ContainerChart>
      <TitleSection title="Frequência escolar">
        <div>
          <select>
            <option>Semana 1</option>
            <option>Semana 2</option>
            <option>Semana 3</option>
            <option>Semana 4</option>
          </select>
          <select>
            <option>grade 1</option>
            <option>grade 2</option>
            <option>grade 3</option>
            <option>grade 4</option>
          </select>
        </div>
      </TitleSection>

      <S.Legends>
        <div>
          <span className="yellow"></span>
          <b>Presenças</b>
        </div>
        <div>
          <span className="blue"></span>
          <b>Ausências</b>
        </div>
      </S.Legends>

      <ResponsiveContainer width="100%" height="80%">
        <BarChart width={500} height={300} data={data} barSize={20}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#DDD" />
          <XAxis
            dataKey="name"
            axisLine={false}
            tick={{ fill: "#d1d5db" }}
            tickLine={false}
          />
          <YAxis axisLine={false} tick={{ fill: "#d1d5db" }} tickLine={false} />
          <Tooltip
            content={<CustomTooltip />}
            contentStyle={{ borderRadius: "10px", borderColor: "lightgray" }}
            cursor={{ fill: "whitesmoke" }}
          />
          <Bar dataKey="present" fill="#fae27c" radius={[10, 10, 0, 0]} />
          <Bar dataKey="absent" fill="#C3EBFA" radius={[10, 10, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </S.ContainerChart>
  );
}
