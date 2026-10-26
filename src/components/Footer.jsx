import Brand from "./Brand";
import { Mail, MapPin, Phone } from "lucide-react";

export default function Footer({ navigate }) {
  const Link = ({ to, children }) => (
    <button onClick={() => navigate(to)}>{children}</button>
  );
  return (
    <footer>
      <div className="container">
        {/* <div className="row "> */}
        <div className="row">
          <div className="col-12 col-md-5 col-lg-4">
            <Brand light />
            <p className="footer-intro">
              Connecting professionals with career opportunities and helping employers source talent for their workforce needs.
            </p>
          </div>
          <div className="col-6 col-md-3 col-lg-2">
            <h3>Explore</h3>
            <Link to="home">Home</Link>
            <Link to="about">About us</Link>
            <Link to="jobs">Jobs</Link>
            <Link to="services">Services</Link>
          </div>
          <div className="col-6 col-md-4 col-lg-3">
            <h3>For candidates</h3>
            <Link to="jobs">Explore opportunities</Link>
            <Link to="candidates">Candidate support</Link>
            <Link to="contact">Share your profile</Link>
          </div>
          
          <div className="col-12 col-lg-3">
            {/* <h3>Address</h3> */}
            <div className="footer-contact-item">
              <MapPin aria-hidden="true" />
              <p className="footer-description">Amreen Consultancy, Shop No 3, Siyara Elite, Kalyan - Bhiwandi Rd,
                opposite BPCL Petrol Pump, Sapna Industrial Estate, Naka, Gove, Kalyan, Maharashtra 421311</p>
            </div>

            {/* <h3>Contact</h3> */}
            <div className="footer-contact-item">
              <Phone aria-hidden="true" />
              <a href="tel:+919152217742">+91 91522 17742</a>
            </div>
            <div className="footer-contact-item">
              {/* <Mail aria-hidden="true" /> */}
              {/* <a href="mailto:info@amreenconsultancy.com">info@amreenconsultancy.com</a> */}
            </div>

            {/* <button
              className="footer-contact"
              onClick={() => navigate("contact")}
            >
              Contact →
            </button> */}
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 Amreen Consultancy. All Rights Reserved.</span>
          <span>Privacy Policy &nbsp; · &nbsp; Terms & Conditions</span>
        </div>
      </div>
    </footer>
  );
}
