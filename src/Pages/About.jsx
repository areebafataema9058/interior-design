// src/components/About.jsx
import "../css/About.css"

const About = () => {
  return (
    <div className="about-container">
      <div className="about-content">
        <h2>About Us</h2>
        <p>
          Welcome to <span className="brand-name">Elegant Interiors</span>,
          where we bring your vision to life with stunning interior designs. Our
          team of expert designers is dedicated to creating unique, functional,
          and aesthetically pleasing spaces tailored to your needs.
        </p>
        <p>
          With years of experience in residential and commercial projects, we
          specialize in modern, contemporary, and classic designs. We believe in
          blending creativity with practicality to craft spaces that reflect
          your personality and style.
        </p>
        <p>
          Let us transform your space into something truly extraordinary.
          Contact us today to start your journey toward a beautifully designed
          home or office.
        </p>
      </div>
    </div>
  );
};

export default About;
