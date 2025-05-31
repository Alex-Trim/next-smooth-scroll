"use client";
import React from "react";
import gsap from "gsap";
import SplitText from "@/shared/utils/Split3.min";
import useOnScreen from "@/shared/hooks/useOnScreen";

import styles from "./About.module.scss";

export const About = () => {
  const ref = React.useRef(null);
  const [reveal, setReveal] = React.useState(false);
  const onScreen = useOnScreen(ref);

  React.useEffect(() => {
    if (onScreen) setReveal(onScreen);
  }, [onScreen]);

  React.useEffect(() => {
    if (reveal) {
      const split = new SplitText("#about-description", {
        type: "lines",
        linesClass: "aboutLine",
      });

      gsap.from(split.lines, {
        duration: 2,
        y: -100,
        opacity: 0,
        stagger: 0.1,
        ease: "power4.out",
        onComplete: () => {
          gsap.set(split.lines, { clearProps: "all" });
        },
      });
    }
  }, [reveal]);
  return (
    <section
      className={`main-container ${styles.about} ${reveal && styles.is_reveal}`}
      ref={ref}
    >
      <h2 className={`title ${styles.about__title}`}>about</h2>
      <p
        className={`${styles.about__description} ${reveal && styles.is_reveal}`}
        id="about-description"
      >
        Flirty Flowers is a blog about flowers and the floral designers who make
        them into art. Creativity and the art of ‘making’ require dialogue. The
        full purpose of the Flirty Flowers blog is to encourage and inspire. We
        value art, we value insight, and we value opinion.
      </p>
    </section>
  );
};
