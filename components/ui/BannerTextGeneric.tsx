import type { ImageWidget } from "apps/admin/widgets.ts";
import { Picture, Source } from "apps/website/components/Picture.tsx";
import Icon, { AvailableIcons } from "$store/components/ui/Icon.tsx";

export interface BannerProps {
  image?: {
    srcMobile?: ImageWidget;
    srcDesktop?: ImageWidget;
  };
  title?: string;
  description?: string;
}

export interface BannerTextGenericProps {
  title: string;

  /** @format html */
  description?: string;

  ctaList?: {
    href: string,
    text: string,
    label?: AvailableIcons
  }[]

  image?: {
    srcMobile?: ImageWidget;
    srcDesktop?: ImageWidget;
  };

  banners?: BannerProps[]

  /**  @title Hide Components */
  hide: {
    cta: boolean
  }

  layout?: {
    alignment?: 'Row' | 'Column' | 'Row reverse' | 'Column reverse',
    image?: 'Backgrond' | 'Front',
    variants?: {
      cta?: 'Normal' | 'Reverse' | 'Border none', 
      section?: 'Normal' | 'Reverse'
    }
  }
}

const ALIGNMENT = {
  'Row': 'flex flex-row justity-between',
  'Column': 'flex flex-col items-center',
  'Row reverse': 'flex flex-row-reverse justity-between',
  'Column reverse': 'flex flex-col-reverse items-center'
}


export default function BannerTextGeneric(
  { title, description, image, ctaList, layout, hide, banners }: BannerTextGenericProps,
  ) {

  const BACKGROUND_CTA = {
    'Reverse': 'bg-[#FFF] text-[#000] border border-accent hover:bg-[#000] hover:text-[#FFF]',
    'Normal': 'bg-[#000] text-[#FFF] border-none hover:bg-[#FFF] hover:text-[#181212]',
    'Border none': `bg-transparent ${layout?.variants?.section === 'Reverse' ? 'text-[#FFF] hover:bg-[#FFF] hover:text-[#181212]' : 'text-[#181212] hover:bg-[#000] hover:text-[#FFF]'} border-none`
  }

  const cta = ({ href, text }: {href: string, text: string, label?: AvailableIcons }) => hide?.cta ? <></> : (
    <a href={href ?? "#"} class={`btn px-6 py-3 transition-colors duration-200 ${BACKGROUND_CTA[layout?.variants?.cta ?? "Normal"]}`}>
      {text}
    </a>
  )
  const textContainer = <>
    <div class={`flex gap-4 ${layout?.alignment === 'Column' || layout?.alignment === 'Column reverse' ? 'flex flex-col md:flex-row justify-stretch md:justify-around md:items-center gap-12' : 'flex flex-col gap-12'}`}>
      <div class="w-full">
        <p class={`${layout?.variants?.section === 'Reverse' ? 'text-[#FFFFFF]' : 'text-[#181212]'} font-semibold text-[40px] md:text-[56px] text-center`}>
          {title}
        </p>
      </div>
      <div class={`flex flex-col gap-6 md:gap-8 w-full ${layout?.alignment === 'Column' || layout?.alignment === 'Column reverse' ? 'md:items-center' : 'items-center'}`}>
        <div class="text-base md:text-[24px] md:leading-8 text-center">
          {description && (
            <p dangerouslySetInnerHTML={{ __html: description }} />
          )}
        </div>
        <div class={`${hide?.cta ? 'hidden' : 'flex'} items-center gap-4`}>
          { ctaList?.map((itemBtn) => cta(itemBtn)) }
        </div>
      </div>
    </div>
  </>


  return (
    <div
      style={layout?.image === 'Backgrond' && banners?.length ? { backgroundImage: `url(${banners[0]?.image?.srcDesktop ?? ""})` }}
      class={`${ layout?.variants?.section === 'Reverse' ? 'bg-[#0A2121]' : 'bg-[#FFF]' } w-full ${layout?.image === 'Backgrond' && 'bannerBackground'}`}>
      <div class={`xl:container xl:mx-auto mx-5 md:mx-10 ${ALIGNMENT[layout?.alignment ?? "Column"]} gap-4 md:gap-6 items-center justify-center py-5 md:py-10`}>
        {textContainer}
        <div>
          { layout?.image === 'Front' && (
            <Picture>
              <Source
                media="(max-width: 767px)"
                src={image?.srcMobile ?? ""}
                width={181.5}
                height={174.75}
              />
              <Source
                media="(min-width: 768px)"
                src={image?.srcDesktop ?? ""}
                width={228}
                height={219.5}
              />
              <img
                class="w-full h-full object-cover"
                sizes="(max-width: 640px) 100vw, 30vw"
                src={image?.srcMobile ?? ""}
                alt={title ?? ""}
                decoding="async"
                loading="lazy"
              />
            </Picture>
          ) }
        </div>
      </div>
    </div>
  );
}
