import React, { useState } from "react";
import VideoModal from "./VideoModal";

function DemoSection() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalSrc, setModalSrc] = useState("");

  const videos = [
    "Images/video-1.mp4",
    "Images/video-2.mp4",
    "Images/video-3.mp4",
    "Images/video-4.mp4",
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
    <section className="demo-section" id="demo-section">
      <div className="videography-title">
        <h2>Demo</h2>
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
    </section>
  );
}

export default DemoSection;
