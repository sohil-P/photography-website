function Portfolio() {
  return (
    <section className="portfolio-section" id="portfolio">
      <h2 className="section-title">Our Portfolio</h2>
      <div className="portfolio-grid">
        <img
          src="Images/portfolio-1.webp"
          alt="Portfolio 1"
          data-aos="fade-up"
          data-aos-duration="1000"
        />
        <img
          src="Images/portfolio-2.webp"
          alt="Portfolio 2"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="100"
        />
        <img
          src="Images/portfolio-3.webp"
          alt="Portfolio 3"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="200"
        />
        <img
          src="Images/portfolio-4.webp"
          alt="Portfolio 4"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="300"
        />
        <img
          src="Images/portfolio-5.webp"
          alt="Portfolio 5"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="400"
        />
        <img
          src="Images/umang-img.webp"
          alt="Portfolio 6"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="500"
        />
        <img
          src="Images/rita-img2.jpg"
          alt="Portfolio 7"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="600"
        />
        <img
          src="Images/maulik-img.jpg"
          alt="Portfolio 8"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="700"
        />
      </div>
      <div className="portfolio-btn">
        <button
          type="button"
          onClick={() =>
            window.open(
              "https://drive.google.com/drive/folders/1dYBOX7pMjfWWfJDJ6FkONfRQPEu3X8pk?usp=sharing",
              "_blank"
            )
          }
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="200"
        >
          View More
        </button>
      </div>
    </section>
  );
}

export default Portfolio;
