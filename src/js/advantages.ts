import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ANIMATION_START } from "./constants";

gsap.registerPlugin(ScrollTrigger);

export default function advantages() {
  const elements = Array.from(
    document.querySelectorAll<HTMLElement>(".advantages")
  );

  elements.forEach((advantages) => {
    const heading = advantages.querySelector(".advantages__heading");
    const listItems = Array.from(
      advantages.querySelectorAll(".advantages__list-item")
    );
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: advantages,
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
