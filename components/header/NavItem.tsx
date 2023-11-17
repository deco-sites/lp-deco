import Image from "apps/website/components/Image.tsx";
import { headerHeight } from "./constants.ts";

export interface INavItem {
  label: string;
  href: string;
  children?: INavItem[];
  image?: { src?: string; alt?: string };
}

function NavItem({ item }: { item: INavItem }) {
  const { href, label } = item;

  return (
    <li class="group flex items-center">
      <a href={href} class="px-4 py-3">
        <span class="group-hover:underline hover:pb-2 hover:text-[#13E5D6] sm:text-[10px] md:text-xs lg:text-sm font-semibold">
          {label}
        </span>
      </a>
    </li>
  );
}

export default NavItem;
