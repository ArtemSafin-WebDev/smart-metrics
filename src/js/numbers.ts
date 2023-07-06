import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function numbers() {
  const numbers = document.querySelector(".numbers");
  if (!numbers) return;

  const heading = numbers.querySelector(".numbers__heading");
  const listItems = Array.from(numbers.querySelectorAll(".numbers__grid > *"));
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: numbers,
      start: "top center",
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
    }
  );
}
