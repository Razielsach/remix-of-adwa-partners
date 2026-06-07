import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCoverflow, Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

interface CardCarouselProps {
  children: React.ReactNode[];
  autoplayDelay?: number;
  showPagination?: boolean;
  showNavigation?: boolean;
  slideWidth?: number;
}

export const CardCarousel: React.FC<CardCarouselProps> = ({
  children,
  autoplayDelay = 3500,
  showPagination = true,
  showNavigation = false,
  slideWidth = 360,
}) => {
  const css = `
  .adwa-carousel.swiper { width: 100%; padding-bottom: 56px; padding-top: 8px; overflow: visible; }
  .adwa-carousel .swiper-slide { width: ${slideWidth}px; height: auto; display: flex; }
  .adwa-carousel .swiper-slide > * { width: 100%; height: 100%; }
  .adwa-carousel .swiper-pagination { bottom: 12px !important; }
  .adwa-carousel .swiper-pagination-bullet {
    background: var(--brand-graphite); opacity: 0.25; width: 8px; height: 8px;
    transition: opacity 0.3s, width 0.3s, background 0.3s;
  }
  .adwa-carousel .swiper-pagination-bullet-active {
    opacity: 1; width: 28px; border-radius: 999px;
    background: var(--brand-forest);
  }
  .adwa-carousel .swiper-button-prev,
  .adwa-carousel .swiper-button-next {
    color: var(--brand-graphite);
    background: var(--brand-ivory);
    width: 40px; height: 40px; border-radius: 999px;
    box-shadow: 0 10px 25px -10px rgba(31,42,36,0.35);
  }
  .adwa-carousel .swiper-button-prev::after,
  .adwa-carousel .swiper-button-next::after { font-size: 14px; font-weight: 700; }
  .adwa-carousel .swiper-3d .swiper-slide-shadow-left,
  .adwa-carousel .swiper-3d .swiper-slide-shadow-right { background-image: none; }
  `;

  return (
    <section className="w-full">
      <style>{css}</style>
      <Swiper
        className="adwa-carousel"
        spaceBetween={24}
        autoplay={{ delay: autoplayDelay, disableOnInteraction: false, pauseOnMouseEnter: true }}
        effect="coverflow"
        grabCursor
        centeredSlides
        loop={children.length > 2}
        slidesPerView="auto"
        coverflowEffect={{ rotate: 0, stretch: 0, depth: 120, modifier: 2.5, slideShadows: false }}
        pagination={showPagination ? { clickable: true } : false}
        navigation={showNavigation}
        modules={[EffectCoverflow, Autoplay, Pagination, Navigation]}
      >
        {children.map((child, i) => (
          <SwiperSlide key={i}>{child}</SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};
