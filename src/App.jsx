import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import gsap from "gsap";

import CinematicTransition from "./components/CinematicTransition";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Reserve from "./pages/Reserve";
import Location from "./pages/Location";
import Atmosphere from "./pages/Atmosphere";
import {
  getBootAssets,
  getIdleAssets,
  getRouteCopy,
  getRouteKey,
  getRouteMotion,
} from "./lib/siteMotion";
import {
  cancelIdleTask,
  preloadImages,
  scheduleIdleTask,
} from "./lib/preloadImages";

const GRID_ROWS = 6;
const GRID_COLS = 6;
const GRID_STAGGER = {
  grid: [GRID_ROWS, GRID_COLS],
  from: "start",
  amount: 0.45,
};

const SHELL_REVEAL_DURATION = 0.34;

function getRoutePathKey(pathname, search) {
  return getRouteKey(pathname, search);
}

export default function App() {
  const location = useLocation();
  const navigate = useNavigate();

  const shellRef = useRef(null);
  const transitionRef = useRef(null);
  const bootTimelineRef = useRef(null);
  const routeTimelineRef = useRef(null);
  const idlePrefetchRef = useRef(null);
  const pendingRouteRef = useRef(null);
  const activeRouteRef = useRef(
    getRoutePathKey(location.pathname, location.search),
  );
  const initialPathnameRef = useRef(location.pathname);
  const initialSearchRef = useRef(location.search);
  const bootReadyRef = useRef(false);
  const transitionBusyRef = useRef(false);
  const reducedMotionRef = useRef(false);
  const shellReadyRef = useRef(false);

  const getBlocks = useCallback(
    () =>
      transitionRef.current?.querySelectorAll("[data-transition-block]") ?? [],
    [],
  );

  const revealShell = useCallback((onComplete) => {
    const shell = shellRef.current;

    if (!shell) {
      if (typeof onComplete === "function") {
        onComplete();
      }

      return;
    }

    gsap.to(shell, {
      opacity: 1,
      y: 0,
      scale: 1,
      filter: "blur(0px)",
      duration: reducedMotionRef.current ? 0.16 : SHELL_REVEAL_DURATION,
      ease: "power2.out",
      onComplete,
    });
  }, []);

  const [shellReady, setShellReady] = useState(false);
  const [transitionState, setTransitionState] = useState({
    active: true,
    mode: "boot",
    copy: getRouteCopy(location.pathname),
  });

  useEffect(() => {
    shellReadyRef.current = shellReady;
  }, [shellReady]);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");

    const updatePreference = () => {
      reducedMotionRef.current = media.matches;
    };

    updatePreference();

    if (typeof media.addEventListener === "function") {
      media.addEventListener("change", updatePreference);

      return () => media.removeEventListener("change", updatePreference);
    }

    media.addListener(updatePreference);

    return () => media.removeListener(updatePreference);
  }, []);

  useEffect(() => {
    const previousScrollRestoration = window.history.scrollRestoration;
    window.history.scrollRestoration = "manual";

    return () => {
      window.history.scrollRestoration = previousScrollRestoration;
    };
  }, []);

  useEffect(() => {
    document.body.classList.toggle("cafuno-is-booting", !shellReady);
    document.body.classList.toggle(
      "cafuno-is-transitioning",
      shellReady && transitionState.active,
    );
    document.body.style.overflow =
      shellReady && !transitionState.active ? "" : "hidden";

    return () => {
      document.body.classList.remove("cafuno-is-booting");
      document.body.classList.remove("cafuno-is-transitioning");
      document.body.style.overflow = "";
    };
  }, [shellReady, transitionState.active]);

  const completeTransition = useCallback(() => {
    transitionBusyRef.current = false;
    pendingRouteRef.current = null;
    routeTimelineRef.current = null;
    document.body.classList.remove("cafuno-is-transitioning");
    setTransitionState((current) => ({
      ...current,
      active: false,
      mode: "idle",
    }));
  }, []);

  const playReveal = useCallback(
    (nextCopy) => {
      transitionBusyRef.current = true;

      const overlay = transitionRef.current;
      const shell = shellRef.current;
      const blocks = getBlocks();

      if (!overlay || !shell) {
        completeTransition();
        return;
      }

      routeTimelineRef.current?.kill();
      setTransitionState({
        active: true,
        mode: "route",
        copy: nextCopy,
      });

      gsap.set(shell, {
        opacity: 1,
        y: 24,
        scale: 1.02,
        filter: "blur(12px)",
      });

      routeTimelineRef.current = gsap.timeline({
        defaults: {
          ease: reducedMotionRef.current ? "none" : "power4.out",
        },
        onComplete: () => {
          gsap.set(overlay, { display: "none" });
          revealShell(completeTransition);
        },
      });

      routeTimelineRef.current
        .to(
          blocks,
          {
            scale: 0,
            duration: reducedMotionRef.current ? 0.16 : 0.74,
            stagger: GRID_STAGGER,
            transformOrigin: "center center",
          },
          0,
        )
        .to(
          overlay,
          {
            autoAlpha: 0,
            duration: reducedMotionRef.current ? 0.08 : 0.28,
          },
          reducedMotionRef.current ? 0.58 : 0.88,
        );
    },
    [completeTransition, getBlocks, revealShell],
  );

  const playCoverAndNavigate = useCallback(
    (targetHref) => {
      if (!shellReadyRef.current || transitionBusyRef.current) {
        return;
      }

      const targetUrl = new URL(targetHref, window.location.href);
      const targetPathKey = getRoutePathKey(
        targetUrl.pathname,
        targetUrl.search,
      );

      if (targetPathKey === activeRouteRef.current && !targetUrl.hash) {
        return;
      }

      transitionBusyRef.current = true;
      pendingRouteRef.current = targetPathKey;
      setTransitionState({
        active: true,
        mode: "route",
        copy: getRouteCopy(targetUrl.pathname),
      });

      const overlay = transitionRef.current;
      const shell = shellRef.current;
      const blocks = getBlocks();

      if (!overlay || !shell) {
        transitionBusyRef.current = false;
        pendingRouteRef.current = null;
        setTransitionState({
          active: false,
          mode: "idle",
          copy: getRouteCopy(targetUrl.pathname),
        });
        navigate(`${targetUrl.pathname}${targetUrl.search}${targetUrl.hash}`);
        return;
      }

      routeTimelineRef.current?.kill();
      gsap.set(overlay, { autoAlpha: 1, display: "" });
      gsap.set(blocks, { scale: 0, transformOrigin: "center center" });
      gsap.set(shell, {
        scale: 1,
        y: 0,
        opacity: 0,
        filter: "blur(0px)",
      });

      const routeAssets = getRouteMotion(targetUrl.pathname).assets;
      preloadImages(routeAssets);

      routeTimelineRef.current = gsap.timeline({
        defaults: {
          ease: reducedMotionRef.current ? "none" : "power4.inOut",
        },
        onComplete: () => {
          navigate(`${targetUrl.pathname}${targetUrl.search}${targetUrl.hash}`);
        },
      });

      routeTimelineRef.current
        .to(
          blocks,
          {
            scale: 1.02,
            duration: reducedMotionRef.current ? 0.16 : 0.62,
            stagger: GRID_STAGGER,
            transformOrigin: "center center",
          },
          0,
        )
        .to(
          shell,
          {
            scale: 0.995,
            y: 10,
            opacity: 0,
            filter: "blur(6px)",
            duration: reducedMotionRef.current ? 0.16 : 0.28,
          },
          0,
        );
    },
    [getBlocks, navigate],
  );

  useEffect(() => {
    const bootAssets = getBootAssets(initialPathnameRef.current);
    const bootCopy = getRouteCopy(initialPathnameRef.current);
    let cancelled = false;

    const minimumDelay = new Promise((resolve) => {
      window.setTimeout(resolve, 900);
    });

    Promise.all([
      preloadImages(bootAssets),
      document.fonts?.ready ?? Promise.resolve(),
      minimumDelay,
    ]).then(() => {
      if (cancelled) {
        return;
      }

      const overlay = transitionRef.current;
      const shell = shellRef.current;
      const blocks = getBlocks();

      if (!overlay || !shell) {
        bootReadyRef.current = true;
        setShellReady(true);
        setTransitionState({
          active: false,
          mode: "idle",
          copy: bootCopy,
        });
        return;
      }

      bootTimelineRef.current?.kill();
      gsap.set(overlay, { autoAlpha: 1, display: "" });
      gsap.set(blocks, { scale: 1.02, transformOrigin: "center center" });
      gsap.set(shell, {
        y: 24,
        scale: 1.02,
        filter: "blur(12px)",
      });

      bootTimelineRef.current = gsap.timeline({
        defaults: {
          ease: reducedMotionRef.current ? "none" : "power4.inOut",
        },
        onComplete: () => {
          if (cancelled) {
            return;
          }

          gsap.set(overlay, { display: "none" });
          bootReadyRef.current = true;
          activeRouteRef.current = getRoutePathKey(
            initialPathnameRef.current,
            initialSearchRef.current,
          );
          setShellReady(true);

          if (idlePrefetchRef.current != null) {
            cancelIdleTask(idlePrefetchRef.current);
          }

          idlePrefetchRef.current = scheduleIdleTask(() => {
            preloadImages(getIdleAssets(initialPathnameRef.current));
          });

          revealShell(() => {
            if (cancelled) {
              return;
            }

            completeTransition();
            bootTimelineRef.current = null;
          });
        },
      });

      bootTimelineRef.current
        .to(
          blocks,
          {
            scale: 0,
            duration: reducedMotionRef.current ? 0.18 : 0.8,
            stagger: GRID_STAGGER,
            transformOrigin: "center center",
          },
          0,
        )
        .to(
          overlay,
          {
            autoAlpha: 0,
            duration: reducedMotionRef.current ? 0.08 : 0.28,
          },
          reducedMotionRef.current ? 0.58 : 0.88,
        );
    });

    return () => {
      cancelled = true;
      bootTimelineRef.current?.kill();
      routeTimelineRef.current?.kill();

      if (idlePrefetchRef.current != null) {
        cancelIdleTask(idlePrefetchRef.current);
      }
    };
  }, [completeTransition, getBlocks, revealShell]);

  useLayoutEffect(() => {
    const nextRouteKey = getRoutePathKey(location.pathname, location.search);

    if (nextRouteKey === activeRouteRef.current) {
      return;
    }

    if (!bootReadyRef.current) {
      activeRouteRef.current = nextRouteKey;
      return;
    }

    const nextCopy = getRouteCopy(location.pathname);

    if (pendingRouteRef.current === nextRouteKey) {
      pendingRouteRef.current = null;
      activeRouteRef.current = nextRouteKey;
      playReveal(nextCopy);
      return;
    }

    const overlay = transitionRef.current;
    const shell = shellRef.current;
    const blocks = getBlocks();

    setTransitionState({
      active: true,
      mode: "route",
      copy: nextCopy,
    });
    transitionBusyRef.current = true;

    if (overlay && shell) {
      gsap.killTweensOf([overlay, shell, blocks]);
      gsap.set(overlay, { autoAlpha: 1, display: "" });
      gsap.set(blocks, { scale: 1.02, transformOrigin: "center center" });
      gsap.set(shell, {
        opacity: 1,
        scale: 1.02,
        y: 24,
        filter: "blur(12px)",
      });
    }

    activeRouteRef.current = nextRouteKey;
    playReveal(nextCopy);
  }, [getBlocks, location.pathname, location.search, playReveal]);

  useEffect(() => {
    const handleClick = (event) => {
      if (event.defaultPrevented) {
        return;
      }

      if (!shellReadyRef.current || transitionBusyRef.current) {
        event.preventDefault();
        return;
      }

      if (
        event.button !== 0 ||
        event.metaKey ||
        event.altKey ||
        event.ctrlKey ||
        event.shiftKey
      ) {
        return;
      }

      const target = event.target;
      if (!(target instanceof Element)) {
        return;
      }

      const anchor = target.closest("a");
      if (!anchor) {
        return;
      }

      const href = anchor.getAttribute("href");
      if (
        !href ||
        anchor.hasAttribute("download") ||
        anchor.target === "_blank"
      ) {
        return;
      }

      const targetUrl = new URL(href, window.location.href);
      if (targetUrl.origin !== window.location.origin) {
        return;
      }

      const currentRouteKey = getRoutePathKey(
        window.location.pathname,
        window.location.search,
      );
      const targetRouteKey = getRoutePathKey(
        targetUrl.pathname,
        targetUrl.search,
      );

      if (targetRouteKey === currentRouteKey && !targetUrl.hash) {
        event.preventDefault();
        return;
      }

      if (targetRouteKey === currentRouteKey && targetUrl.hash) {
        return;
      }

      event.preventDefault();
      playCoverAndNavigate(
        `${targetUrl.pathname}${targetUrl.search}${targetUrl.hash}`,
      );
    };

    const handlePrefetch = (event) => {
      const target = event.target;

      if (!(target instanceof Element)) {
        return;
      }

      const anchor = target.closest("a");
      if (!anchor) {
        return;
      }

      const href = anchor.getAttribute("href");
      if (!href) {
        return;
      }

      const targetUrl = new URL(href, window.location.href);
      if (targetUrl.origin !== window.location.origin) {
        return;
      }

      const targetRouteKey = getRoutePathKey(
        targetUrl.pathname,
        targetUrl.search,
      );

      if (targetRouteKey === activeRouteRef.current) {
        return;
      }

      preloadImages(getRouteMotion(targetUrl.pathname).assets);
    };

    document.addEventListener("click", handleClick, true);
    document.addEventListener("mouseover", handlePrefetch, true);
    document.addEventListener("focusin", handlePrefetch, true);

    return () => {
      document.removeEventListener("click", handleClick, true);
      document.removeEventListener("mouseover", handlePrefetch, true);
      document.removeEventListener("focusin", handlePrefetch, true);
    };
  }, [playCoverAndNavigate]);

  useEffect(() => {
    if (!location.hash) {
      window.scrollTo({ top: 0, left: 0, behavior: "auto" });
      return undefined;
    }

    const frame = window.requestAnimationFrame(() => {
      const target = document.querySelector(location.hash);

      if (target instanceof Element) {
        target.scrollIntoView({ behavior: "auto", block: "start" });
      }
    });

    return () => window.cancelAnimationFrame(frame);
  }, [location.pathname, location.search, location.hash]);

  return (
    <>
      <div
        id="site-shell"
        ref={shellRef}
        className="site-shell"
        data-ready={shellReady ? "true" : "false"}
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/reserve" element={<Reserve />} />
          <Route path="/locations" element={<Location />} />
          <Route path="/atmosphere" element={<Atmosphere />} />
        </Routes>
      </div>

      <CinematicTransition
        ref={transitionRef}
        active={transitionState.active}
        mode={transitionState.mode}
        copy={transitionState.copy}
      />
    </>
  );
}
