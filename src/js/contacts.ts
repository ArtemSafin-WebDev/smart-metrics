import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ANIMATION_START } from "./constants";

gsap.registerPlugin(ScrollTrigger);

export default function contacts() {
  const contacts = document.querySelector(".contacts");
  if (!contacts) return;
  const heading = contacts.querySelector(".contacts__heading");
  const mapWrapper = contacts.querySelector(".contacts__map-wrapper");

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: contacts,
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
  ).fromTo(
    mapWrapper,
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
