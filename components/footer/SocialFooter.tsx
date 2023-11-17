import Icon, { AvailableIcons } from "$store/components/ui/Icon.tsx";
import type { BottomFooterProps } from "$store/components/footer/Footer.tsx"

export default function SocialFooter(
  { links }: BottomFooterProps,
) {
  return (
    <div class="w-full py-5">
      <div class="flex gap-4 md:gap-6 text-white pt-5 md:pt-0">
        {links?.map(({ labelIcon, href }, index) => (
          <a href={href ?? "#"}>
            <Icon id={labelIcon ?? ""} size={30} />
          </a>
        ))}
      </div>
    </div>
  );
}
