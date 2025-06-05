import React, { useState } from "react";
import VideoModal from "../videographyComponents/VideoModal";

function ReelsSection() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalSrc, setModalSrc] = useState("");

  const videos = [
    "Images/reel-3.mp4",
    "Images/reel-4.mp4",
    "Images/reel-3.mp4",
    "Images/reel-4.mp4",
  ];

  const handleThumbClick = (src) => {
    setModalSrc(src);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setModalSrc("");
  };

  return (
    <section className="prewedding-section" id="prewedding-section">
      <div className="videography-title">
        <h2>Pre-Wedding</h2>
      </div>

      <div className="video-container">
        <div className="grid">
          {videos.map((src, idx) => (
            <div className="video-box" key={idx}>
              <video
                className="myVideo"
                muted
                loop
                playsInline
                onClick={() => handleThumbClick(src)}
                style={{ cursor: "pointer" }}
              >
                <source src={src} type="video/mp4" />
              </video>
            </div>
          ))}
        </div>
      </div>

      <VideoModal isOpen={modalOpen} videoSrc={modalSrc} onClose={closeModal} />

      <div className="bookBtn">
        <button className="booking-btn">Book Now</button>
      </div>
    </section>
  );
}

export default ReelsSection;
