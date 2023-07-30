import gsap from "gsap";

export default function aboutHeader() {
  const aboutHeader = document.querySelector<HTMLElement>(".about-header");
  if (!aboutHeader) return;
  const heading = aboutHeader.querySelector<HTMLHeadingElement>(
    ".about-header__heading"
  );
  const text = aboutHeader.querySelector<HTMLDivElement>(".about-header__text");
  const link = aboutHeader.querySelector<HTMLLinkElement>(
    ".about-header__link"
  );
  const title = aboutHeader.querySelector<HTMLLinkElement>(
    ".about-header__title"
  );
  const firstImageFirstCol = aboutHeader.querySelector<HTMLElement>(
    ".about-header__images-col:nth-child(1) .about-header__images-item:nth-child(1)"
  );
  const secondImageFirstCol = aboutHeader.querySelector<HTMLElement>(
    ".about-header__images-col:nth-child(1) .about-header__images-item:nth-child(2)"
  );

  const firstImageSecondCol = aboutHeader.querySelector<HTMLElement>(
    ".about-header__images-col:nth-child(2) .about-header__images-item:nth-child(1)"
  );
  const secondImageSecondCol = aboutHeader.querySelector<HTMLElement>(
    ".about-header__images-col:nth-child(2) .about-header__images-item:nth-child(2)"
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
      title,
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
