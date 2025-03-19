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
  const galleryRef = useRef(null);
  const counterRef = useRef(null);

  useEffect(() => {
    let sections = gsap.utils.toArray(".gallery-item-wrapper");

    console.log(sections);
    gsap.registerPlugin(ScrollTrigger);
    ScrollTrigger.create({
      trigger: galleryRef.current,
      start: "top top",
      end: () => `+=${galleryRef.current.offsetWidth}`,
      scrub: 0.5,
      pin: true,
      onUpdate: (self) => {
        gsap.to(sections, {
          x: `${-290 * self.progress}vw`,
          duration: 0.5,
          ease: "power3.out",
        });
      },
    });
  }, []);

  const handleUpdateActiveImage = (index) => {
    setActiveImage(index + 1);
  };

  return (
    <section className={styles.gallery} data-scroll-section>
      <div className={` ${styles.gallery__container}`} ref={galleryRef}>
        <div className={styles.gallery__counter} ref={counterRef}>
          <span>{activeImage}</span>
          <span className={styles.divider} />
          <span>{images.length}</span>
        </div>
        {images.map((image, index) => (
          <GalleryItem
            key={index}
            index={index}
            className={styles.item}
            {...image}
            updateActiveImage={handleUpdateActiveImage}
          />
        ))}
      </div>
    </section>
  );
};
