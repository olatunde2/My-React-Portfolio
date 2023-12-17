import React from "react";
import "./footer.css";
import { FaSquareGithub, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer id="footer">
      <a href="#/" className="footer__logo">
        Olatunde
      </a>
      <ul className="permalinks">
        <li>
          <a href="#/">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#exprience">Exprience</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        {/* <li>
          <a href="#testimonials">Testimonials</a>
        </li> */}
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className="footer__socials">
        <a
          href="https://github.com/olatunde2"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaSquareGithub />
        </a>

        <a
          href="https://twitter.com/OlatundeAb22691"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaXTwitter />
        </a>
        <a
          href="www.linkedin.com/in/olatunde-abolaji-okanlawon-3b258727a"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedinIn />
        </a>
      </div>
      <div className="footer__copyright">
        <small>&copy; Olatunde portfolio Website</small>
      </div>
    </footer>
  );
};

export default Footer;
