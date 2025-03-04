// src/components/About.jsx
import "../css/About.css";
import { FaPaintBrush, FaCouch, FaLightbulb, FaPhoneAlt } from "react-icons/fa";

const About = () => {
  return (
    <div className="about-container">
      <div className="about-content">
        <h2>About Us</h2>
        <p>
          Welcome to <span className="brand-name">Elegant Interiors</span>,
          where creativity meets functionality. We specialize in designing
          breathtaking spaces that reflect your personality and lifestyle.
        </p>

        <div className="about-features">
          <div className="feature">
            <FaPaintBrush className="icon" />
            <h3>Creative Designs</h3>
            <p>
              Our team of expert designers crafts unique and stylish interiors
              tailored to your vision.
            </p>
          </div>

          <div className="feature">
            <FaCouch className="icon" />
            <h3>Comfort & Elegance</h3>
            <p>
              We blend aesthetics with comfort, ensuring a perfect balance of
              style and functionality.
            </p>
          </div>

          <div className="feature">
            <FaLightbulb className="icon" />
            <h3>Innovative Solutions</h3>
            <p>
              Our approach focuses on smart, space-saving, and sustainable
              interior solutions.
            </p>
          </div>
        </div>

        <p>
          With years of experience in residential and commercial projects, we
          are committed to transforming spaces with our passion for design.
        </p>

        <div className="contact-section">
          <FaPhoneAlt className="icon" />
          <p>
            Let’s bring your dream space to life. <br />
            <strong>Contact us today!</strong>
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
