
export interface CTA {
  href: string;
  text: string;
  variant: 'Normal' | 'Reverse'
}
export interface TextCaptureProps {
  text: string;
  cta: CTA[]
}

export default function TextCapture({ text, cta }: TextCaptureProps) {
  return (
    <div class="bg-[#FFF] py-8 md:py-10">
      <section class="xl:container mx-auto flex flex-col items-center justify-center gap-8">
        <h1 class="text-center text-[32px] md:text-[48px] font-bold text-[#181212]">{text}</h1>
        <div class="flex gap-4">
          { cta?.map((item) => <a class={`rounded-lg text-lg py-4 px-6 font-semibold transition-colors duration-200 ${item?.variant === 'Reverse' ? 'border border-[#181212] bg-[#181212] text-[#FFF] hover:bg-[#FFF] hover:text-[#000]' : 'border border-[#181212] bg-[#FFF] text-[#000]  hover:bg-[#181212] hover:text-[#FFF]'}`}>{item?.text}</a>) }
        </div>
      </section>
    </div>
  )
}
