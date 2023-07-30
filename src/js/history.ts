import Swiper from "swiper";

import { SwiperOptions } from "swiper/types";
import { Navigation, EffectFade } from "swiper/modules";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ANIMATION_START } from "./constants";

import "swiper/css";
import "swiper/css/effect-fade";

gsap.registerPlugin(ScrollTrigger);

export default function history() {
  const elements = Array.from(
    document.querySelectorAll<HTMLElement>(".history")
  );

  elements.forEach((element) => {
    const heading = element.querySelector<HTMLElement>(".history__heading");
    const row = element.querySelector<HTMLElement>(".history__row");

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: element,
        start: ANIMATION_START,
      },
    });

    tl.fromTo(
      heading,
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
      },
      ">-=0.5"
    );
    const navSliderContainer = element.querySelector<HTMLElement>(
      ".history__nav-slider .swiper"
    );

    const mainSliderContainer = element.querySelector<HTMLElement>(
      ".history__main-slider .swiper"
    );

    const navLinks = Array.from(
      element.querySelectorAll<HTMLLinkElement>(".history__nav-link")
    );

    let mainSliderInstance: Swiper | null = null;

    const navSliderOptions: SwiperOptions = {
      slidesPerView: "auto",
      speed: 600,
    };

    const mainSliderOptions: SwiperOptions = {
      effect: "fade",
      speed: 600,
      autoHeight: true,
      modules: [Navigation, EffectFade],
      fadeEffect: {
        crossFade: true,
      },
      navigation: {
        prevEl: element.querySelector<HTMLButtonElement>(
          ".history__arrow--prev"
        ),
        nextEl: element.querySelector<HTMLButtonElement>(
          ".history__arrow--next"
        ),
      },
      init: false,
      on: {
        init: (swiper) => {
          navLinks.forEach((link) => link.classList.remove("active"));
          navLinks[swiper.activeIndex]?.classList.add("active");
          ScrollTrigger.refresh();
        },
        slideChange: (swiper) => {
          navLinks.forEach((link) => link.classList.remove("active"));
          navLinks[swiper.activeIndex]?.classList.add("active");
          ScrollTrigger.refresh();
        },
      },
    };

    console.log(navSliderContainer, mainSliderContainer);

    if (navSliderContainer) {
      new Swiper(navSliderContainer, navSliderOptions);
    }

    if (mainSliderContainer) {
      mainSliderInstance = new Swiper(mainSliderContainer, mainSliderOptions);
      mainSliderInstance.init();
    }

    navLinks.forEach((link, linkIndex) => {
      link.addEventListener("click", (event) => {
        event.preventDefault();
        mainSliderInstance?.slideTo(linkIndex);
      });
    });

    window.addEventListener("load", () => {
      mainSliderInstance?.updateAutoHeight();
    });
  });
}
