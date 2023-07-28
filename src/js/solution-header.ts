import gsap from "gsap";

export default function solutionHeader() {
  const solutionHeader =
    document.querySelector<HTMLElement>(".solution-header");
  if (!solutionHeader) return;
  const heading = solutionHeader.querySelector<HTMLHeadingElement>(
    ".solution-header__heading"
  );
  const text = solutionHeader.querySelector<HTMLDivElement>(
    ".solution-header__text"
  );
  const link = solutionHeader.querySelector<HTMLLinkElement>(
    ".solution-header__link"
  );
  const backLink = solutionHeader.querySelector<HTMLLinkElement>(
    ".solution-header__back-link"
  );
  const firstImageFirstCol = solutionHeader.querySelector<HTMLElement>(
    ".solution-header__images-col:nth-child(1) .solution-header__images-item:nth-child(1)"
  );
  const secondImageFirstCol = solutionHeader.querySelector<HTMLElement>(
    ".solution-header__images-col:nth-child(1) .solution-header__images-item:nth-child(2)"
  );

  const firstImageSecondCol = solutionHeader.querySelector<HTMLElement>(
    ".solution-header__images-col:nth-child(2) .solution-header__images-item:nth-child(1)"
  );
  const secondImageSecondCol = solutionHeader.querySelector<HTMLElement>(
    ".solution-header__images-col:nth-child(2) .solution-header__images-item:nth-child(2)"
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
      backLink,
      { autoAlpha: 0 },
      { autoAlpha: 1, duration: 2, ease: "power3.out" },
      0
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
