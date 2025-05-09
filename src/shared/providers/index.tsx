"use client";
import { SideBarProvider } from "@/shared/contexts/SidebarContext";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <>
        <SideBarProvider>
          {children}
        </SideBarProvider>
    </>
  );
}
