import React from "react";
import "./about.css";
// import Me from "../../assets/me1.png";
import { TbAward } from "react-icons/tb";
import { LuUsers2 } from "react-icons/lu";
import { FcFolder } from "react-icons/fc";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        {/* <div className="about__me">
          <div className="about__me-image">
            <img src={Me} alt="" className="img" />
          </div>
        </div> */}

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <TbAward className="about__icon" />
              <h5>Experience</h5>
              <small>3+ Years working</small>
            </article>

            <article className="about__card">
              <LuUsers2 className="about__icon" />
              <h5>Clients</h5>
              <small>400+ worldwide</small>
            </article>

            <article className="about__card">
              <FcFolder className="about__icon" />
              <h5>Projects</h5>
              <small>6+ completed</small>
            </article>
          </div>
          <p>
            I'm a solution-driven Fullstack Developer with a strong skill set in
            programming languages like HTML, CSS, JavaScript, and Python,
            complemented by a deep understanding of web development frameworks
            such as React, Tailwind CSS, Django, React Native, MySQL,
            Docker,PostgreSQL and Django Rest Framework .
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
