import { forwardRef, useImperativeHandle, useRef } from "react";
import gsap from "gsap";

const GRID_ROWS = 6;
const GRID_COLS = 6;
const BLOCK_COUNT = GRID_ROWS * GRID_COLS;

const STAGGER_CONFIG = {
  grid: [GRID_ROWS, GRID_COLS],
  from: "start",
  amount: 0.4,
};

const RouteTransition = forwardRef(function RouteTransition(
  { reducedMotion = false },
  ref,
) {
  const overlayRef = useRef(null);
  const reducedMotionRef = useRef(reducedMotion);
  reducedMotionRef.current = reducedMotion;

  const getBlocks = () =>
    overlayRef.current?.querySelectorAll("[data-route-block]") ?? [];

  useImperativeHandle(
    ref,
    () => ({
      cover({ onComplete } = {}) {
        const overlay = overlayRef.current;
        const blocks = getBlocks();
        if (!overlay) {
          onComplete?.();
          return;
        }

        gsap.killTweensOf([overlay, blocks]);
        gsap.set(overlay, { autoAlpha: 1, display: "" });
        gsap.set(blocks, { scale: 0, transformOrigin: "center center" });

        const tl = gsap.timeline({
          defaults: {
            ease: reducedMotionRef.current ? "none" : "power3.inOut",
          },
          onComplete,
        });

        tl.to(blocks, {
          scale: 1.02,
          duration: reducedMotionRef.current ? 0.16 : 0.6,
          stagger: STAGGER_CONFIG,
          transformOrigin: "center center",
        });
      },

      reveal({ onComplete } = {}) {
        const overlay = overlayRef.current;
        const blocks = getBlocks();
        if (!overlay) {
          onComplete?.();
          return;
        }

        gsap.killTweensOf([overlay, blocks]);
        gsap.set(overlay, { autoAlpha: 1, display: "" });

        const tl = gsap.timeline({
          defaults: {
            ease: reducedMotionRef.current ? "none" : "power3.inOut",
          },
          onComplete: () => {
            gsap.set(overlay, { display: "none" });
            onComplete?.();
          },
        });

        tl.to(blocks, {
          scale: 0,
          duration: reducedMotionRef.current ? 0.16 : 0.6,
          stagger: STAGGER_CONFIG,
          transformOrigin: "center center",
        });
      },

      abort() {
        const overlay = overlayRef.current;
        const blocks = getBlocks();
        gsap.killTweensOf([overlay, blocks]);
      },
    }),
    [],
  );

  return (
    <aside ref={overlayRef} className="route-transition" aria-hidden="true">
      <div className="route-transition__grid" aria-hidden="true">
        {Array.from({ length: BLOCK_COUNT }, (_, i) => (
          <span key={i} data-route-block className="route-transition__block" />
        ))}
      </div>
    </aside>
  );
});

export default RouteTransition;
