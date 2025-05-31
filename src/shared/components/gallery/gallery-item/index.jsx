"use client";
import React, { useEffect, useRef } from "react";
import useOnScreen from "@/shared/hooks/useOnScreen";
import styles from "./GalleryItem.module.scss";

export const GalleryItem = ({
  src,
  category,
  subtitle,
  title,
  updateActiveImage,
  index,
}) => {
  const ref = useRef(null);
  const onScreen = useOnScreen(ref, 0.5);

  useEffect(() => {
    if (onScreen) {
      updateActiveImage(index);
    }
  }, [onScreen, index]);

  return (
    <article
      className={`${styles.item} gallery-item ${onScreen && styles.is_reveal}`}
      ref={ref}
    >
      <div className={styles.item__content}>
        <div className={styles.item__info}>
          <h1 className={styles.item__title}>{title}</h1>
          <h2 className={styles.item__subtitle}>{subtitle}</h2>
          <p className={styles.item__category}>{category}</p>
        </div>
        <div
          className={styles.item__image}
          style={{ backgroundImage: `url(${src})` }}
        />
      </div>
    </article>
  );
};
