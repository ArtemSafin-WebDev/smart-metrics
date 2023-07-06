import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function about() {
  const about = document.querySelector(".about");
  if (!about) return;
  const content = about.querySelector(".about__content");

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: about,
      start: "top center",
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
