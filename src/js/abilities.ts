import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ANIMATION_START } from "./constants";

gsap.registerPlugin(ScrollTrigger);

export default function abilities() {
  const elements = Array.from(
    document.querySelectorAll<HTMLElement>(".abilities")
  );
  const OFFSET = 30;
  const pageHeader = document.querySelector<HTMLElement>(".page-header");
  if (!pageHeader) return;
  elements.forEach((element) => {
    const panel = element.querySelector<HTMLElement>(".abilities__panel");

    const cards = Array.from<HTMLElement>(
      element.querySelectorAll(".abilities__card")
    );
    const links = Array.from(
      element.querySelectorAll<HTMLLinkElement>(".abilities__nav-link")
    );
    const list = element.querySelector(".abilities__list");
    if (!panel || !list || !cards?.length) return;
    let mm = gsap.matchMedia();

    mm.add("(min-width: 641px)", () => {
      ScrollTrigger.create({
        trigger: element,
        start: () => `top top+=${pageHeader.offsetHeight + 10}`,
        end: () =>
          `top+=${
            element.offsetHeight -
            panel.offsetHeight -
            pageHeader.offsetHeight -
            10
          } top`,
        pin: panel,
        pinSpacing: false,
        markers: false,
      });

      cards.forEach((card, cardIndex) => {
        ScrollTrigger.create({
          trigger: card,
          start: () => `top top+=${pageHeader.offsetHeight + OFFSET}`,
          markers: false,
          end: () =>
            `top+=${
              card.offsetHeight +
              parseFloat(getComputedStyle(list).getPropertyValue("gap"))
            } top+=${pageHeader.offsetHeight + OFFSET}`,
          onToggle: (state) => {
            if (state.isActive) {
              card.classList.add("hovered");
              links[cardIndex].classList.add("active");
            } else {
              card.classList.remove("hovered");
              links[cardIndex].classList.remove("active");
            }
          },
        });
      });
    });

    mm.add("(max-width: 640px)", () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: element,
          start: ANIMATION_START,
        },
      });
      tl.fromTo(
        panel,
        {
          autoAlpha: 0,
          y: 60,
        },
        {
          duration: 1,
          autoAlpha: 1,
          y: 0,
          ease: "power1.out",
          clearProps: "all",
        }
      ).fromTo(
        list,
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
    });
  });
}
