import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ANIMATION_START } from "./constants";

gsap.registerPlugin(ScrollTrigger);

export default function tasks() {
  const tasks = document.querySelector(".tasks");
  if (!tasks) return;
  const heading = tasks.querySelector(".tasks__heading");
  const row = tasks.querySelector(".tasks__row");

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: tasks,
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
