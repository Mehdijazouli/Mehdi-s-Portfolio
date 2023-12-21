import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">Idrissi Jazouli</h1>

        <ul className="footer__list">
          <li>
            <a href="#about" className="footer__link">
              About
            </a>
          </li>

          <li>
            <a href="#skills" className="footer__link">
              Projects
            </a>
          </li>

          <li>
            <a href="#services" className="footer__link">
              Testimonials
            </a>
          </li>
        </ul>

        <div className="footer__social">
          <a
            href="https://www.linkedin.com/in/mehdi-idrissi-jazouli"
            className="footer__social-link"
            target="_blank"
            rel="noreferrer"
          >
            <i class="bx bxl-linkedin"></i>
          </a>

          <a
            href="https://github.com/Mehdijazouli"
            className="footer__social-link"
            target="_blank"
            rel="noreferrer"
          >
            <i class="bx bxl-github"></i>
          </a>
        </div>

        <span className="footer__copy">&#169; Made By Mehdi</span>
      </div>
    </footer>
  );
};

export default Footer;
