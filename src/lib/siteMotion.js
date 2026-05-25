import heroImg from "../assets/hero.jpg";
import craftingImg from "../assets/crafting moment of slience.jpg";
import midnightExpressoImg from "../assets/midnight expresso.jpg";
import cheeseCakeImg from "../assets/cheese cake.jpg";
import coldCoffeeImg from "../assets/the-golden-chilled-brew.jpeg";
import atmosphere1Img from "../assets/astmosphere1.jpg";
import atmosphere2Img from "../assets/atmosphare 2.jpg";
import pureShot from "../assets/the-pure-shot.jpeg";
import morningBloom from "../assets/the-morning-bloom.jpeg";
import artisanFlake from "../assets/the-artisan-flake.jpeg";
import creamyClassic from "../assets/the-creamy-classic.jpeg";
import savoryBrioche from "../assets/the-savory-brioche.jpeg";
import midnightDecadence from "../assets/midnight-decadence.jpeg";
import gardenSourdough from "../assets/the-garden-sourdough.jpeg";

const ROUTE_MOTION = {
  "/": {
    eyebrow: "CAFUNO / OPENING",
    title: "Quiet Art of Espresso",
    caption: "The room is settling before the first frame is fully revealed.",
    assets: [
      heroImg,
      craftingImg,
      midnightExpressoImg,
      cheeseCakeImg,
      coldCoffeeImg,
      atmosphere1Img,
      atmosphere2Img,
    ],
  },
  "/menu": {
    eyebrow: "CAFUNO / MENU",
    title: "Selected Pourings",
    caption: "Staging the seasonal collection under a controlled reveal.",
    assets: [
      pureShot,
      morningBloom,
      artisanFlake,
      creamyClassic,
      coldCoffeeImg,
      savoryBrioche,
      midnightDecadence,
      gardenSourdough,
    ],
  },
  "/reserve": {
    eyebrow: "CAFUNO / RESERVE",
    title: "A Quieter Table",
    caption: "Preparing the room for a slower arrival.",
    assets: [heroImg, atmosphere1Img],
  },
  "/locations": {
    eyebrow: "CAFUNO / LOCATIONS",
    title: "The City Map Opens",
    caption: "Loading the boutiques before the first step lands.",
    assets: [heroImg, atmosphere2Img],
  },
  "/atmosphere": {
    eyebrow: "CAFUNO / ATMOSPHERE",
    title: "Light and Acoustics",
    caption: "Tuning shadow, texture, and sound before the room appears.",
    assets: [heroImg, atmosphere1Img, atmosphere2Img],
  },
};

export function getRouteKey(pathname = "/", search = "") {
  const normalizedPath = pathname.replace(/\/+$/, "") || "/";
  return `${normalizedPath}${search || ""}`;
}

export function getRouteMotion(pathname = "/") {
  return ROUTE_MOTION[pathname] ?? ROUTE_MOTION["/"];
}

export function getRouteCopy(pathname = "/") {
  const routeMotion = getRouteMotion(pathname);

  return {
    eyebrow: routeMotion.eyebrow,
    title: routeMotion.title,
    caption: routeMotion.caption,
  };
}

export function getBootAssets(pathname = "/") {
  return getRouteMotion(pathname).assets;
}

export function getIdleAssets(currentPathname = "/") {
  const currentKey = getRouteKey(currentPathname);

  return Object.entries(ROUTE_MOTION)
    .filter(([pathname]) => getRouteKey(pathname) !== currentKey)
    .flatMap(([, value]) => value.assets);
}

export function getAllRouteAssets() {
  return [
    ...new Set(Object.values(ROUTE_MOTION).flatMap((value) => value.assets)),
  ];
}
