function Home() {
  return (
    <section className="home-section section-padding" id="home">
      <div className="home-content">
        <h1 data-aos="fade-up" data-aos-duration="1000">
          Welcome to Our Photography World!
        </h1>
        <p data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
          We blend artificial intelligence with artistic vision to capture
          unforgettable moments and create stunning visuals. Whether it’s
          portraits, events, or branding, we turn your story into visual magic.
        </p>
        <a
          href="#portfolio"
          className="btn"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="400"
        >
          Visit Portfolio <i className="fas fa-arrow-right"></i>
        </a>
      </div>

      <div className="home-images">
        <div
          className="image-wrapper image1"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <img src="/Images/umang-img.webp" alt="Photographer" />
        </div>
        <div
          className="image-wrapper image2"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <img src="/Images/rita-img1.jpg" alt="Portrait Work" />
        </div>
      </div>
    </section>
  );
}

export default Home;
