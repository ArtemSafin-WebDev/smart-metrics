import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ANIMATION_START } from "./constants";

gsap.registerPlugin(ScrollTrigger);

export default function aboutCompany() {
  const about = document.querySelector(".about-company");
  if (!about) return;
  const content = about.querySelector(".about-company__content");

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: about,
      start: ANIMATION_START,
    },
  });
  tl.fromTo(
    content,
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
    }
  );
}
