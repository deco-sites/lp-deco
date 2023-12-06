import Icon from "$store/components/ui/Icon.tsx";

export interface ButtonCTAProps {
  class?: string;
  className?: string;
  text?: string;
  href?: string;
  label?: "";
  hide?: {
    label?: boolean
  }
}

export default function ButtonCta({ class: css, className, text, href, label, hide }: ButtonCTAProps) {
  return (
    <a 
      href={href ?? "#"}
      className={`btn px-6 py-3 normal-case ${!hide?.label ? 'pr-3' : 'pr-5'} 
      transition-colors duration-200 flex items-center ${css && css } ${className && className}`}
    >
      <span class="h-full flex justify-center items-center">
        {text}
      </span>
      <span class="h-full flex justify-center items-center">
        { !hide?.label && label ? <Icon id={label} size={30} /> : '' }
      </span>
    </a>
  )
}
