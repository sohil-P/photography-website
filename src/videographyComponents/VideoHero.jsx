function VideoHero() {
  return (
    <section className="hero">
      <div className="hero-video-container">
        <video
          src="Images/videography-video.mp4"
          autoPlay
          loop
          muted
          playsInline
        ></video>
        <div className="overlay"></div>

        <div className="hero-content">
          <h1 id="video-heading">Videography - AI Digital Studio!</h1>
          <p>Capturing moments, Creating memories.</p>
          <div className="box-container">
            <div className="both-box">
              <div className="box-one box">
                <a href="#reels-section">
                  <p>Reels Making</p>
                </a>
              </div>
              <div className="box-two box">
                <a href="#wedding-section">
                  <p>Wedding Videography</p>
                </a>
              </div>
            </div>
            <div className="both-box">
              <div className="box-three box">
                <a href="#event-section">
                  <p>Event Videography</p>
                </a>
              </div>
              <div className="box-four box">
                <a href="#prewedding-section">
                  <p>Pre-Wedding Shooting</p>
                </a>
              </div>
            </div>
          </div>
          <div className="drive-btn">
            <p>Want to see all collection.</p>
            <a
              href="https://drive.google.com/drive/folders/1dYBOX7pMjfWWfJDJ6FkONfRQPEu3X8pk?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              Click here!
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default VideoHero;
