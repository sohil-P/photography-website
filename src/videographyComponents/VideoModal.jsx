import React, { useRef, useEffect } from "react";

function VideoModal({ isOpen, videoSrc, onClose }) {
  const videoRef = useRef(null);

  useEffect(() => {
    if (isOpen && videoRef.current) {
      videoRef.current.play();
    }
  }, [isOpen]);

  const handleClose = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="video-modal" id="videoModal" style={{ display: "flex" }}>
      <span
        className="close-btn"
        onClick={handleClose}
        style={{ cursor: "pointer" }}
      >
        &#x2715;
      </span>
      <video id="modalVideo" controls autoPlay ref={videoRef} src={videoSrc} />
    </div>
  );
}

export default VideoModal;
