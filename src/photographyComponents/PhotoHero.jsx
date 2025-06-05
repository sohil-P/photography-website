function PhotoHero() {
  return (
    <section className="hero-p">
      <div className="hero-p-container">
        <div className="hero-p-content">
          <h1 id="photo-heading">Photography - AI Digital Studio!</h1>
          <p>Turning Moments into Timeless Memories.</p>
          <div className="box-p-container">
            <div className="box-one box">
              <a href="#portrait">
                <p>Portrait</p>
              </a>
            </div>
            <div className="box-two box">
              <a href="#wedding-section">
                <p>Wedding</p>
              </a>
            </div>
            <div className="box-three box">
              <a href="#event-section">
                <p>Event</p>
              </a>
            </div>
            <div className="box-four box">
              <a href="#prewedding-section">
                <p>Pre-Wedding</p>
              </a>
            </div>
          </div>
          <div className="drive-btn">
            <p>Want to see all collection ?</p>
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
export default PhotoHero;
