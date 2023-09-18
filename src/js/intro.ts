import gsap from "gsap";
import DrawSVGPlugin from "./vendor/gsap/DrawSVGPlugin";

gsap.registerPlugin(DrawSVGPlugin);

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

  const chart = intro.querySelector<SVGElement>(".chart");
  const barOne = intro.querySelector(".bar-one");
  const barOneItems = intro.querySelector(".bar-one-items");
  const barTwo = intro.querySelector(".bar-two");
  const barTwoItems = intro.querySelector(".bar-two-items");
  const barThree = intro.querySelector(".bar-three");
  const barThreeItems = intro.querySelector(".bar-three-items");
  const barFour = intro.querySelector(".bar-four");
  const barFourItems = intro.querySelector(".bar-four-items");
  const path = intro.querySelector(".path path");
  const circles = Array.from(intro.querySelectorAll(".circles circle"));

  circles.forEach((circle) =>
    gsap.set(circle, {
      autoAlpha: 0,
    })
  );

  gsap.set(barOne, {
    transformOrigin: "center bottom",
    scaleY: 0,
  });
  gsap.set(barOneItems, {
    autoAlpha: 0,
  });
  gsap.set(barTwo, {
    transformOrigin: "center bottom",
    scaleY: 0,
  });
  gsap.set(barTwoItems, {
    autoAlpha: 0,
  });
  gsap.set(barThree, {
    transformOrigin: "center bottom",
    scaleY: 0,
  });
  gsap.set(barThreeItems, {
    autoAlpha: 0,
  });
  gsap.set(barFour, {
    transformOrigin: "center bottom",
    scaleY: 0,
  });
  gsap.set(barFourItems, {
    autoAlpha: 0,
  });

  console.log("CHART", chart);

  gsap.set(path, {
    drawSVG: "0% 0%",
  });

  function animateChart() {
    const tl = gsap.timeline();

    console.log("Bar one", barOne);

    tl.fromTo(
      path,
      { drawSVG: "0% 0%" },
      {
        duration: 1,
        drawSVG: "0% 100%",
        ease: "none",
      }
    )
      .fromTo(
        circles[0],
        {
          autoAlpha: 0,
        },
        {
          autoAlpha: 1,
          duration: 0.2,
        },
        0
      )
      .fromTo(
        circles[1],
        {
          autoAlpha: 0,
        },
        {
          autoAlpha: 1,
          duration: 0.2,
        },
        0.2
      )
      .fromTo(
        circles[2],
        {
          autoAlpha: 0,
        },
        {
          autoAlpha: 1,
          duration: 0.2,
        },
        0.4
      )
      .fromTo(
        circles[3],
        {
          autoAlpha: 0,
        },
        {
          autoAlpha: 1,
          duration: 0.2,
        },
        0.9
      );

    tl.fromTo(
      barOne,
      {
        scaleY: 0,
      },
      {
        scaleY: 1,
        duration: 0.7,
        ease: "power2.out",
      },
      0
    ).fromTo(
      barOneItems,
      {
        autoAlpha: 0,
      },
      {
        autoAlpha: 1,
        duration: 0.5,
      },
      ">-=0.3"
    );
    tl.fromTo(
      barTwo,
      {
        scaleY: 0,
      },
      {
        scaleY: 1,
        duration: 0.7,
        ease: "power2.out",
      },
      0
    ).fromTo(
      barTwoItems,
      {
        autoAlpha: 0,
      },
      {
        autoAlpha: 1,
        duration: 0.5,
      },
      ">-=0.3"
    );
    tl.fromTo(
      barThree,
      {
        scaleY: 0,
      },
      {
        scaleY: 1,
        duration: 0.7,
        ease: "power2.out",
      },
      0
    ).fromTo(
      barThreeItems,
      {
        autoAlpha: 0,
      },
      {
        autoAlpha: 1,
        duration: 0.5,
      },
      ">-=0.3"
    );
    tl.fromTo(
      barFour,
      {
        scaleY: 0,
      },
      {
        scaleY: 1,
        duration: 0.7,
        ease: "power2.out",
      },
      0
    ).fromTo(
      barFourItems,
      {
        autoAlpha: 0,
      },
      {
        autoAlpha: 1,
        duration: 0.5,
      },
      ">-=0.3"
    );
  }

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
    .add(() => {
      animateChart();
    }, "<+=0.5")
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
