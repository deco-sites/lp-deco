interface Props {
  title?: string;
  fontSize?: "Normal" | "Large";
  description?: string;
  alignment: "center" | "left";
  colorReverse?: boolean;
}

function Header(props: Props) {
  return (
    <>
      {props.title || props.description
        ? (
          <div
            class={`flex flex-col gap-2 text-center md:text-left ${
              props.alignment === "left" ? "items-start" : "items-center"
            }`}
          >
            {props.title &&
              (
                <h1
                  class={`text-3xl leading-8 md:text-4xl md:leading-10 lg:leading-[60px] tracking-wider font-semibold
                  ${props.colorReverse ? "text-primary-content" : "text-[#FFF]"}
                  ${props.fontSize === "Normal" ? "lg:text-5xl" : "lg:text-5xl"}
                `}
                  dangerouslySetInnerHTML={{ __html: props.title }}
                />
              )}
            {props.description &&
              (
                <h2
                  class={`
                  leading-6 lg:leading-8
                  ${
                    props.colorReverse ? "text-primary-content" : "text-neutral"
                  }
                  ${props.fontSize === "Normal" ? "lg:text-xl" : "lg:text-2xl"}
                `}
                >
                  {props.description}
                </h2>
              )}
          </div>
        )
        : null}
    </>
  );
}

export default Header;
