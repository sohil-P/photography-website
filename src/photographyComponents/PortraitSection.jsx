function PortraitSection() {
  return (
    <section className="portrait-section" id="portrait">
      <div class="photography-title">
        <h2 data-aos="fade-up" data-aos-duration="1000">
          Portrait
        </h2>
      </div>

      <div className="portrait-grid">
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
      </div>
      <div className="bookBtn">
        <button className="booking-btn">Book Now</button>
      </div>
    </section>
  );
}
export default PortraitSection;
