import { SideMenuSection } from "@/shared/constants/side-menu-options";
import Link from "next/link";

export default function ItemMenu({ option }: { option: SideMenuSection }) {
  return (
    <div>
      {option.section && <h3>{option.section}</h3>}
      {option.items.map((item) => {
        return (
          <ul key={item.label}>
            <li>
              <Link href={item.href}>
                {item.icon}
                <span>{item.label}</span>
              </Link>
            </li>
          </ul>
        );
      })}
    </div>
  );
}
