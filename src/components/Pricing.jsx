function Pricing() {
  return (
    <section className="pricing-section" id="pricing">
      <h2 className="section-title" data-aos="fade-up" data-aos-duration="1000">
        Our Pricing
      </h2>
      <div className="pricing-cards">
        {/* Silver Package */}
        <div
          className="pricing-card silver"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <h3>Silver Package</h3>
          <ul>
            <li>
              <i className="fas fa-check-circle"></i> <p>Basic Photography</p>
            </li>
            <li>
              <i className="fas fa-check-circle"></i> <p>Basic video shoot</p>
            </li>
            <li>
              <i className="fas fa-check-circle"></i> <p>Basic video editing</p>
            </li>
            <li>
              <i className="fas fa-check-circle"></i>
              <p>Simple color correction</p>
            </li>
          </ul>
          <button type="button" className="pricing-btn p-one">
            Get Started
          </button>
        </div>

        {/* Gold Package */}
        <div
          className="pricing-card gold"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="200"
        >
          <h3>Gold Package</h3>
          <ul>
            <li>
              <i className="fas fa-check-circle"></i> <p>DSLR video shoot</p>
            </li>
            <li>
              <i className="fas fa-check-circle"></i>
              <p>Taditional photo shoot</p>
            </li>
            <li>
              <i className="fas fa-check-circle"></i> <p>Drone shoot</p>
            </li>
            <li>
              <i className="fas fa-check-circle"></i>
              <p>Advance video editing with special effects</p>
            </li>
            <li>
              <i className="fas fa-check-circle"></i>
              <p> Color grading</p>
            </li>
            <li>
              <i className="fas fa-check-circle"></i> <p>Normal reels</p>
            </li>
            <li>
              <i className="fas fa-check-circle"></i> <p>Invitation card</p>
            </li>
          </ul>
          <button type="button" className="pricing-btn p-two">
            Get Started
          </button>
        </div>

        {/* Platinum Package */}
        <div
          className="pricing-card platinum"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="400"
        >
          <h3>Platinum Package</h3>
          <ul>
            <li>
              <i className="fas fa-check-circle"></i>
              <p>Traditional photoshoot</p>
            </li>
            <li>
              <i className="fas fa-check-circle"></i> <p>Candid photoshoot</p>
            </li>
            <li>
              <i className="fas fa-check-circle"></i>
              <p>Cinematic videoshoot</p>
            </li>
            <li>
              <i className="fas fa-check-circle"></i> <p>Droneshoot</p>
            </li>
            <li>
              <i className="fas fa-check-circle"></i>
              <p>Cinematic video editing(high-level color grading)</p>
            </li>
            <li>
              <i className="fas fa-check-circle"></i> <p>Cinametic reels</p>
            </li>
            <li>
              <i className="fas fa-check-circle"></i>
              <p>Advance invitation card</p>
            </li>
            <li>
              <i className="fas fa-check-circle"></i> <p>Pre-wedding shoot</p>
            </li>
          </ul>
          <button type="button" className="pricing-btn p-three">
            Get Started
          </button>
        </div>
      </div>
    </section>
  );
}

export default Pricing;
