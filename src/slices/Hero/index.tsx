import { FC } from "react";
import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { PrismicNextLink } from "@prismicio/next";
import { Bounded } from "@/src/components/Bounded";
import Navbar from "@/src/components/Navbar";

/**
 * Props for `HeroWithCtaImageAndHighlightText`.
 */
export type HeroWithCtaImageAndHighlightTextProps =
  SliceComponentProps<Content.HeroWithCtaImageAndHighlightTextSlice>;

/**
 * Component for "HeroWithCtaImageAndHighlightText" Slices.
*/

const HeroWithCtaImageAndHighlightText: FC<
  HeroWithCtaImageAndHighlightTextProps
> = ({ slice }) => {
  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      fullWidth
      className="relative min-h-screen bg-background overflow-hidden"
    >
      <Navbar />
      {/* Video Section - Center */}
      <div className="absolute inset-0  flex items-center justify-center z-10">
        <div className="relative w-full h-full max-w-4xl mx-auto">
          {/* Video above overlay */}
          <video
            autoPlay
            // loop
            muted
            playsInline
            className="relative z-10  w-full h-full object-contain"
          >
            <source src = "/drone-hero-video.mp4" type="video/mp4" />
          </video>
        </div>
      </div>

      {/* Keywords Section - Right Side */}
      <div className="absolute right-6 md:right-8 lg:right-12 top-1/2 -translate-y-1/2 z-20 flex flex-col gap-4 md:gap-6">
        {slice.primary.callouts.map((item, index) => (
          <div
            key={index}
            className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground"
          >
            {item.callout_text}
            {item.highlight && (
              <span className="text-accent">.</span>
            )}
          </div>
        ))}
      </div>

      {/* Mission Statement - Bottom Left */}
      <div className="absolute bottom-6 md:bottom-8 lg:bottom-12 left-6 md:left-8 lg:left-12 z-20 max-w-md">
        <PrismicRichText
          field={slice.primary.supporting_text}
          components={{
            paragraph: ({ children }) => (
              <p className="text-base md:text-lg lg:text-xl text-foreground mb-2">
                {children}
              </p>
            ),
          }}
        />
      </div>

      {/* CTA Button - Bottom Right */}
      <div className="absolute bottom-6 md:bottom-8 lg:bottom-12 right-6 md:right-8 lg:right-12 z-20">
        <PrismicNextLink
          field={slice.primary.primary_cta}
          className="px-6 py-3 md:px-8 md:py-4 rounded-lg border-2 border-accent bg-card text-card-foreground hover:bg-accent hover:text-accent-foreground transition-colors font-semibold text-sm md:text-base lg:text-lg"
        >
          {slice.primary.primary_cta?.text || "Explore Programs"}
        </PrismicNextLink>
      </div>
    </Bounded>
  );
};

export default HeroWithCtaImageAndHighlightText;
