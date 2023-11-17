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
    <div class="xl:container mx-auto px-4 py-8 md:py-12">
      <div class={`flex ${ALIGNMENT_TEXT[alignment ?? 'Left']}`}>
        <h1 class="font-bold text-[40px]">{text}</h1>
      </div>
    </div>
  )
}
