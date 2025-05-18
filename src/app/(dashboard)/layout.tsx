import SideBar from "@/shared/components/Sibebar";
import Providers from "@/shared/providers";
import type { Metadata } from "next";
import * as S from "./styled.layout";
import Header from "@/shared/components/Header";
import { Inter } from "next/font/google";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Site do manuelito",
};



// If loading a variable font, you don't need to specify the font weight
const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "700"],
});

interface DashboardLayoutProps {
  children: React.ReactNode
}



export default function DashboardLayout({children}: DashboardLayoutProps) {
  return (
    <Providers>
        <S.Layout className={inter.className}>
          <SideBar />
          <Header />
            {children}
          <footer className="layout_footer">
            <span>Terms of use</span>
            <span>Privacy Policy</span>
            <span>Copyright &copy; Colégio Manuelito</span>
          </footer>
        </S.Layout>
    </Providers>
  );
}
