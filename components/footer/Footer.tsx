import ColorClasses from "$store/components/footer/ColorClasses.tsx";
import Divider from "$store/components/footer/Divider.tsx";
import ExtraLinks from "$store/components/footer/ExtraLinks.tsx";
import FooterItems from "$store/components/footer/FooterItems.tsx";
import Logo from "$store/components/footer/Logo.tsx";
import type { ImageWidget } from "apps/admin/widgets.ts";
import PoweredByDeco from "apps/website/components/PoweredByDeco.tsx";
import { Picture, Source } from "apps/website/components/Picture.tsx";
import SocialFooter from "$store/components/footer/SocialFooter.tsx";

export type Item = {
  label: string;
  href: string;
};

export type Section = {
  label: string;
  items: Item[];
};

export interface SocialItem {
  label:
    | "Discord"
    | "Facebook"
    | "Instagram"
    | "Linkedin"
    | "Tiktok"
    | "Twitter";
  link: string;
}

export interface Layout {
  backgroundColor?:
    | "Primary"
    | "Secondary"
    | "Accent"
    | "Base 100"
    | "Base 100 inverted";
  variation?:
    | "Variation 1"
    | "Variation 2"
    | "Variation 3"
    | "Variation 4"
    | "Variation 5"
    | "Variation 6";
  hide?: {
    logo?: boolean;
    socialFooter?: boolean
    sectionLinks?: boolean;
    extraLinks?: boolean;
  };
}


export interface FooterProps {
  labelIcon: AvailableIcons;
  href: string;
}

export interface BottomFooterProps {
  links: FooterProps[]
}

export interface Props {
  logo?: {
    image: ImageWidget;
    description?: string;
  };
  sections?: Section[];
  extraLinks?: Item[];
  social?: BottomFooterProps;
  layout?: Layout;
}

const Image = (src: string) => {
  return (
    <Picture>
      <Source
        media="(max-width: 767px)"
        src={src}
        width={100}
        height={50}
      />
      <Source
        media="(min-width: 768px)"
        src={src}
        width={200}
        height={100}
      />
      <img
        class=""
        sizes="(max-width: 640px) 100vw, 30vw"
        src={src}
        alt={"Payment methods"}
        decoding="async"
        loading="lazy"
      />
    </Picture>
  );
};

function Footer({
  logo,
  sections = [
    {
      label: "Column One",
      items: [
        { label: 'Link One', href: "#" },
        { label: 'Link Two', href: '#' },
        { label: 'Link Three', href: '#' },
        { label: 'Link Four', href: '#' },
        { label: 'Link Five', href: '#' }
      ]
    },
    {
      label: 'Column Two',
      items: [
        { label: 'Link One', href: '#' },
        { label: 'Link Two', href: '#' },
        { label: 'Link Three', href: '#' },
        { label: 'Link Four', href: '#' },
        { label: 'Link Five', href: '#' }
      ]
    },
    {
      label: "Column Three",
      items: [
        { label: 'Link One', href: "#" },
        { label: 'Link Two', href: '#' },
        { label: 'Link Three', href: '#' },
        { label: 'Link Four', href: '#' },
        { label: 'Link Five', href: '#' }
      ]
    },
    {
      label: 'Column Four',
      items: [
        { label: 'Link One', href: '#' },
        { label: 'Link Two', href: '#' },
        { label: 'Link Three', href: '#' },
        { label: 'Link Four', href: '#' },
        { label: 'Link Five', href: '#' }
      ]
    },
    {
      label: "Column Five",
      items: [
        { label: 'Link One', href: "#" },
        { label: 'Link Two', href: '#' },
        { label: 'Link Three', href: '#' },
        { label: 'Link Four', href: '#' },
        { label: 'Link Five', href: '#' }
      ]
    }
  ],
  social = { links: [] },
  extraLinks = [],
  layout = {
    backgroundColor: "Primary",
    variation: "Variation 5",
    hide: {
      logo: false,
      sectionLinks: false,
      extraLinks: false,
      socialFooter: false
    },
  },
}: Props) {
  const _logo = layout?.hide?.logo ? <></> : <Logo logo={logo} />;
  const _sectionLinks = layout?.hide?.sectionLinks ? <></> : (
    <FooterItems
      sections={sections}
      justify={layout?.variation == "Variation 2" ||
        layout?.variation == "Variation 3"}
    />
  );
  const _socialFooter = layout?.hide?.socialFooter ? <></> : (
    <SocialFooter links={social?.links}  />
  )
  const _links = layout?.hide?.extraLinks
    ? <></>
    : <ExtraLinks content={extraLinks} />;

  return (
    <footer
      class={`w-full flex flex-col pt-10 pb-2 md:pb-10 gap-10 ${
        ColorClasses(layout)
      }`}
    >
      <div class="lg:container mx-6 lg:mx-auto">
        {(!layout?.variation || layout?.variation == "Variation 1") && (
          <div class="flex flex-col gap-10">
            <div class="flex flex-col md:flex-row md:justify-between md:flex-wrap lg:flex-nowrap gap-8 lg:gap-12">
              {_logo}
              {_sectionLinks}
              {_newsletter}
            </div>
            <Divider />
            <div class="flex flex-col md:flex-row gap-10 md:gap-14 md:items-end">
              {_payments}
              {_social}
              <div class="flex flex-col lg:flex-row gap-10 lg:gap-14 lg:items-end">
                {_apps}
                {_region}
              </div>
            </div>
            <Divider />
            <div class="flex flex-col-reverse md:flex-row md:justify-between gap-10">
              <PoweredByDeco />
              {_links}
              {_socialFooter}
            </div>
          </div>
        )}
        {layout?.variation == "Variation 2" && (
          <div class="flex flex-col gap-10">
            <div class="flex flex-col md:flex-row gap-10">
              <div class="flex flex-col gap-10 lg:w-1/2">
                {_logo}
                {_social}
                {_payments}
                {_apps}
                {_region}
              </div>
              <div class="flex flex-col gap-10 lg:gap-20 lg:w-1/2 lg:pr-10">
                {_newsletter}
                {_sectionLinks}
              </div>
            </div>
            <Divider />
            <div class="flex flex-col-reverse md:flex-row md:justify-between gap-10">
              <PoweredByDeco />
              {_links}
            </div>
          </div>
        )}
        {layout?.variation == "Variation 3" && (
          <div class="flex flex-col gap-10">
            {_logo}
            <div class="flex flex-col lg:flex-row gap-14">
              <div class="flex flex-col md:flex-row lg:flex-col md:justify-between lg:justify-normal gap-10 lg:w-2/5">
                {_newsletter}
                <div class="flex flex-col gap-10">
                  {_payments}
                  {_apps}
                </div>
              </div>
              <div class="flex flex-col gap-10 lg:gap-20 lg:w-3/5 lg:items-end">
                <div class="flex flex-col md:flex-row gap-10">
                  {_sectionLinks}
                  {_social}
                </div>
                {_region}
              </div>
            </div>
            <Divider />
            <div class="flex flex-col-reverse md:flex-row md:justify-between gap-10">
              <PoweredByDeco />
              {_links}
            </div>
          </div>
        )}
        {layout?.variation == "Variation 4" && (
          <div class="flex flex-col gap-10">
            {_newsletter}
            {layout?.hide?.newsletter ? <></> : <Divider />}
            <div class="flex flex-col lg:flex-row gap-10 lg:gap-20 lg:justify-between">
              {_sectionLinks}
              <div class="flex flex-col md:flex-row lg:flex-col gap-10 lg:gap-10 lg:w-2/5 lg:pl-10">
                <div class="flex flex-col md:flex-row gap-10 lg:gap-20">
                  <div class="lg:flex-auto">
                    {_payments}
                  </div>
                  <div class="lg:flex-auto">
                    {_social}
                  </div>
                </div>
                <div class="flex flex-col gap-10 lg:gap-10">
                  {_region}
                  {_apps}
                </div>
              </div>
            </div>
            <Divider />
            <div class="flex flex-col md:flex-row md:justify-between gap-10 md:items-center">
              {_logo}
              <PoweredByDeco />
            </div>
          </div>
        )}
        {layout?.variation == "Variation 5" && (
          <div class="flex flex-col gap-10">
            {_logo}
            <div class="flex flex-col md:flex-row gap-10 lg:gap-20 md:justify-between">
              {_sectionLinks}
            </div>
            <Divider />
            <div class="flex flex-col-reverse md:flex-row md:justify-between gap-10 md:items-center">
              <PoweredByDeco />
              <div class="flex flex-col md:flex-row gap-10 md:items-center">
                {_links}
              </div>
              {_socialFooter}
            </div>
          </div>
        )}
      </div>
    </footer>
  );
}

export default Footer;
