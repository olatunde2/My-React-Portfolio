import React from "react";
import "./services.css";
import { BiCheck } from "react-icons/bi";

const Services = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>User Research and Analysis</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Wireframing and Prototyping.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Visual Design.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>User Testing and Iteration.</p>
            </li>
          </ul>
        </article>

        {/* End of first card */}

        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Responsive Design.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Database Management.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Version Contro.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>APIs (Application Programming Interfaces).</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Collaboration.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Web Application Architecture.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Server and Hosting Environment.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Database Management.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Continuous Learning.</p>
            </li>
          </ul>
        </article>

        {/* End of 2 card */}
      </div>
    </section>
  );
};

export default Services;
