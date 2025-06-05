import { Link } from "react-router-dom";

function Services() {
  return (
    <section className="service-section" id="services">
      <h2 className="section-title" data-aos="fade-up" data-aos-duration="1000">
        Our Services
      </h2>
      <div className="service-boxes">
        {/* Video Service */}
        <div
          className="service-card video-service"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="200"
        >
          <div className="overlay"></div>
          <div className="service-text">
            <h3>Videography</h3>
            <p>
              We produce cinematic-quality videos that capture moments with
              emotion and creativity—perfect for weddings, events, and
              promotional content.
            </p>
          </div>
          <div className="arrow-icon">
            <Link to="/Videography">
              <span style={{ cursor: "pointer" }}>&rarr;</span>
            </Link>
          </div>
          <div className="demo-btn">
            <button
              onClick={() =>
                window.open(
                  "https://drive.google.com/drive/folders/1dYBOX7pMjfWWfJDJ6FkONfRQPEu3X8pk?usp=sharing",
                  "_blank"
                )
              }
            >
              Check Demo
            </button>
          </div>
        </div>

        {/* Photo Service */}
        <div
          className="service-card photo-service"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="400"
        >
          <div className="overlay"></div>
          <div className="service-text">
            <h3>Photography</h3>
            <p>
              We deliver artistic and high-resolution photos—from portraits to
              commercial shoots—bringing your story to life through the lens.
            </p>
          </div>
          <div className="arrow-icon">
            <Link to="/Photography">
              <span style={{ cursor: "pointer" }}>&rarr;</span>
            </Link>
          </div>
          <div className="demo-btn">
            <button
              onClick={() =>
                window.open(
                  "https://drive.google.com/drive/folders/1dYBOX7pMjfWWfJDJ6FkONfRQPEu3X8pk?usp=sharing",
                  "_blank"
                )
              }
            >
              Check Demo
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
