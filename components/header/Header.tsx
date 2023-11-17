import type { ImageWidget } from "apps/admin/widgets.ts";
import Navbar from "./Navbar.tsx";
import { AvailableIcons } from "$store/components/ui/Icon.tsx";
import Drawers from "$store/islands/Drawers.tsx";
import { useId } from "$store/sdk/useId.ts";

export interface NavItem {
  label: string;
  href: string;
  image?: {
    src?: ImageWidget;
    alt?: string;
  };
}

export interface MenuTopProps {
  label?: AvailableIcons;
  text: string;
  href: string;
}

export interface extraLinkItem {
  text: string;
  href: string;
}

export interface Props {
  /**
   * @title Navigation items
   * @description Navigation items used both on mobile and desktop menus
   */
  navItems?: NavItem[];

  /** @title Logo */
  logo?: { src: ImageWidget; alt: string };
  hrefLogin?: string;
}

function Header({
  navItems = [],
  logo,
  hrefLogin = "#",
}: Props) {
  const idHeader = useId();

  return (
    <header style={{ minHeight: "93px" }}>
      <Drawers menu={{ items: navItems, logo }}>
        <div
          class="bg-[#FFF] fixed w-full z-50 h-[54px] md:h-[95px]"
        >
          <div>
            <Navbar items={navItems} logo={logo} hrefLogin={hrefLogin} />
          </div>
        </div>
      </Drawers>
    </header>
  );
}

export default Header;
