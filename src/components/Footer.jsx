import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-icons">
          <a href="https://www.instagram.com/ai_digital_studio_0001/">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="https://www.youtube.com/@KooMuuu/featured">
            <i className="fab fa-youtube"></i>
          </a>
          <a href="https://www.facebook.com/prajapati.Maulik.360">
            <i className="fab fa-facebook-f"></i>
          </a>
        </div>
        <p className="footer-text">
          © 2025 AI Digital Studio. All rights reserved.
        </p>
        <hr />
        <div className="term-privacy-box">
          <Link to={"./Privacy"}>
            <p className="policy-text">Privacy Policy</p>
          </Link>
          <Link to={"./Terms"}>
            <p className="terms-text">Terms & Conditions</p>
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
