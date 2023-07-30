import Swiper from "swiper";
import "swiper/css";
import { SwiperOptions } from "swiper/types";
import { Navigation } from "swiper/modules";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ANIMATION_START } from "./constants";

gsap.registerPlugin(ScrollTrigger);

export default function ourTeam() {
  const elements = Array.from(
    document.querySelectorAll<HTMLElement>(".our-team")
  );

  const mql = window.matchMedia("(max-width: 640px)");

  elements.forEach((element) => {
    const row = element.querySelector<HTMLElement>(".our-team__row");
    const slider = element.querySelector<HTMLElement>(".our-team__slider");

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: element,
        start: ANIMATION_START,
      },
    });

    tl.fromTo(
      row,
      {
        autoAlpha: 0,
        y: 60,
      },
      {
        duration: 1,
        autoAlpha: 1,
        y: 0,
        ease: "power1.out",
      }
    ).fromTo(
      slider,
      {
        autoAlpha: 0,
        y: 60,
      },
      {
        duration: 1,
        autoAlpha: 1,
        y: 0,
        ease: "power1.out",
      },
      ">-=0.5"
    );

    const container = element.querySelector<HTMLElement>(".swiper")!;

    let sliderInstance: Swiper | null = null;
    const desktopOptions: SwiperOptions = {
      slidesPerView: "auto",
      spaceBetween: 0,
      speed: 600,
      modules: [Navigation],
      navigation: {
        prevEl: element.querySelector<HTMLButtonElement>(
          ".our-team__arrow--prev"
        ),
        nextEl: element.querySelector<HTMLButtonElement>(
          ".our-team__arrow--next"
        ),
      },
    };
    const mobileOptions: SwiperOptions = {
      slidesPerView: "auto",
      speed: 600,
    };

    function initialize(mobile = false) {
      if (mobile) {
        sliderInstance = new Swiper(container, mobileOptions);
      } else {
        sliderInstance = new Swiper(container, desktopOptions);
      }
    }

    function destroy() {
      if (sliderInstance) {
        sliderInstance.destroy();
        sliderInstance = null;
      }
    }

    const handleWidthChange = (e: MediaQueryListEvent | MediaQueryList) => {
      if (e.matches) {
        destroy();
        initialize(true);
      } else {
        destroy();
        initialize(false);
      }
    };

    mql.addEventListener("change", handleWidthChange);

    handleWidthChange(mql);
  });
}
