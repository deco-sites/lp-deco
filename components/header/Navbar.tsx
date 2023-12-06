import Image from "apps/website/components/Image.tsx";
import type { INavItem } from "./NavItem.tsx";
import NavItem from "./NavItem.tsx";
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
        style={{ height: '70px' }}
        class="md:hidden flex flex-row justify-between items-center w-full px-2 py-5 gap-2"
      >
        <MenuButton />
        {logo && (
          <a
            href="/"
            class="inline-flex items-center"
            style={{ minHeight: '70px' }}
            aria-label="Store logo"
          >
            <img class="h-full w-[120px]" src={logo.src} alt={logo.alt} />
          </a>
        )}
        <div class="flex gap-2">
          <a
            href={"#"}
            class="flex justify-center items-center text-center px-5 py-2 bg-[#000] transition-all duration-200 hover:bg-[#FFF] hover:text-[#000] text-[#FFF] border border-[#000]"
          >
            Button
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
                class="h-full w-[120px] object-contain"
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
            href={"#"}
            class="flex justify-center items-center text-center bg-[#000] transition-all duration-200 hover:bg-[#FFF] hover:text-[#000] text-[#FFF] border border-[#000] px-5 py-2"
          >
            Button
          </a>
        </div>
      </div>
    </>
  );
}

export default Navbar;
