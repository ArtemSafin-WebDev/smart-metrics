import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ANIMATION_START } from "./constants";

gsap.registerPlugin(ScrollTrigger);

export default function news() {
  const news = document.querySelector(".home-news");
  if (!news) return;

  const heading = news.querySelector(".home-news__heading");
  const link = news.querySelector(".home-news__show-more");
  const slider = Array.from(news.querySelectorAll(".home-news__slider"));

  let mm = gsap.matchMedia();

  mm.add("(min-width: 641px)", () => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: news,
        start: ANIMATION_START,
      },
    });

    tl.fromTo(
      heading,
      {
        autoAlpha: 0,
        y: 60,
      },
      { duration: 1, autoAlpha: 1, y: 0, ease: "power1.out" }
    )
      .fromTo(
        link,
        {
          autoAlpha: 0,
          y: 60,
        },
        { duration: 1, autoAlpha: 1, y: 0, ease: "power1.out" },
        "<"
      )
      .fromTo(
        slider,
        {
          autoAlpha: 0,
          y: 60,
        },
        { duration: 1, autoAlpha: 1, y: 0, ease: "power1.out" },
        "<+=0.5"
      );
  });
  mm.add("(max-width: 640px)", () => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: news,
        start: ANIMATION_START,
      },
    });

    tl.fromTo(
      heading,
      {
        autoAlpha: 0,
        y: 60,
      },
      { duration: 1, autoAlpha: 1, y: 0, ease: "power1.out" }
    )
      .fromTo(
        link,
        {
          autoAlpha: 0,
          y: 60,
        },
        { duration: 1, autoAlpha: 1, y: 0, ease: "power1.out" },
        1
      )
      .fromTo(
        slider,
        {
          autoAlpha: 0,
          y: 60,
        },
        { duration: 1, autoAlpha: 1, y: 0, ease: "power1.out" },
        0.5
      );
  });
}
