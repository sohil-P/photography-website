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
              <i className="fas fa-check-circle"></i> Basic Photography
            </li>
            <li>
              <i className="fas fa-check-circle"></i> Basic Photo Editing
            </li>
            <li>
              <i className="fas fa-check-circle"></i> 3 Hours Videography
            </li>
            <li>
              <i className="fas fa-check-circle"></i> 300 Selected Photos Album
            </li>
            <li>
              <i className="fas fa-check-circle"></i> Basic Videography
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
              <i className="fas fa-check-circle"></i> DSLR Photography
            </li>
            <li>
              <i className="fas fa-check-circle"></i> HD Videography
            </li>
            <li>
              <i className="fas fa-check-circle"></i> Gimbal Video Shoot
            </li>
            <li>
              <i className="fas fa-check-circle"></i> Covers Album
            </li>
            <li>
              <i className="fas fa-check-circle"></i> Drone Camera
            </li>
            <li>
              <i className="fas fa-check-circle"></i> Day Photography
            </li>
            <li>
              <i className="fas fa-check-circle"></i> Cinematic Teaser
            </li>
            <li>
              <i className="fas fa-check-circle"></i> Cinematic Highlight
            </li>
            <li>
              <i className="fas fa-check-circle"></i> Advance WhatsApp
              Invitation
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
              <i className="fas fa-check-circle"></i> HD Photography
            </li>
            <li>
              <i className="fas fa-check-circle"></i> Cinematic Videography 4K
            </li>
            <li>
              <i className="fas fa-check-circle"></i> Gimbal Video Shoot
            </li>
            <li>
              <i className="fas fa-check-circle"></i> Photo Book Album
            </li>
            <li>
              <i className="fas fa-check-circle"></i> Drone Camera
            </li>
            <li>
              <i className="fas fa-check-circle"></i> Day Photography
            </li>
            <li>
              <i className="fas fa-check-circle"></i> Pre-Wedding 2 Song
            </li>
            <li>
              <i className="fas fa-check-circle"></i> Cinematic Teaser
            </li>
            <li>
              <i className="fas fa-check-circle"></i> Cinematic Highlight
            </li>
            <li>
              <i className="fas fa-check-circle"></i> Advance WhatsApp
              Invitation
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
