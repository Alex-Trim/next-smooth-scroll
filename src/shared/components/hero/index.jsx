"use client";
import React from "react";
import { Navbar } from "..";
import gsap from "gsap";
import SplitText from "@/shared/utils/Split3.min";

import styles from "./Hero.module.scss";

export const Hero = () => {
  React.useLayoutEffect(() => {
    const split = new SplitText("#hero-text", {
      type: "lines",
      linesClass: "lineChildren",
    });
    const splitParent = new SplitText("#hero-text", {
      type: "lines",
      linesClass: "lineParent",
    });
    gsap.from(split.lines, {
      duration: 1,
      yPercent: 130,
      opacity: 1,
      stagger: 0.1,
    });
  }, []);

  return (
    <section className={styles.hero}>
      <Navbar />
      <h1 className={styles.hero__text} id="hero-text">
        Art Objects
      </h1>
    </section>
  );
};
