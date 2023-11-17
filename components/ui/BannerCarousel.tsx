import Button from "$store/components/ui/Button.tsx";
import Icon from "$store/components/ui/Icon.tsx";
import Slider from "$store/components/ui/Slider.tsx";
import SliderJS from "$store/islands/SliderJS.tsx";
import { useId } from "$store/sdk/useId.ts";
import type { ImageWidget } from "apps/admin/widgets.ts";
import { Picture, Source } from "apps/website/components/Picture.tsx";

/**
 * @titleBy alt
 */
export interface Banner {
  /** @description desktop otimized image */
  desktop: ImageWidget;
  /** @description mobile otimized image */
  mobile: ImageWidget;
  /** @description Image text title */
  title?: string;
  /** @description Image text description */
  description?: string;
}

export interface Props {
  images?: Banner[];
  /**
   * @title Autoplay interval
   * @description time (in seconds) to start the carousel autoplay
   */
  interval?: number;
}

function BannerItem({ banner: { mobile = "", desktop = "", title = "", description = "" } }: { banner: Banner }) {

  return (
    <div
      class="overflow-y-hidden w-full flex flex-col"
    >
      <Picture preload={false}>
        <Source
          media="(max-width: 767px)"
          src={mobile}
          width={360}
          height={150}
        />
        <Source
          media="(min-width: 768px)"
          src={desktop}
          width={720}
          height={300}
        />
        <img
          class="object-cover w-full h-full"
          src={desktop}
          alt={title}
        />
      </Picture>
      {title || description && (
        <div class="flex flex-col items-start gap-4 w-full bg-[#f2f2f2] px-4 py-8 md:px-6 md:py-10">
          <span class="text-xl lg:text-2xl font-semibold text-[#0A2121] w-full">
            {title}
          </span>
          <span class="w-full text-[#0A2121]">
            {description}
          </span>
        </div>
      )}
    </div>
  );
}

function Dots({ images, interval = 0 }: Props) {
  return (
    <>
      <style
        dangerouslySetInnerHTML={{
          __html: `
          @property --dot-progress {
            syntax: '<percentage>';
            inherits: false;
            initial-value: 0%;
          }
          `,
        }}
      />
      <ul class="carousel justify-center col-span-full gap-4 z-10 row-start-4 absolute bottom-2 left-2">
        {images?.map((_, index) => (
          <li class="carousel-item">
            <Slider.Dot index={index}>
              <div class="py-5">
                <div
                  class="w-5 h-5 rounded dotUnit group-disabled:animate-progress bg-gradient-to-r from-base-100 from-[length:var(--dot-progress)] to-[rgba(255,255,255,0.4)] to-[length:var(--dot-progress)]"
                  style={{ animationDuration: `${interval}s` }}
                />
              </div>
            </Slider.Dot>
          </li>
        ))}
      </ul>
    </>
  );
}

function Buttons() {
  return (
    <>
      <div class="flex items-center justify-center z-10 absolute bottom-2 right-4">
        <Slider.PrevButton class="btn btn-circle bg-transparent hover:bg-[#f8a531] transition-all duration-500 rounded-none">
          <Icon
            class="text-base-100"
            size={24}
            id="ChevronLeft"
            strokeWidth={3}
          />
        </Slider.PrevButton>
      </div>
      <div class="flex items-center justify-center z-10 col-start-3 row-start-2">
        <Slider.NextButton class="btn btn-circle bg-transparent hover:bg-[#f8a531] transition-all duration-500 rounded-none">
          <Icon
            class="text-base-100"
            size={24}
            id="ChevronRight"
            strokeWidth={3}
          />
        </Slider.NextButton>
      </div>
    </>
  );
}

function BannerCarousel(props: Props) {
  const { images, interval } = { ...props };
  const id = useId();

  if (images?.length === 0) {
    return <div />
  }

  return (
    <div
      id={id}
      class="grid grid-cols-[1fr] grid-rows-[1fr_20px]"
    >
      <Slider class="carousel carousel-center w-full col-span-full row-span-full gap-6">
        {images?.map((image, index) => (
          <Slider.Item index={index} class="carousel-item w-full">
            <BannerItem banner={image} />
          </Slider.Item>
        ))}
      </Slider>
      <div class="relative">
        <Buttons />

        <Dots images={images} interval={interval} />
      </div>


      <SliderJS rootId={id} interval={interval && interval * 1e3} infinite />
    </div>
  );
}

export default BannerCarousel;
