import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function demo() {
  const elements = Array.from(
    document.querySelectorAll<HTMLDivElement>(".js-demo-sidebar")
  );
  const pageHeader = document.querySelector<HTMLElement>(".page-header");
  const OFFSET = 20;

  elements.forEach((element) => {
    const demo = element.querySelector<HTMLDivElement>(".js-demo");
    if (!demo || !pageHeader) return;
    let mm = gsap.matchMedia();

    mm.add("(min-width: 641px)", () => {
      ScrollTrigger.create({
        trigger: element,
        start: () => `top top+=${pageHeader.offsetHeight + OFFSET}`,
        end: () =>
          `top+=${
            element.offsetHeight -
            demo.offsetHeight -
            pageHeader.offsetHeight -
            OFFSET
          } top`,
        pin: demo,
        pinSpacing: false,
        markers: false,
      });
    });
  });
}
