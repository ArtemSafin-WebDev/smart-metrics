import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ANIMATION_START } from "./constants";
import { Flip } from "gsap/Flip";

gsap.registerPlugin(ScrollTrigger, Flip);

export default function tasks() {
  const elements = document.querySelectorAll<HTMLElement>(".tasks");

  elements.forEach((element) => {
    const heading = element.querySelector(".tasks__heading");
    const row = element.querySelector(".tasks__row");
    const btns = Array.from(
      element.querySelectorAll<HTMLElement>(".tasks__nav-link")
    );
    const items = Array.from(
      element.querySelectorAll<HTMLElement>(".tasks__tabs-item")
    );

    const wrapper = element.querySelector<HTMLElement>(".tasks__tabs-wrapper");

    const bottom = element.querySelector<HTMLElement>(".tasks__card-bottom");

    if (items.length) {
      gsap.set(items[0], {
        position: "relative",
        zIndex: 10,
      });
      btns.forEach((btn) => btn.classList.remove("active"));
      btns[0].classList.add("active");
    }

    const changeTab = (
      nextTab: HTMLElement,
      prevTab: HTMLElement | undefined | null
    ) => {
      const nextImage =
        nextTab.querySelector<HTMLImageElement>(".tasks__card-image");
      const nextTitle =
        nextTab.querySelector<HTMLElement>(".tasks__card-title");
      const nextText = nextTab.querySelector<HTMLElement>(".tasks__card-text");

      const nextNumbers = Array.from(
        nextTab.querySelectorAll<HTMLElement>(".tasks__card-features-list-item")
      );

      const tl = gsap.timeline();

      if (prevTab) {
        gsap.set(prevTab, {
          position: "absolute",
          zIndex: 5,
        });

        const prevImage =
          prevTab.querySelector<HTMLImageElement>(".tasks__card-image");
        const prevTitle =
          prevTab.querySelector<HTMLElement>(".tasks__card-title");
        const prevText =
          prevTab.querySelector<HTMLElement>(".tasks__card-text");

        const prevNumbers = Array.from(
          prevTab.querySelectorAll<HTMLElement>(
            ".tasks__card-features-list-item"
          )
        );

        tl.to(prevTab, {
          autoAlpha: 0,
          duration: 0.8,
        })
          .fromTo(
            prevImage,
            {
              autoAlpha: 1,
              scale: 1,
            },
            {
              scale: 0.7,
              duration: 0.6,
              autoAlpha: 0,
            },
            "<"
          )
          .fromTo(
            prevTitle,
            {
              autoAlpha: 1,
              y: 0,
            },
            {
              y: -20,
              duration: 0.6,
              autoAlpha: 0,
            },
            "<"
          )
          .fromTo(
            prevText,
            {
              y: 0,
              autoAlpha: 1,
            },
            {
              y: -20,
              duration: 0.6,
              autoAlpha: 0,
            },
            "<"
          )
          .fromTo(
            prevNumbers,
            {
              y: 0,
              autoAlpha: 1,
            },
            {
              y: -20,
              stagger: 0.2,
              duration: 0.4,
              autoAlpha: 0,
            },
            "<+=0.2"
          );
      }

      gsap.set(nextTab, {
        position: "relative",
        zIndex: 10,
      });

      const nextTiming = prevTab ? 0.4 : 0;

      tl.to(
        nextTab,
        {
          autoAlpha: 1,
          duration: 0.8,
        },
        nextTiming
      )
        .fromTo(
          nextImage,
          {
            scale: 0.7,
            autoAlpha: 0,
          },
          {
            scale: 1,
            duration: 0.6,
            autoAlpha: 1,
          },
          "<"
        )
        .fromTo(
          nextTitle,
          {
            y: 20,
            autoAlpha: 0,
          },
          {
            y: 0,
            duration: 0.6,
            autoAlpha: 1,
          },
          "<"
        )
        .fromTo(
          nextText,
          {
            y: 20,
            autoAlpha: 0,
          },
          {
            y: 0,
            duration: 0.6,
            autoAlpha: 1,
          },
          "<"
        )
        .fromTo(
          nextNumbers,
          {
            y: 20,
            autoAlpha: 0,
          },
          {
            y: 0,
            stagger: 0.2,
            duration: 0.4,
            autoAlpha: 1,
          },
          "<+=0.2"
        );
    };

    const setActiveTab = (index) => {
      const state = Flip.getState([bottom, wrapper]);
      btns.forEach((btn) => btn.classList.remove("active"));
      btns[index].classList.add("active");

      const prevTab = items.find((item) => item.classList.contains("active"));
      const nextTab = items[index];

      changeTab(nextTab, prevTab);

      items.forEach((item) => item.classList.remove("active"));
      items[index].classList.add("active");

      // if (noAnimation) return;

      Flip.from(state, {
        ease: "power1.inOut",
        duration: 0.4,
        onComplete: () => {
          ScrollTrigger.refresh();
        },
      });
    };

    // if (items.length) {
    //   setActiveTab(0, true);
    // }

    btns.forEach((btn, btnIndex) => {
      btn.addEventListener("click", (event) => {
        event.preventDefault();
        setActiveTab(btnIndex);
      });
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: element,
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
    )
      .fromTo(
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
      )
      .add(() => {
        if (items.length) {
          setActiveTab(0);
        }
      }, "<");
  });
}
