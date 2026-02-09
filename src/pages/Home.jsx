import { useState, useRef, useEffect } from "react";
import HeroSection from "../components/HeroSection";
import ExploreConfessions from "./ExploreConfessions";
import Footer from "../components/Footer";
import Star1Background from "../components/Star1Background";
const Home = () => {
  const [showExplore, setShowExplore] = useState(false);
  const exploreRef = useRef(null);

  useEffect(() => {
    const wasExploreOpened = sessionStorage.getItem("exploreOpened");
    if (wasExploreOpened === "true") {
      setShowExplore(true);
    }
  }, []);

  const scrollToExplore = () => {
    exploreRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  useEffect(() => {
    if (showExplore) setTimeout(scrollToExplore, 500);
  }, [showExplore]);

  const handleExplore = () => {
    sessionStorage.setItem("exploreOpened", "true");
    showExplore ? scrollToExplore() : setShowExplore(true);
  };

  return (
    <main className="w-full">
      <Star1Background />
      <HeroSection onExplore={handleExplore} />

      {showExplore && (
        <div ref={exploreRef} className="mt-10">
          <div className="flex justify-center">
            <div className="w-full max-w-md h-[2px] rounded-full bg-gradient-to-r from-purple-500 to-pink-500" />
          </div>
          <ExploreConfessions />
        </div>
      )}

      <Footer />
    </main>
  );
};

export default Home;
