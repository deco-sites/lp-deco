import type { ImageWidget } from "apps/admin/widgets.ts";
import BannerTextGeneric, {
  BannerTextGenericProps,
} from "$store/components/ui/BannerTextGeneric.tsx";
import Partners, {
  Props as PartnerProps,
} from "$store/components/ui/Partners.tsx";

export interface Props {
  banner: BannerTextGenericProps;
  partners: PartnerProps;
  background: ImageWidget;
}

export default function HeroCompose(props: Props) {
  return (
    <div>
      <img
        src={props.background}
        alt="Background"
        class="absolute top-0 left-0 w-full h-full opacity-[0.01]"
      />
      <BannerTextGeneric {...props.banner} />
      <Partners {...props.partners} />
    </div>
  );
}
