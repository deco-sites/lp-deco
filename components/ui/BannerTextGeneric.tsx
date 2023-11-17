import type { ImageWidget } from "apps/admin/widgets.ts";
import { Picture, Source } from "apps/website/components/Picture.tsx";
import Icon, { AvailableIcons } from "$store/components/ui/Icon.tsx";
import BannerCarousel from '$store/components/ui/BannerCarousel.tsx';

export interface BannerProps {
  /**  @title Image Mobile */
  mobile?: ImageWidget;
  /**  @title Image Desktop */
  desktop?: ImageWidget;

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



export default function BannerTextGeneric(
  { title, description, ctaList, layout, hide, banners }: BannerTextGenericProps,
  ) {

    const ALIGNMENT_LAST_CHILD = {
      'Row': 'col-start-2 row-start-1',
      'Column': '',
      'Row reverse': banners?.length > 0 ? 'col-start-1 row-start-1' : '',
      'Column reverse': ''
    }

    const ALIGNMENT_FIRST_CHILD = {
      'Row': 'col-start-1',
      'Column': '',
      'Row reverse': banners?.length > 0 ? 'col-start-2' : 'col-start-1',
      'Column reverse': ''
    }

  const BACKGROUND_CTA = {
    'Reverse': 'bg-[#FFF] text-[#000] border border-[#181212] hover:bg-[#000] hover:text-[#FFF]',
    'Normal': 'bg-[#000] text-[#FFF] border border-[#181212] hover:bg-[#FFF] hover:text-[#181212]',
    'Border none': `bg-transparent ${layout?.variants?.section === 'Reverse' ? 'text-[#FFF] hover:bg-[#FFF] hover:text-[#181212]' : 'text-[#181212] hover:bg-[#000] hover:text-[#FFF]'} border-none`
  }

  const ALIGNMENT_CONTAINER = {
    'Row': banners?.length > 0 ? 'grid grid-cols-2 grid-rows-1' : 'grid grid-cols-1 grid-rows-1',
    'Column': 'flex flex-col items-center',
    'Row reverse': banners?.length > 0 ? 'grid grid-cols-2 grid-rows-1' : 'grid grid-cols-1 grid-rows-1',
    'Column reverse': 'flex flex-col-reverse items-center'
  }

  const cta = ({ href, text }: {href: string, text: string, label?: AvailableIcons }) => hide?.cta ? <></> : (
    <a href={href ?? "#"} class={`btn px-6 py-3 rounded-lg transition-colors duration-200 ${BACKGROUND_CTA[layout?.variants?.cta ?? "Normal"]}`}>
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
        <div class="text-base md:text-[18px] md:leading-8 text-center">
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
      style={layout?.image === 'Backgrond' && banners?.length ? { backgroundImage: `url(${banners[0]?.desktop ?? ""})` } : {}}
      class={`${ layout?.variants?.section === 'Reverse' ? 'bg-[#0A2121]' : 'bg-[#FFF]' } w-full ${layout?.image === 'Backgrond' && 'bannerBackground'}`}>
      <div class={`xl:container xl:mx-auto mx-5 md:mx-10 ${ALIGNMENT_CONTAINER[layout?.alignment ?? "Column"]} gap-4 md:gap-6 items-center justify-center py-5 md:py-10`}>
        <div class={`w-full ${ALIGNMENT_FIRST_CHILD[layout?.alignment ?? "Column"]}`}>
          {textContainer}
        </div>
        <div class={`w-full ${ALIGNMENT_LAST_CHILD[layout?.alignment ?? "Column"]}`}>
          { layout?.image === 'Backgrond' ? null : banners?.length === 1 ? (
            <div>
              <Picture>
                <Source
                  media="(max-width: 767px)"
                  src={banners[0]?.mobile ?? ""}
                  width={181.5}
                  height={174.75}
                />
                <Source
                  media="(min-width: 768px)"
                  src={banners[0]?.desktop ?? ""}
                  width={228}
                  height={219.5}
                />
                <img
                  class="w-full h-full object-cover"
                  sizes="(max-width: 640px) 100vw, 30vw"
                  src={banners[0]?.mobile ?? ""}
                  alt={banners[0]?.title ?? ""}
                  decoding="async"
                  loading="lazy"
                />
              </Picture>
              <div class="flex flex-col bg-[#f2f2f2] items-start gap-4 px-4 py-8 md:px-6 md:py-10">
                <div class="flex justify-start">
                  <h1 class="text-[#0A2121] font-semibold text-xl lg:text-2xl">
                    {banners[0]?.title}
                  </h1>
                </div>
                <div class="flex flex-col items-start w-full text-[#0A2121]">
                  {banners[0]?.description && (
                    <p class="md:leading-8">{banners[0]?.description}</p>
                  )}
                </div>
              </div>
            </div>
        ) : (
            <BannerCarousel images={banners}  />
          )}
        </div>
      </div>
    </div>
  );
}
