import { InfiniteSlider } from "@/components/ui/infinite-slider";
import { cn } from "@/lib/utils";

export type Logo = {
  src: string;
  alt: string;
};

type LogoCloudProps = React.ComponentProps<"div"> & {
  logos: Logo[];
  reverse?: boolean;
  duration?: number;
};

export function LogoCloud({ className, logos, reverse = false, duration = 30, ...props }: LogoCloudProps) {
  return (
    <div className={cn("relative w-full", className)} {...props}>
      <InfiniteSlider gap={64} duration={duration} reverse={reverse}>
        {logos.map((logo, i) => (
          <div
            key={`${logo.alt}-${i}`}
            className="flex h-16 w-36 shrink-0 items-center justify-center md:h-20 md:w-44"
          >
            <img
              src={logo.src}
              alt={logo.alt}
              className="max-h-full max-w-full object-contain opacity-90 transition duration-300 hover:opacity-100 hover:scale-110"
              loading="lazy"
            />
          </div>
        ))}
      </InfiniteSlider>
    </div>
  );
}
