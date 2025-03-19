"use client";
import React from "react";
import gsap from "gsap";
import SplitText from "@/shared/utils/Split3.min";
import useOnScreen from "@/shared/hooks/useOnScreen";

import styles from "./Footer.module.scss";

export const Footer = () => {
  const ref = React.useRef(null);
  const [reveal, setReveal] = React.useState(false);
  const onScreen = useOnScreen(ref);

  React.useEffect(() => {
    if (onScreen) setReveal(onScreen);
  }, [onScreen]);

  React.useEffect(() => {
    if (reveal) {
      const split = new SplitText("#location-text", {
        type: "lines",
        linesClass: "aboutLine",
      });
      const splitParent = new SplitText("#location-text", {
        type: "lines",
        linesClass: "lineParent",
      });
      gsap.from(split.lines, {
        duration: 1,
        yPercent: 130,
        opacity: 1,
        stagger: 0.1,
      });
    }
  }, [reveal]);
  return (
    <section className={styles.footer} ref={ref}>
      <h2 className={`title ${styles.footer__title}`}>Made in</h2>

      <h1
        className={`${styles.footer__location} ${reveal && styles.is_reveal}`}
        id="location-text"
      >
        Rio de Janeiro
      </h1>
    </section>
  );
};
