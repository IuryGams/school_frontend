import { sideMenuOptions } from "@/shared/constants/side-menu-options";
import ItemMenu from "./item-menu";

export default function SideBar() {
  return (
    <aside>
      <header className="logo">
        <h1>Logo</h1>
        <h2>Nome do Sistema</h2>
      </header>
      <nav className="navigation" aria-label="Menu de navegação">
        {sideMenuOptions.map((option) => ( 
          <ItemMenu key={option.id} option={option} />
        ))}
      </nav>
      <footer>
        {/* <UserProfile /> */}
      </footer>
    </aside>
  );
}
