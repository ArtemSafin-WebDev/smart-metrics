import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ANIMATION_DELAY, ANIMATION_START } from "./constants";

gsap.registerPlugin(ScrollTrigger);

export default function cases() {
  const cases = document.querySelector(".cases");
  if (!cases) return;

  const heading = cases.querySelector(".cases__heading");
  const nav = cases.querySelector(".cases__nav");
  const listItems = Array.from(cases.querySelectorAll(".cases__list-item"));
  const btn = cases.querySelector(".cases__load-more");
  const tl = gsap.timeline({
    delay: ANIMATION_DELAY,
    scrollTrigger: {
      trigger: cases,
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
      nav,
      {
        autoAlpha: 0,
        y: 60,
      },
      { duration: 1, autoAlpha: 1, y: 0, ease: "power1.out" },
      "<+=0.5"
    )
    .fromTo(
      listItems,
      {
        autoAlpha: 0,
        y: 30,
      },
      {
        autoAlpha: 1,
        duration: 0.6,
        stagger: 0.2,
        y: 0,
        ease: "power1.out",
      },
      ">-=0.5"
    )
    .fromTo(
      btn,
      {
        autoAlpha: 0,
        y: 60,
      },
      { duration: 1, autoAlpha: 1, y: 0, ease: "power1.out" },
      ">-=0.5"
    );
}
