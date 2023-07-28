import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ANIMATION_START } from "./constants";

gsap.registerPlugin(ScrollTrigger);

export default function dates() {
  const elements = Array.from(document.querySelectorAll<HTMLElement>(".dates"));
  elements.forEach((element) => {
    const card = element.querySelector(".dates__content");

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: element,
        start: ANIMATION_START,
      },
    });
    tl.fromTo(
      card,
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
    );
  });
}
