import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function security() {
  const security = document.querySelector<HTMLElement>(".security");
  if (!security) return;
  const elements = Array.from(
    security.querySelectorAll<HTMLElement>(".js-security-container")
  );
  const textContent = security.querySelector(".security__text-content-inner");

  const tl = gsap.timeline({
    delay: 0.5,
    scrollTrigger: {
      trigger: security,
      start: "top center",
    },
  });

  tl.fromTo(
    textContent,
    {
      autoAlpha: 0,
      y: 80,
    },
    {
      autoAlpha: 1,
      duration: 1,
      y: 0,
      ease: "power2.out",
    }
  );

  elements.forEach((element) => {
    const circles = Array.from(
      element.querySelectorAll(".js-security-circle")
    ).reverse();
    const outline = element.querySelector(".js-security-outline");

    gsap.set(circles, {
      transformOrigin: "50% 50%",
    });

    tl.fromTo(
      circles,
      {
        autoAlpha: 0,
        y: 20,
      },
      {
        autoAlpha: 1,
        duration: 0.6,
        stagger: 0.2,
        y: 0,
      },
      0
    ).fromTo(
      outline,
      {
        autoAlpha: 0,
      },
      {
        autoAlpha: 0.22,
        duration: 0.3,
      },
      ">-=0.5"
    );
  });
}
