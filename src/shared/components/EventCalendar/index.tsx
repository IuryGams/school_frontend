"use client";
import * as S from "./styled";
import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import TitleSection from "../ui/TitleSection";
import { Ellipsis } from "lucide-react";

// If loading a variable font, you don't need to specify the font weight

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

const eventsCardData = [
  {
    time: "08:00",
    grade: "All Grade",
    text: "Homeroom & Announcement",
  },
  {
    time: "10:00",
    grade: "All Grade",
    text: "Homeroom & Announcement2",
  },
  {
    time: "10:30",
    grade: "All Grade",
    text: "Homeroom & Announcement3",
  },
];

export default function EventCalendar() {
  const [value, onChange] = useState<Value>(new Date());

  function formatMonthYear(locale: string | undefined, date: Date) {
    const month = date.toLocaleString(locale, { month: "long" });
    const year = date.getFullYear();
    // Capitaliza a primeira letra do mês
    const capitalizedMonth = month.charAt(0).toUpperCase() + month.slice(1);
    return `${capitalizedMonth} ${year}`;
  }

  return (
    <S.ContainerEventCalendar as="section">
      <Calendar
        calendarType="iso8601"
        formatMonthYear={formatMonthYear}
        locale="pt-BR"
        onChange={onChange}
        value={value}
      />
      <S.ContainerEvents>
        <TitleSection className="events" title="Eventos">
          <i>
            <Ellipsis />
          </i>
        </TitleSection>
        <S.Events as="div">
          {eventsCardData.slice(0, 3).map((item) => (
            <S.Event as="div" key={item.text}>
              <div className="left">
                <b>{item.time}</b>
              </div>
              <div className="separator"></div>
              <div className="right">
                <span>{item.grade}</span>
                <b>{item.text}</b>
              </div>
            </S.Event>
          ))}
        </S.Events>
      </S.ContainerEvents>
    </S.ContainerEventCalendar>
  );
}
