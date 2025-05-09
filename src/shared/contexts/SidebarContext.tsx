"use client";
import { createContext, useContext, useState } from "react";


interface SideBarContextType {
    toggleSideBarOpen: () => void;
    collapsed: boolean;
}

 const SideBarContext = createContext({} as SideBarContextType)


export function SideBarProvider({ children }: { children: React.ReactNode }) {

    const [collapsed , setCollapsed ] = useState(false);

    const toggleSideBarOpen = () => setCollapsed(prev => !prev);

  return (
    <SideBarContext.Provider value={{toggleSideBarOpen, collapsed}}>
      {children}
    </SideBarContext.Provider>
  )
}

export function useSideBarContext() {
    const context = useContext(SideBarContext);
    return context;
}