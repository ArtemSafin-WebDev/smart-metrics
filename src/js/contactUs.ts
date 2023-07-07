import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ANIMATION_START } from "./constants";

gsap.registerPlugin(ScrollTrigger);

export default function contactUs() {
  const contactUs = document.querySelector(".contact-us");
  if (!contactUs) return;

  const content = contactUs.querySelector(".contact-us__content");

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: contactUs,
      start: ANIMATION_START,
    },
  });

  tl.fromTo(
    content,
    {
      autoAlpha: 0,
    },
    { duration: 1, autoAlpha: 1, y: 0, ease: "power1.out" }
  );
}
