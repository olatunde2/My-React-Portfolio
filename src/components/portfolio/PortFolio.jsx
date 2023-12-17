import React from "react";
import "./portfolio.css";
import data from "./data";

const PortFolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        {data.map(({ avatar, title, GitHub, Live_Demo }, index) => {
          return (
            <article className="portfolio__item" key={index}>
              <div className="portfolio__item-image">
                <img src={avatar} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a
                  href={GitHub}
                  className="btn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>

                <a
                  href={Live_Demo}
                  className="btn btn-primary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default PortFolio;
