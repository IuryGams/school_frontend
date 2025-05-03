import { SideBarProvider } from "@/contexts/SidebarContext";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SideBarProvider>{children}</SideBarProvider>
    </>
  );
}
