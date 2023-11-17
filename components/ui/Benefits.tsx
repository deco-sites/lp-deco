import Icon, { AvailableIcons } from "./Icon.tsx";

export interface BenefitsProps {
  titleSection?: string;
  cards?: CardProps[];
  layout?: {
    background: 'Normal' | 'Reverse'
  }
}

export interface CardProps {
  labelIcon?: AvailableIcons;
  title?: string;
  description?: string;
}

export default function Benefits(
  { titleSection, cards, layout }: BenefitsProps,
) {
  return (
    <div class={`w-full ${layout?.background === 'Reverse' ? 'bg-[#0A2121]' : 'bg-[#FFF]'} py-6 md:py-16`}>
      <div class="xl:container xl:mx-auto mx-5 md:mx-10 flex flex-col items-start justify-center gap-4 md:gap-6">
        <div class="flex justify-start">
          <p class="text-[#02F67C] font-semibold text-[32px] md:text-[40px]">
            {titleSection}
          </p>
        </div>
        <div class="grid flex-row wrap justify-center gap-2 grid-cols-2 lg:grid-cols-4">
          {cards?.map((
            { labelIcon, title, description }: CardProps,
            index: number,
          ) => (
            <div
              key={index}
              class={`flex flex-col justify-start items-start gap-2 md:gap-6 p-6 md:p-10 py-12 md:py-20 ${layout?.background === 'Reverse' ? 'text-[#FFFFFF]' : 'text-[#000]'} rounded-2xl hover:translate-y-4 transition-transform duration-200`}
            >
              {labelIcon && <Icon id={labelIcon ?? ""} size={40} />}
              {title && (
                <p class="font-semibold mt-2 md:mt-0 md:text-[28px]">{title}</p>
              )}
              {description && <p class="text-xs md:text-base">{description}</p>}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
