import { useEffect, useState } from "react";
import Loader from "../components/loader";
import Navbar from "../components/Navbar";
import SilverSection from "../SilverComponent/SilverSection";
import "../App.css";
import AOS from "aos";
import "aos/dist/aos.css";
import "../Silver.css";

function Silver() {
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
          <SilverSection />
        </>
      )}
    </>
  );
}

export default Silver;
