import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ANIMATION_START } from "./constants";

gsap.registerPlugin(ScrollTrigger);

export default function otherCases() {
  const otherCases = document.querySelector(".other-cases");
  if (!otherCases) return;

  const heading = otherCases.querySelector(".other-cases__heading");
  const link = otherCases.querySelector(".other-cases__show-more");
  const items = Array.from(
    otherCases.querySelectorAll(".other-cases__list-item")
  );
  const list = otherCases.querySelector(".other-cases__list");

  let mm = gsap.matchMedia();

  mm.add("(min-width: 641px)", () => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: otherCases,
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
        items,
        {
          autoAlpha: 0,
        },
        { duration: 1, autoAlpha: 1, y: 0, ease: "power1.out", stagger: 0.2 },
        "<+=0.5"
      );
  });
  mm.add("(max-width: 640px)", () => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: otherCases,
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
        list,
        {
          autoAlpha: 0,
          y: 60,
        },
        { duration: 1, autoAlpha: 1, y: 0, ease: "power1.out" },
        0.5
      );
  });
}
