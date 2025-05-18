import Card from "@/shared/components/Cards/Card";
import * as S from "../../../styles/pages/overview.styled";
import StudentChart from "@/shared/components/Charts/StudentChart";
import AttendanceChart from "@/shared/components/Charts/AttendanceChart";
import EarningsChart from "@/shared/components/Charts/EarningsChart";
import EventCalendar from "@/shared/components/EventCalendar";
import WrapperMain from "@/shared/components/WrapperMain";
import MessagesSection from "@/shared/components/Messages";

export default function HomePage() {
  return (
    <WrapperMain component={S.OverviewMainContent} className="dashboard-grid">
      <S.ContainerCards>
        <Card text="Estudantes" number={120} />
        <Card text="Professores" number={12} />
        <Card text="Responsáveis" number={220} />
        <Card text="Premiações" number={8} />
      </S.ContainerCards>
      <EventCalendar />
      <StudentChart />
      <AttendanceChart />
      <EarningsChart />
      <MessagesSection /> 
    </WrapperMain>
  );
}
