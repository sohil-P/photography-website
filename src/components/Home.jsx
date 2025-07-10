function Home() {
  return (
    <section className="home-section section-padding" id="home">
      <div className="home-container">
        <div className="home-content">
          <div className="main-content">
            <div
              className="content-imgs"
              data-aos="zoom-in"
              data-aos-duration="1000"
            >
              <img
                src="./Images/Logo.webp"
                alt="home-img"
                loading="lazy"
                className="img1"
              />
            </div>
            <div className="content-text">
              <h3 data-aos="fade-up" data-aos-duration="1000">
                Welcome to Our Photography World!
              </h3>
              <h1
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="100"
              >
                AI Digital Studio
              </h1>
              <p
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="200"
              >
                We blend artificial intelligence with artistic vision to capture
                unforgettable moments and create stunning visuals. Whether it’s
                portraits, events, or branding, we turn your story into visual
                magic.
              </p>
              <button type="button" className="homeBtn">
                <a href="#portfolio">Visit Portfolio</a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
