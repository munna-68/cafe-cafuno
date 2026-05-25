import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Reserve from "./pages/Reserve";
import Location from "./pages/Location";
import Atmosphere from "./pages/Atmosphere";

export default function App() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      return;
    }

    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [location.pathname, location.hash]);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/menu" element={<Menu />} />
      <Route path="/reserve" element={<Reserve />} />
      <Route path="/locations" element={<Location />} />
      <Route path="/atmosphere" element={<Atmosphere />} />
    </Routes>
  );
}
