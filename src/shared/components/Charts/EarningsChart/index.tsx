"use client";
import * as S from "./styled";
import TitleSection from "../../ui/TitleSection";
import { Ellipsis } from "lucide-react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  TooltipProps,
} from "recharts";
import { monthMap } from "@/shared/constants/mappings";
import { formatCurrency } from "@/shared/utils/formatCurrency";



const data = [
  {
    name: "Jan",
    income: 4000,
    expense: 2400,
  },
  {
    name: "Fev",
    income: 3000,
    expense: 1398,
  },
  {
    name: "Mar",
    income: 2000,
    expense: 9800,
  },
  {
    name: "Abr",
    income: 2780,
    expense: 3908,
  },
  {
    name: "Mai",
    income: 1890,
    expense: 4800,
  },
  {
    name: "Jun",
    income: 2390,
    expense: 3800,
  },
  {
    name: "Jul",
    income: 3490,
    expense: 4300,
  },
  {
    name: "Ago",
    income: 3490,
    expense: 4300,
  },
  {
    name: "Set",
    income: 3490,
    expense: 4300,
  },
  {
    name: "Out",
    income: 3490,
    expense: 4300,
  },
  {
    name: "Nov",
    income: 3490,
    expense: 4300,
  },
  {
    name: "Dez",
    income: 3490,
    expense: 4300,
  },
];

export default function EarningsChart() {
  const CustomTooltip = ({
    active,
    payload,
    label,
  }: TooltipProps<number, string>) => {
    label = monthMap[label] || label;

    if (active && payload && payload.length) {
      return (
        <S.CustomToolTip>
          <strong>{label}</strong>
          <div>
            <div className="blue"></div>
            <b>Renda: </b>
            <span>{formatCurrency(Number(payload[0].value))}</span>
          </div>
          <div>
            <div className="purple"></div>
            <b>Despesa: </b>
            <span>{formatCurrency(Number(payload[1].value))}</span>
          </div>
        </S.CustomToolTip>
      );
    }
    return null;
  };

  return (
    <S.ContainerChart>
      <TitleSection title="Proventos">
        <S.Legends>
          <div>
            <span className="blue"></span>
            <b>Renda</b>
          </div>
          <div>
            <span className="purple"></span>
            <b>Despesa</b>
          </div>
        </S.Legends>
        <i>
          <Ellipsis />
        </i>
      </TitleSection>

      <ResponsiveContainer width="100%" height="90%">
        <LineChart
          width={500}
          height={300}
          data={data}
          barSize={20}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            dataKey="name"
            axisLine={false}
            tick={{ fill: "#d1d5db" }}
            tickLine={false}
          />
          <YAxis
            axisLine={false}
            tick={{ fill: "#d1d5db" }}
            tickLine={false}
            tickMargin={10}
          />
          <Tooltip
            content={<CustomTooltip />}
          />
          <Line
            type="monotone"
            dataKey="income"
            stroke="#C3EBFA"
            strokeWidth={5}
          />
          <Line
            type="monotone"
            dataKey="expense"
            stroke="#CFCEFF"
            strokeWidth={5}
          />
        </LineChart>
      </ResponsiveContainer>
    </S.ContainerChart>
  );
}
