"use client";
import { navigationOptions } from "@/shared/constants/navigationMenuOptions";
import ItemMenu from "./item-menu";
import { StyledSideBar, TriggerSideBar } from "./styled";
import Image from "next/image";
import { ChevronLeft } from "lucide-react";
import { useSideBarContext } from "@/contexts/SidebarContext";

export default function SideBar() {

  const { toggleSideBarOpen, collapsed } = useSideBarContext();

  return (
    <StyledSideBar data-collapsed={collapsed}>
      <header>
        <Image
          width={40}
          height={40}
          alt="Foto de um rapaz de pele branca, cabelos castanhos e oculos de grau preto"
          src="https://avatars.githubusercontent.com/u/116408591?v=4"
          aria-label="Logo do site."
        />
        <TriggerSideBar
          type="button"
          aria-label="Fechar menu lateral"
          onClick={toggleSideBarOpen}
          aria-expanded={collapsed}
        >
          <ChevronLeft size={16} data-collapsed={collapsed} />
        </TriggerSideBar>
      </header>
      <hr />
      <nav
        aria-label="Menu de navegação"
        role="navigation"
        data-collapsed={collapsed}
      >
        <ul className="scroll_area">
          {navigationOptions.map((item) => (
            <ItemMenu key={item.label} item={item} collapsed={collapsed} />
          ))}
        </ul>
      </nav>
      <footer>
        <h4>Sou um footer</h4>
        {/* <UserProfile /> */}
      </footer>
    </StyledSideBar>
  );
}
