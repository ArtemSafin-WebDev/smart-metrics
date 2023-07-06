import gsap from "gsap";

export default function intro() {
  const intro = document.querySelector<HTMLElement>(".intro");
  if (!intro) return;
  const heading = intro.querySelector<HTMLHeadingElement>(".intro__heading");
  const text = intro.querySelector<HTMLDivElement>(".intro__text");
  const link = intro.querySelector<HTMLLinkElement>(".intro__link");
  const firstImageFirstCol = intro.querySelector<HTMLElement>(
    ".intro__images-col:nth-child(1) .intro__images-item:nth-child(1)"
  );
  const secondImageFirstCol = intro.querySelector<HTMLElement>(
    ".intro__images-col:nth-child(1) .intro__images-item:nth-child(2)"
  );

  const firstImageSecondCol = intro.querySelector<HTMLElement>(
    ".intro__images-col:nth-child(2) .intro__images-item:nth-child(1)"
  );
  const secondImageSecondCol = intro.querySelector<HTMLElement>(
    ".intro__images-col:nth-child(2) .intro__images-item:nth-child(2)"
  );

  const tl = gsap.timeline({
    delay: 1,
  });

  tl.fromTo(
    heading,
    { autoAlpha: 0 },
    { autoAlpha: 1, duration: 2, ease: "power3.out" }
  )
    .fromTo(
      text,
      { autoAlpha: 0 },
      { autoAlpha: 1, duration: 2, ease: "power3.out" },
      0
    )
    .fromTo(
      firstImageFirstCol,
      {
        autoAlpha: 0,
        y: 30,
      },
      {
        autoAlpha: 1,
        duration: 2,
        y: 0,
        ease: "power3.out",
      },
      "<"
    )
    .fromTo(
      secondImageSecondCol,
      {
        autoAlpha: 0,
        y: 30,
      },
      {
        autoAlpha: 1,
        duration: 2,
        y: 0,
        ease: "power3.out",
      },
      "<"
    )
    .fromTo(
      secondImageFirstCol,
      {
        autoAlpha: 0,
        y: 30,
      },
      {
        autoAlpha: 1,
        duration: 2,
        y: 0,
        ease: "power3.out",
      },
      "-=1.5"
    )
    .fromTo(
      firstImageSecondCol,
      {
        autoAlpha: 0,
        y: 30,
      },
      {
        autoAlpha: 1,
        duration: 2,
        y: 0,
        ease: "power3.out",
      },
      "<"
    )
    .fromTo(
      link,
      {
        autoAlpha: 0,
        y: 15,
      },
      {
        autoAlpha: 1,
        duration: 2,
        y: 0,
        ease: "power3.out",
      },
      "<"
    );
}
