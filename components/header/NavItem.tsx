import Image from "apps/website/components/Image.tsx";

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
        <span class="group-hover:underline hover:pb-2 text-[#000] sm:text-base lg:text-base font-semibold">
          {label}
        </span>
      </a>
    </li>
  );
}

export default NavItem;
