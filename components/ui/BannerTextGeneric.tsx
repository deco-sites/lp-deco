import { Picture, Source } from "apps/website/components/Picture.tsx";
import Icon, { AvailableIcons } from "$store/components/ui/Icon.tsx";
import BannerCarousel from '$store/components/ui/BannerCarousel.tsx';
import type { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";

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
    hide?: {
      label?: boolean
    }
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
      'Row': 'col-start-1 row-start-1',
      'Column': '',
      'Row reverse': banners?.length > 0 ? 'col-start-2 row-start-1' : 'col-start-1 row-start-1',
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

  const cta = ({ href, text, label, hide }: {href: string, text: string, label?: AvailableIcons }) => hide?.cta ? <></> : (
      <a href={href ?? "#"} class={`btn px-6 py-3  ${!hide?.label ? 'pr-3' : 'pr-5'} rounded-lg transition-colors duration-200 flex items-center ${BACKGROUND_CTA[layout?.variants?.cta ?? "Normal"]}`}>
        <span class="h-full flex justify-center items-center">
          {text}
        </span>
        <span class="h-full flex justify-center items-center">
          { !hide?.label ? <Icon id={label} size={30} /> : '' }
        </span>
      </a>
  )
  const textContainer = <>
    <div class={`flex gap-4
      ${layout?.alignment === 'Column reverse' ? 'flex flex-col md:flex-row justify-stretch md:justify-around md:items-center gap-12' : 'flex flex-col gap-12'}
    `}>
        <p class={`font-semibold text-[40px] md:text-[56px] w-full
          ${layout?.variants?.section === 'Reverse' ? 'text-[#FFFFFF]' : 'text-[#181212]'} 
          ${layout?.alignment === 'Column' ? 'text-center' : 'text-center md:text-start'}
        `}>
          {title}
        </p>
      <div class={`flex flex-col gap-6 md:gap-8 w-full ${layout?.alignment === 'Column' ? 'md:items-center' : 'items-center md:items-start'}`}>
        <div class={`text-base md:text-[18px] md:leading-8
          ${layout?.variants?.section === 'Reverse' ? 'text-[#FFFFFF]' : 'text-[#181212]'} 
          ${layout?.alignment === 'Column' ? 'text-center' : 'text-center md:text-start'}
        `}>
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
    <section class={`${ layout?.variants?.section === 'Reverse' ? 'bg-[#0A2121]' : 'bg-[#FFF]' } w-full py-10 md:py-24`}>
      <div
        class={`relative z-0 h-full`}>

        { layout?.image === 'Backgrond' && banners?.length ? <Image width={400} height={380} src={banners[0]?.desktop} class="w-full h-full object-cover absolute z-[-1]" /> : null}

        <div class={`xl:container xl:mx-auto mx-5 md:mx-10 ${ALIGNMENT_CONTAINER[layout?.alignment ?? "Column"]} gap-12 md:gap-16 items-center justify-center`}>
          <div />
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
                    class="w-full object-cover"
                    sizes="(max-width: 640px) 100vw, 30vw"
                    src={banners[0]?.mobile ?? ""}
                    alt={banners[0]?.title ?? ""}
                    decoding="async"
                    loading="lazy"
                  />
                </Picture>
                { banners[0]?.title || banners[0]?.description ? (
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
                ) : null }
              </div>
          ) : (
              <BannerCarousel images={banners}  />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
