import SideBar from "@/components/sibebar";
import Providers from "@/shared/providers";
import type { Metadata } from "next";
import { StyledLayout } from "./styled.layout";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Site do manuelito",
};

export default function DashboardLayout() {
  return (
    <Providers>
        <StyledLayout>
          <SideBar />
          <Header />
        </StyledLayout>
    </Providers>
  );
}
