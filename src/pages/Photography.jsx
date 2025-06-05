import { useEffect, useState } from "react";
import Loader from "../components/loader";
import Navbar from "../components/Navbar";
import PhotoHero from "../photographyComponents/PhotoHero";
import PortraitSection from "../photographyComponents/PortraitSection";
import Footer from "../components/Footer";
import "../videography.css";
import "../photography.css";
import "../App.css";
import AOS from "aos";
import "aos/dist/aos.css";

function Photography() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const startTime = performance.timing?.navigationStart || performance.now();
    const endTime = performance.timing?.loadEventEnd || performance.now();
    const loadDuration = endTime - startTime;
    const delay = Math.min(Math.max(loadDuration, 1000), 4000);

    document.body.classList.add("loading");
    const timer = setTimeout(() => {
      setLoading(false);
      document.body.classList.remove("loading");
      AOS.init();
    }, delay);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <Navbar />
          <PhotoHero />
          <PortraitSection />
          <Footer />
        </>
      )}
    </>
  );
}

export default Photography;
