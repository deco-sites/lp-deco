import Image from "apps/website/components/Image.tsx";
import type { INavItem } from "./NavItem.tsx";
import NavItem from "./NavItem.tsx";
import { navbarHeight } from "./constants.ts";
import MenuButton from "$store/islands/MenuButton.tsx";

function Navbar({ items, logo, hrefLogin }: {
  items: INavItem[];
  logo?: { src: string; alt: string };
  hrefLogin?: string;
}) {
  return (
    <>
      {/* Mobile Version */}
      <div
        style={{ height: navbarHeight }}
        class="md:hidden flex flex-row justify-between items-center w-full px-2 py-5 gap-2"
      >
        <MenuButton />
        {logo && (
          <a
            href="/"
            class="inline-flex items-center"
            style={{ minHeight: navbarHeight }}
            aria-label="Store logo"
          >
            <img class="h-full w-[120px]" src={logo.src} alt={logo.alt} />
          </a>
        )}
        <div class="flex gap-2">
          <a
            href={hrefLogin}
            class="flex justify-center items-center text-center rounded-md p-3 bg-[#240F51] transition-all duration-200 text-[#13E5D6] border border-[#13E5D6] font-bold text-[10px] sm:text-xs"
          >
            Login
          </a>
          <a
            href="#form"
            class="flex justify-center items-center text-center rounded-md p-3 bg-[#FE075F] text-white font-bold text-[10px] sm:text-xs"
          >
            Solicitar demo
          </a>
        </div>
      </div>

      {/* Desktop Version */}
      <div class="hidden container mx-auto md:flex flex-row justify-center lg:justify-between items-center w-full md:px-8 py-6">
        <div class="flex-none">
          {logo && (
            <a
              href="/"
              aria-label="Store logo"
              class="block pr-3 lg:pr-4"
            >
              <img
                class="h-full w-[160px] lg:w-[200px] object-contain"
                src={logo.src}
                alt={logo.alt}
              />
            </a>
          )}
        </div>
        <div class="flex-auto flex justify-center">
          {items.map((item) => <NavItem item={item} />)}
        </div>
        <div class="flex gap-2">
          <a
            href={hrefLogin}
            class="flex justify-center items-center text-center rounded-md bg-[#240F51] transition-all duration-200 hover:bg-[#13E5D6] hover:text-[#120C45] text-[#13E5D6] border border-[#13E5D6] font-bold text-xs lg:text-sm p-2 lg:p-3"
          >
            Login
          </a>
          <a
            href="#form"
            class="flex justify-center items-center text-center rounded-md bg-[#FE075F] transition-all duration-200 text-white font-bold text-xs lg:text-sm p-2 lg:p-3 hover:bg-[#5F122D]"
          >
            Solicitar demo
          </a>
        </div>
      </div>
    </>
  );
}

export default Navbar;
