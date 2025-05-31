"use client";
import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { GalleryItem } from "./gallery-item";
import styles from "./Gallery.module.scss";

const images = [
  {
    src: "https://images.unsplash.com/photo-1566204773863-cf63e6d4ab88?auto=format&fit=crop&w=1345&q=100",
    title: "Dracaena Trifasciata",
    subtitle: "Live the Beauty",
    category: "Shooting / Adv.Campaing",
  },
  {
    src: "https://images.unsplash.com/photo-1558603668-6570496b66f8?auto=format&fit=crop&w=1300&q=100",
    title: "Cereus Penuvianus",
    subtitle: "Live the Beauty",
    category: "Shooting / Adv.Campaing",
  },
  {
    src: "https://images.unsplash.com/photo-1567225557594-88d73e55f2cb?auto=format&fit=crop&w=934&q=100",
    title: "Calliope",
    subtitle: "Live the Beauty",
    category: "Shooting / Adv.Campaing",
  },
  {
    src: "https://images.unsplash.com/photo-1611145367651-6303b46e4040?auto=format&fit=crop&w=2006&q=100",
    title: "Golden Pothos",
    subtitle: "Living Room",
    category: "Shooting / Adv.Campaing",
  },
];
export const Gallery = () => {
  const [activeImage, setActiveImage] = useState(1);
  const sectionRef = useRef(null);
  const galleryRef = useRef(null);
  const horizontalRef = useRef(null);
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const sections = gsap.utils.toArray(`.gallery-item`);

    let scrollTween = gsap.to(sections, {
      xPercent: -100 * (sections.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: sectionRef.current,

        start: "top top",
        pin: true,
        scrub: 0.5,
        snap: 1 / (sections.length - 1),
        end: () => `+=${horizontalRef.current.offsetWidth}`,
      },
    });

    return () => {
      scrollTween.kill();
    };
  }, []);

  const handleUpdateActiveImage = (index) => {
    setActiveImage(index + 1);
  };
  return (
    <section className={styles.gallery} data-scroll-section ref={sectionRef}>
      <div className={styles.gallery__container} ref={galleryRef}>
        <div className={styles.gallery__counter}>
          <span>{activeImage}</span>
          <span className={styles.divider} />
          <span>{images.length}</span>
        </div>
        <div className={styles.gallery__horizontal} ref={horizontalRef}>
          {images.map((image, index) => (
            <GalleryItem
              key={index}
              index={index}
              {...image}
              updateActiveImage={handleUpdateActiveImage}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
