import type { ComponentChildren, JSX } from "preact";

function Dot({ index, children }: {
  index: number;
  children: ComponentChildren;
}) {
  return (
    <button
      data-dot={index}
      aria-label={`go to slider item ${index}`}
      class="focus:outline-none group buttonSummaryCarrosel"
    >
      {children}
    </button>
  );
}

function DotCustom({ children, className = "" }: {
  children: ComponentChildren;
  className: string;
}) {
  return (
    <select
      data-dot={1}
      aria-label={`go to slider item ${1}`}
      class={`focus:outline-none group buttonSummaryCarrosel ${className}`}
    >
      {children}
    </select>
  );
}

function Slider(props: JSX.IntrinsicElements["ul"]) {
  return <ul data-slider {...props} />;
}

function Item({
  index,
  ...props
}: JSX.IntrinsicElements["li"] & { index: number }) {
  return <li data-slider-item={index} {...props} />;
}

function NextButton(props: JSX.IntrinsicElements["button"]) {
  return <button data-slide="next" aria-label="Next item" {...props} />;
}

function PrevButton(props: JSX.IntrinsicElements["button"]) {
  return <button data-slide="prev" aria-label="Previous item" {...props} />;
}

Slider.Dot = Dot;
Slider.DotCustom = DotCustom;
Slider.Item = Item;
Slider.NextButton = NextButton;
Slider.PrevButton = PrevButton;

export default Slider;
