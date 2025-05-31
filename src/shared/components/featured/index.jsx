"use client";
import React from "react";
import Image from "next/image";
import useOnScreen from "@/shared/hooks/useOnScreen";

import styles from "./Feature.module.scss";

export const Feature = () => {
  const ref = React.useRef(null);
  const [reveal, setReveal] = React.useState(false);
  const onScreen = useOnScreen(ref);
  React.useEffect(() => {
    if (onScreen) setReveal(onScreen);
  }, [onScreen]);

  return (
    <section
      className={`main-container ${styles.featured}`}
      ref={ref}
      data-scroll-section
    >
      <article
        className={`${styles.featured__item} ${styles.featured__item_row}`}
      >
        <h3 className={styles.featured__text}>green</h3>
        <div className={`${styles.image_wraper} ${reveal && styles.is_reveal}`}>
          <Image
            priority
            src="/image/photo-1598838073192-05c942ede858.webp"
            alt="Nature photo"
            fill
          />
        </div>
      </article>
      <article
        className={`${styles.featured__item} ${styles.featured__item_column}`}
      >
        <h3 className={styles.featured__text}>lily</h3>
        <div className={`${styles.image_wraper} ${reveal && styles.is_reveal}`}>
          <Image
            priority
            src="/image/photo-1552248524-10d9a7e4841c.webp"
            alt="Nature photo"
            fill
          />
        </div>
      </article>
    </section>
  );
};
