import { sideMenuOptions } from "@/shared/constants/side-menu-options";
import ItemMenu from "./item-menu";
import { StyledSideBar } from "./styled";
import Image from "next/image";

export default function SideBar() {
  return (
    <StyledSideBar>
      <header>
        <Image width={40} height={40} alt="Foto de um rapaz de pele branca, cabelos castanhos e oculos de grau preto" src="https://avatars.githubusercontent.com/u/116408591?v=4" aria-label="Logo do site." />
      </header>
      <hr/>
      <nav aria-label="Menu de navegação">
        {sideMenuOptions.map((option) => ( 
          <ItemMenu key={option.section} option={option} />
        ))}
      </nav>
      <footer>
        <h4>Sou um footer</h4>
        {/* <UserProfile /> */}
      </footer>
    </StyledSideBar>
  );
}
