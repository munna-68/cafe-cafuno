import { useEffect, useState, useRef, useLayoutEffect } from "react";
import gsap from "gsap";

export default function Preloader({ onComplete }) {
  const [mounted, setMounted] = useState(true);
  const containerRef = useRef(null);
  const typeTextRef = useRef(null);
  const initialLoaderRef = useRef(null);

  useLayoutEffect(() => {
    // Lock scrolling while preloader is active
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  useEffect(() => {
    if (!mounted) return;

    // Typewriter loading
    const loadingText = "LOADING...";
    let charIndex = 0;
    const typingSpeed = 80;
    let timeoutId;
    let isActive = true;

    function runTypewriter() {
      if (!isActive) return;
      if (charIndex <= loadingText.length && typeTextRef.current) {
        typeTextRef.current.textContent = loadingText.substring(0, charIndex);
        charIndex++;
        timeoutId = setTimeout(runTypewriter, typingSpeed);
      }
    }

    // reset text on mount (fix double run in strict mode)
    if (typeTextRef.current) {
      typeTextRef.current.textContent = "";
    }

    runTypewriter();

    // Stagger grid transition
    const cols = 6;
    const rows = 6;
    gsap.set(".preloader-grid", {
      gridTemplateColumns: `repeat(${cols}, 1fr)`,
      gridTemplateRows: `repeat(${rows}, 1fr)`,
    });

    gsap.set(".preloader-block", {
      scale: 1.02,
      transformOrigin: "center center",
    });

    const initialLoadTimeline = gsap.timeline({
      delay: 1.5,
      onComplete: () => {
        setMounted(false);
        if (onComplete) onComplete();
      },
    });

    initialLoadTimeline.to(initialLoaderRef.current, {
      opacity: 0,
      duration: 0.3,
      onComplete: () => {
        if (initialLoaderRef.current) {
          initialLoaderRef.current.style.display = "none";
        }
      },
    });

    initialLoadTimeline.to(".preloader-block", {
      scale: 0,
      duration: 0.8,
      stagger: {
        grid: [rows, cols],
        from: "start",
        amount: 0.45,
      },
      ease: "power4.inOut",
    });

    return () => {
      isActive = false;
      clearTimeout(timeoutId);
      initialLoadTimeline.kill();
    };
  }, [mounted, onComplete]);

  if (!mounted) return null;

  const totalBlocks = 36;

  return (
    <div
      ref={containerRef}
      className="preloader-container"
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        pointerEvents: "none",
      }}
    >
      <div
        ref={initialLoaderRef}
        id="initial-loader"
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 60,
          backgroundColor: "#fff",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          pointerEvents: "auto",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "0.375rem" }}>
          <span
            ref={typeTextRef}
            id="typewriter-text"
            style={{
              fontFamily: "monospace",
              fontSize: "12px",
              letterSpacing: "0.5em",
              color: "#000",
              fontWeight: "bold",
              textTransform: "uppercase",
            }}
          ></span>
          <span
            style={{
              width: "0.375rem",
              height: "0.875rem",
              backgroundColor: "#000",
              animation: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
            }}
          ></span>
        </div>
      </div>

      <div
        className="preloader-grid"
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 50,
          display: "grid",
          pointerEvents: "auto",
        }}
      >
        {Array.from({ length: totalBlocks }).map((_, i) => (
          <div
            key={i}
            className="preloader-block"
            style={{ backgroundColor: "#fff", width: "100%", height: "100%" }}
          ></div>
        ))}
      </div>
    </div>
  );
}
