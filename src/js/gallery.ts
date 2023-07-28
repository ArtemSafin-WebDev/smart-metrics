import Swiper from "swiper";
import "swiper/css";
import { SwiperOptions } from "swiper/types";
import { Navigation, Pagination, Controller, EffectFade } from "swiper/modules";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function gallery() {
  const mql = window.matchMedia("(max-width: 640px)");
  const elements = Array.from<HTMLInputElement>(
    document.querySelectorAll(".js-gallery")
  );

  elements.forEach((element) => {
    const mainContainer = element.querySelector<HTMLElement>(
      ".gallery__main-slider .swiper"
    );
    const textContainer = element.querySelector<HTMLElement>(
      ".gallery__text-slider .swiper"
    );

    const pagination = element.querySelector<HTMLElement>(
      ".gallery__pagination"
    );

    const textOptions: SwiperOptions = {
      speed: 600,
      modules: [EffectFade, Controller],
      effect: "fade",
      allowTouchMove: false,
      autoHeight: true,
      fadeEffect: {
        crossFade: true,
      },
      on: {
        slideChange: () => {
          ScrollTrigger.refresh();
        },
      },
    };

    let mainInstance: Swiper | null = null;
    let textInstance: Swiper | null = null;

    function initialize(mobile = false) {
      const mainOptions: SwiperOptions = {
        slidesPerView: mobile ? "auto" : 1,
        speed: 600,
        modules: [Pagination, Navigation, Controller],
        longSwipesRatio: 0.2,
        spaceBetween: 0,
        pagination: {
          type: "bullets",
          el: pagination,
          clickable: true,
        },
        navigation: {
          prevEl: element.querySelector<HTMLButtonElement>(
            ".gallery__arrow--prev"
          ),
          nextEl: element.querySelector<HTMLButtonElement>(
            ".gallery__arrow--next"
          ),
        },
      };
      if (textContainer) {
        textInstance = new Swiper(textContainer, textOptions);
      }

      if (mainContainer) {
        mainInstance = new Swiper(mainContainer, mainOptions);
        if (textInstance) {
          mainInstance.controller.control = textInstance;
        }
      }
    }

    function destroy() {
      if (mainInstance) {
        mainInstance?.destroy();
        mainInstance = null;
      }

      if (textInstance) {
        textInstance?.destroy();
        textInstance = null;
      }
    }

    const handleWidthChange = (e: MediaQueryListEvent | MediaQueryList) => {
      if (e.matches) {
        destroy();
        initialize(true);
      } else {
        destroy();
        initialize();
      }
    };

    mql.addEventListener("change", handleWidthChange);

    handleWidthChange(mql);
  });
}
