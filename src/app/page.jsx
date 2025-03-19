"use client";
import React from "react";
import {
  About,
  Feature,
  Footer,
  Gallery,
  Hero,
  Loader,
} from "@/shared/components";

export default function Home() {
  const [preloader, setPreload] = React.useState(true);
  const [timer, setTimer] = React.useState(3);
  const timerRef = React.useRef(null);
  React.useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll();
    })();
    timerRef.current = setInterval(() => {
      setTimer((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    return () => {
      clearInterval(timerRef.current);
      setPreload(false);
    };
  }, []);

  React.useEffect(() => {
    if (timer === 0) {
      clearInterval(timerRef.current);
      setPreload(false);
    }
  }, [timer]);
  return (
    <>
      {preloader ? (
        <Loader />
      ) : (
        <main data-scroll-container className="main-container">
          <Hero />
          <Feature />
          <About />
          <Gallery />
          <Footer />
        </main>
      )}
    </>
  );
}
