function VideoHero() {
  return (
    <section className="hero">
      <div className="hero-video-container">
        <video
          src="Images/videography-bg.mp4"
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
            <div className="box-one box">
              <a href="#">
                <p>Reels Making</p>
              </a>
            </div>
            <div className="box-two box">
              <a href="#">
                <p>Wedding</p>
              </a>
            </div>
            <div className="box-three box">
              <a href="#">
                <p>Event</p>
              </a>
            </div>
            <div className="box-four box">
              <a href="#">
                <p>Pre-Wedding</p>
              </a>
            </div>
          </div>
          <div className="more-info-box">
            <p>Want to see all collection?</p>
            <button type="button" className="linkBtn">
              <a
                href="https://drive.google.com/drive/folders/1zhoWVr7re67WeaFjEndj3ibBxC55yUQ6?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                Click here!
              </a>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default VideoHero;
