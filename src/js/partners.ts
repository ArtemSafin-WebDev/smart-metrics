import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function partners() {
  const partners = document.querySelector(".partners");
  if (!partners) return;
  const heading = partners.querySelector(".partners__heading");
  const slider = partners.querySelector(".partners__slider");

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: partners,
      start: "top center",
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
  ).fromTo(
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
