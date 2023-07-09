import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ANIMATION_START } from "./constants";

gsap.registerPlugin(ScrollTrigger);

export default function documentation() {
  const documentation = document.querySelector(".documentation");
  if (!documentation) return;

  const heading = documentation.querySelector(".documentation__heading");
  const nav = documentation.querySelector(".documentation__nav");
  const listItems = Array.from(
    documentation.querySelectorAll(".documentation__list-item")
  );
  const tl = gsap.timeline({
    delay: 1,
    scrollTrigger: {
      trigger: documentation,
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
    );
}
