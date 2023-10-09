import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ANIMATION_DELAY, ANIMATION_START } from "./constants";
import axios from "axios";

gsap.registerPlugin(ScrollTrigger);

export default function documentation() {
  const documentation = document.querySelector(".documentation");
  if (!documentation) return;

  const heading = documentation.querySelector(".documentation__heading");
  const nav = documentation.querySelector(".documentation__nav");
  const listItems = Array.from(
    documentation.querySelectorAll(".documentation__list-item")
  );
  const tl = gsap.timeline({
    delay: ANIMATION_DELAY,
    scrollTrigger: {
      trigger: documentation,
      start: ANIMATION_START,
    },
  });

  tl.fromTo(
    heading,
    {
      autoAlpha: 0,
      y: 60,
    },
    { duration: 1, autoAlpha: 1, y: 0, ease: "power1.out" }
  )
    .fromTo(
      nav,
      {
        autoAlpha: 0,
        y: 60,
      },
      { duration: 1, autoAlpha: 1, y: 0, ease: "power1.out" },
      "<+=0.5"
    )
    .fromTo(
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
      },
      ">-=0.5"
    );

  const links = Array.from(
    document.querySelectorAll<HTMLLinkElement>(".documentation__nav-link")
  );

  const list = document.querySelector<HTMLUListElement>(".documentation__list");
  const controller = new AbortController();
  links.forEach((link) =>
    link.addEventListener("click", async (event) => {
      event.preventDefault();
      const href = link.href;

      try {
        const response = await axios.get(href, {
          signal: controller.signal,
        });

        const data = response.data;

        const parser = new DOMParser();
        const nextPageHtml = parser.parseFromString(data, "text/html");
        const nextResults = Array.from(
          nextPageHtml.querySelectorAll<HTMLLIElement>(
            ".documentation__list-item"
          )
        );
        links.forEach((link) => link.classList.remove("active"));
        link.classList.add("active");

        if (!list) return;
        const currentListItems = list?.querySelectorAll<HTMLLIElement>(
          ".documentation__list-item"
        );

        window.history.replaceState({}, "", href);

        const tl = gsap.timeline();

        tl.to(Array.from(currentListItems), {
          autoAlpha: 0,
          duration: 0.2,
        })
          .add(() => {
            list.innerHTML = "";
            list.append(...nextResults);
          })
          .fromTo(
            nextResults,
            {
              autoAlpha: 0,
              y: 30,
            },
            {
              autoAlpha: 1,
              duration: 0.4,
              y: 0,
              ease: "power1.out",
            }
          )
          .add(() => {
            ScrollTrigger.refresh();
          });
      } catch (err) {
        console.error(err);
        return;
      }
    })
  );
}
