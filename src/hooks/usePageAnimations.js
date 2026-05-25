import { useEffect, useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function usePageAnimations(dependencies = []) {
  const location = useLocation();

  useLayoutEffect(() => {
    // 1. DOM Preparation Phase (Executes synchronously before paint to prevent flashing)

    // 1a. Prepare Hero Headings
    const heroSections = document.querySelectorAll(".hero, [class$='-header']");
    const heroHeadings = [];
    heroSections.forEach((sec) => {
      heroHeadings.push(
        ...sec.querySelectorAll("h1, h2, h3, p, .hero__title, .hero__desc"),
      );
    });

    heroHeadings.forEach((el) => {
      if (!el.dataset.split) {
        const html = el.innerHTML;
        const parts = html.split(/<br\s*\/?>/i);
        if (parts.length > 1) {
          el.innerHTML = parts
            .map(
              (part) =>
                `<span style="display:block;clip-path:polygon(0 0, 100% 0, 100% 100%, 0 100%);"><span style="display:block;transform:translateY(100%);" class="anim-line">${part}</span></span>`,
            )
            .join("");
        } else {
          el.innerHTML = `<span style="display:block;clip-path:polygon(0 0, 100% 0, 100% 100%, 0 100%);"><span style="display:block;transform:translateY(100%);" class="anim-line">${html}</span></span>`;
        }
        el.dataset.split = "true";
      }
    });

    // 1b. Prepare Scroll Images (Bottom-Up Inset Reveal, just like user's reference inset(100% 0% 0% 0%))
    const images = document.querySelectorAll("img:not(.hero__image)");
    images.forEach((img) => {
      if (img.closest(".hero, [class$='-header']")) return;

      if (!img.dataset.wrapped) {
        const wrapper = document.createElement("div");
        wrapper.className = "image-reveal-container";
        wrapper.style.overflow = "hidden";
        wrapper.style.display =
          window.getComputedStyle(img).display === "inline"
            ? "inline-block"
            : window.getComputedStyle(img).display;
        wrapper.style.position = "relative";

        if (
          img.classList.contains("bento__img--large") ||
          img.classList.contains("bento__img--small")
        ) {
          wrapper.style.width = "100%";
          wrapper.style.height = "100%";
        }

        // Inner mask that gets revealed
        const mask = document.createElement("div");
        mask.className = "image-reveal-mask";
        mask.style.width = "100%";
        mask.style.height = "100%";
        mask.style.position = "relative";
        mask.style.clipPath = "inset(100% 0% 0% 0%)"; // Start fully cropped from bottom

        img.parentNode.insertBefore(wrapper, img);
        mask.appendChild(img);
        wrapper.appendChild(mask);

        img.dataset.wrapped = "true";

        // Initial setup for the inner image scale & translation for parallax
        gsap.set(img, { yPercent: 35, scale: 1.25 });
      }
    });

    // 1c. Initial hide for Scroll Texts
    const scrollTexts = document.querySelectorAll(
      "h2, h3, h4, p, .bento__item-title, .atmosphere__title, .menu-card__name, .menu-card__desc",
    );
    scrollTexts.forEach((el) => {
      if (el.closest(".hero, [class$='-header']") || el.closest(".anim-line"))
        return;
      gsap.set(el, { opacity: 0, y: 30 });
    });
  }, [location.pathname, ...dependencies]);

  useEffect(() => {
    let timeoutId;

    // 2. Animation Execution Phase
    const executeAnimations = () => {
      // 2a. Animate Hero Headings
      const animLines = document.querySelectorAll(
        '.hero .anim-line, [class$="-header"] .anim-line',
      );

      if (animLines.length > 0) {
        gsap.to(animLines, {
          y: "0%",
          duration: 0.9,
          stagger: 0.1,
          ease: "power3.out",
        });
      }

      // Animate Hero Image (if any)
      const heroImage = document.querySelector(".hero__image-wrap");
      if (heroImage) {
        gsap.fromTo(
          heroImage,
          { scale: 1.15, opacity: 0 },
          { scale: 1, opacity: 1, duration: 1.2, ease: "power3.out" },
        );
      }

      // 2b. Scroll-triggered text below fold
      const scrollTexts = Array.from(
        document.querySelectorAll(
          "h2, h3, h4, p, .bento__item-title, .atmosphere__title, .menu-card__name, .menu-card__desc",
        )
      ).filter(
        (el) => !(el.closest(".hero, [class$='-header']") || el.closest(".anim-line"))
      );

      ScrollTrigger.batch(scrollTexts, {
        start: "top 85%",
        onEnter: (batch) => {
          gsap.to(batch, {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power3.out",
            stagger: 0.15,
            overwrite: true,
          });
        },
      });

      // 2c. Scroll-triggered image reveal
      const containers = Array.from(
        document.querySelectorAll(".image-reveal-container")
      );

      ScrollTrigger.batch(containers, {
        start: "top 85%",
        onEnter: (batch) => {
          batch.forEach((container, i) => {
            const mask = container.querySelector(".image-reveal-mask");
            const image = container.querySelector("img");

            if (!mask || !image) return;

            const tl = gsap.timeline({
              delay: i * 0.15, // stagger effect for images entering together
            });

            // Lift/expand the outer crop mask from bottom-to-top
            tl.to(mask, {
              clipPath: "inset(0% 0% 0% 0%)",
              duration: 1.6,
              ease: "power4.inOut",
            });

            // Slide up and settle the inner image smoothly
            tl.to(
              image,
              {
                yPercent: 0,
                scale: 1,
                duration: 1.8,
                ease: "power3.out",
              },
              "-=1.4",
            );
          });
        },
      });
    };

    if (window.isPreloaderComplete) {
      // Ensure GSAP layout checks happen after mount
      timeoutId = setTimeout(executeAnimations, 100);
    } else {
      const onPreloaderComplete = () => {
        timeoutId = setTimeout(executeAnimations, 100);
      };
      window.addEventListener("preloaderComplete", onPreloaderComplete);
      return () => {
        window.removeEventListener("preloaderComplete", onPreloaderComplete);
        clearTimeout(timeoutId);
      };
    }

    return () => {
      clearTimeout(timeoutId);
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [location.pathname, ...dependencies]);
}
