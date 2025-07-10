function About() {
  return (
    <section className="about-section" id="about">
      <div className="about-container">
        <div
          className="about-images"
          data-aos="zoom-in"
          data-aos-duration="1000"
        >
          <img
            src="Images/komit-1.webp"
            alt="Image 1"
            loading="lazy"
            className="about-img img-top-left"
          />
          <img
            src="Images/maulik-img.webp"
            alt="Image 2"
            loading="lazy"
            className="about-img img-bottom-right"
          />
        </div>
        <div className="about-text">
          <h2 data-aos="fade-up" data-aos-duration="1000">
            About Us
          </h2>
          <p data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
            At <strong>AI Digital Studio</strong>, we blend creativity with
            smart technology to produce exceptional photography, videography,
            and digital services. Our team leverages artificial intelligence to
            enhance your visual stories — whether it’s personal, business, or
            promotional.
          </p>
          <p data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400">
            We believe in originality, storytelling, and professional quality.
            Let’s work together to turn your vision into impactful digital
            media.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
