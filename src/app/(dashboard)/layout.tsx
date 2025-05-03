import SideBar from "@/components/sibebar";
import Providers from "@/shared/providers";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Site do manuelito",
};

export default function DashboardLayout() {
  return (
    <Providers>

        <SideBar />
    </Providers>
  );
}
