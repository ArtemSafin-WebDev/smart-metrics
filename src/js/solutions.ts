import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ANIMATION_START } from "./constants";

gsap.registerPlugin(ScrollTrigger);

export default function solutions() {
  const solutions = document.querySelector<HTMLElement>(".solutions");
  if (!solutions) return;
  const topRow = solutions.querySelector<HTMLElement>(".solutions__top-row");
  const bottom = solutions.querySelector<HTMLElement>(".solutions__bottom");

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: solutions,
      start: ANIMATION_START,
    },
  });

  tl.fromTo(
    topRow,
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
    bottom,
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
}
