import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useEffect } from "react";
import LocomotiveScroll from "locomotive-scroll";

gsap.registerPlugin(ScrollTrigger);

export default function useLocoScroll(start) {
  useEffect(() => {
    if (!start) return;

    let locoScroll;

    const initScroll = () => {
      const scrollEl = document.querySelector("#main-container");

      locoScroll = new LocomotiveScroll({
        el: scrollEl,
        smooth: true,
        multiplier: 1,
        lerp: 0.1,
        class: "is-reveal",
        direction: "horizontal", // Включаем горизонтальный скролл
        gestureDirection: "both", // Поддержка тач-жестов
      });

      // Используем addEventListener вместо .on()
      scrollEl.addEventListener("scroll", (args) => {
        ScrollTrigger.update(args);
      });

      ScrollTrigger.scrollerProxy(scrollEl, {
        scrollTop(value) {
          return arguments.length
            ? locoScroll.scrollTo(value, {
                duration: 0,
                disableLerp: true,
              })
            : locoScroll.scroll.instance.scroll.y;
        },
        scrollLeft(value) {
          return arguments.length
            ? locoScroll.scrollTo(value, {
                duration: 0,
                disableLerp: true,
              })
            : locoScroll.scroll.instance.scroll.x;
        },
        getBoundingClientRect() {
          return {
            top: 0,
            left: 0,
            width: window.innerWidth,
            height: window.innerHeight,
          };
        },
        pinType: scrollEl.style.transform ? "transform" : "fixed",
      });

      ScrollTrigger.addEventListener("refresh", () => locoScroll.resize());
      ScrollTrigger.refresh();
    };

    initScroll();

    return () => {
      if (locoScroll) {
        ScrollTrigger.removeEventListener("refresh", locoScroll.update);
        locoScroll.destroy();
        console.log("Locomotive Scroll уничтожен");
      }
    };
  }, [start]);
}
