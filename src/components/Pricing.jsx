import { Link } from "react-router-dom";

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
              <i className="fas fa-check-circle"></i> <p>Basic Videoshoot</p>
            </li>
            <li>
              <i className="fas fa-check-circle"></i> <p>Basic Video Editing</p>
            </li>
            <li>
              <i className="fas fa-check-circle"></i>
              <p>Simple Color Correction With Album</p>
            </li>
          </ul>
          <Link to={"/Silver"}>
            <button type="button" className="pricing-btn p-one">
              Get Started
            </button>
          </Link>
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
              <i className="fas fa-check-circle"></i> <p>DSLR Videoshoot</p>
            </li>
            <li>
              <i className="fas fa-check-circle"></i>
              <p>Taditional Photoshoot</p>
            </li>
            <li>
              <i className="fas fa-check-circle"></i> <p>Drone Shoot</p>
            </li>
            <li>
              <i className="fas fa-check-circle"></i>
              <p>Advance Video Editing With Special Effects</p>
            </li>
            <li>
              <i className="fas fa-check-circle"></i>
              <p> Color Grading</p>
            </li>
            <li>
              <i className="fas fa-check-circle"></i> <p>Normal Reels</p>
            </li>
            <li>
              <i className="fas fa-check-circle"></i> <p>Invitation Card</p>
            </li>
          </ul>
          <Link to={"/Golden"}>
            <button type="button" className="pricing-btn p-two">
              Get Started
            </button>
          </Link>
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
              <p>Traditional Photoshoot</p>
            </li>
            <li>
              <i className="fas fa-check-circle"></i>
              <p>Traditional Videoshoot</p>
            </li>
            <li>
              <i className="fas fa-check-circle"></i> <p>Candid Photoshoot</p>
            </li>
            <li>
              <i className="fas fa-check-circle"></i>
              <p>Cinematic Videoshoot</p>
            </li>
            <li>
              <i className="fas fa-check-circle"></i> <p>Drone Shoot</p>
            </li>
            <li>
              <i className="fas fa-check-circle"></i>
              <p>Cinematic Video Editing(High-Level Color Grading)</p>
            </li>
            <li>
              <i className="fas fa-check-circle"></i> <p>Cinametic Reels</p>
            </li>
            <li>
              <i className="fas fa-check-circle"></i>
              <p>Advance Invitation Card</p>
            </li>
            <li>
              <i className="fas fa-check-circle"></i> <p>Pre-Wedding Shoot</p>
            </li>
          </ul>
          <Link to={"/Platinum"}>
            <button type="button" className="pricing-btn p-three">
              Get Started
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Pricing;
