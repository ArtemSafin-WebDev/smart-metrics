import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ANIMATION_START } from "./constants";

gsap.registerPlugin(ScrollTrigger);

export default function tariffsPage() {
  const elements = Array.from(document.querySelectorAll(".tariffs"));

  elements.forEach((tariffs) => {
    const heading = tariffs.querySelector(
      ".tariffs__heading, .tariffs__secondary-heading"
    );
    const headingText = tariffs.querySelector(".tariffs__heading-text");
    const listItems = Array.from(
      tariffs.querySelectorAll(".tariffs__list-item")
    );
    const tl = gsap.timeline({
      delay: tariffs.matches(".tariffs--standalone") ? 0 : 1,
      scrollTrigger: {
        trigger: tariffs,
        start: ANIMATION_START,
      },
    });

    if (heading) {
      tl.fromTo(
        heading,
        {
          autoAlpha: 0,
          y: 60,
        },
        { duration: 1, autoAlpha: 1, y: 0, ease: "power1.out" }
      );
    }
    if (headingText) {
      tl.fromTo(
        headingText,
        {
          autoAlpha: 0,
          y: 60,
        },
        { duration: 1, autoAlpha: 1, y: 0, ease: "power1.out" },
        "<+=0.5"
      );
    }

    tl.fromTo(
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
