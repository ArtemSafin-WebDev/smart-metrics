import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ANIMATION_START } from "./constants";

gsap.registerPlugin(ScrollTrigger);

export default function integration() {
  const integration = document.querySelector(".integration");
  if (!integration) return;
  const heading = integration.querySelector(".integration__heading");
  const row = integration.querySelector(".integration__row");
  const slider = integration.querySelector(".integration__stages-slider");

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: integration,
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
  );

  if (row) {
    tl.fromTo(
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
  }
  if (slider) {
    tl.fromTo(
      slider,
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
}
