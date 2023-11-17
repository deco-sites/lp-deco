
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
    <div class="bg-[#FFF]">
      <section class="xl:container mx-auto flex flex-col items-center justify-center gap-8">
        <h1 class="text-center text-[32px] md:text-[48px] font-bold">{text}</h1>
        <div class="flex gap-4">
          { cta?.map((item) => <a class={`text-lg font-semibold transition-colors duration-200 ${item?.variant === 'Reverse' ? 'border-none bg-[#181212] text-[#FFF] hover:border hover:bg-[#FFF] hover:text-[#FFF]' : 'border bg-[#FFF] text-[#FFF] hover:border-none  hover:bg-[#181212] hover:text-[#FFF]'}`}>{item?.text}</a>) }
        </div>
      </section>
    </div>
  )
}
