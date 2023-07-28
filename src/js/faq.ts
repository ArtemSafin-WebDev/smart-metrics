import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ANIMATION_START } from "./constants";

gsap.registerPlugin(ScrollTrigger);

export default function faq() {
  const elements = Array.from(document.querySelectorAll<HTMLElement>(".faq"));

  elements.forEach((element) => {
    const heading = element.querySelector<HTMLElement>(".faq__heading");
    const listItems = Array.from(
      element.querySelectorAll<HTMLElement>(".accordions__item")
    );
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
      { duration: 1, autoAlpha: 1, y: 0, ease: "power1.out", clearProps: "all" }
    ).fromTo(
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
    );
  });
}
