import Container, { Props as ContainerProps } from "$store/components/ui/Container.tsx";
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
  container?: ContainerProps;
}

export default function HeroCompose(props: Props) {
  return (
    <Container {...props.container}>
      <>
        <BannerTextGeneric {...props.banner} />
        <Partners {...props.partners} />
      </>
    </Container>
  );
}
