export interface IntroProps {
  text: string
  alignment: 'Left' | 'Center' | 'Right'
}

const ALIGNMENT_TEXT = {
  'Left': 'text-start',
  'Center': 'text-center',
  'Right': 'text-end'
}

export default function Intro({ text = "Lorem ipsum dolor sit amet consectetur. Placerat ornare diam nulla fringilla gravida justo elementum. Ut sed in.", alignment = "Left" }: IntroProps) {
  return (
    <section class="bg-[#FFF]">
      <div class="xl:container xl:mx-auto mx-5 md:mx-10 py-12 md:py-16 lg:py-20">
        <div class={`flex ${ALIGNMENT_TEXT[alignment ?? 'Left']}`}>
          <h1 class="font-bold text-[#181212] text-[40px]">{text}</h1>
        </div>
      </div>
    </section>
  )
}
