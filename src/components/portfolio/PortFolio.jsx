import React from "react";
import "./portfolio.css";
import image5 from "../../assets/image6.jpeg";
import image6 from "../../assets/image5.jpeg";
import image3 from "../../assets/image4.jpeg";
import image4 from "../../assets/image3.jpeg";
import image1 from "../../assets/image2.jpeg";
import image2 from "../../assets/image1.jpeg";

const data = [
  {
    avatar: image1,
    title: "This is an Economic Website build with Django.",
    GitHub: "https://github.com/olatunde2/Economic",
    Live_Demo: "https://github.com/olatunde2/Economic",
  },
  {
    avatar: image2,
    title: "This Is A Meal Devily Website build with React",
    GitHub: "https://github.com/olatunde2/MealApp",
    Live_Demo: "https://github.com/olatunde2/MealApp",
  },
  {
    avatar: image3,
    title:
      "This Is a events Website a join project api build with Django Rest FrameWork.",
    GitHub: "https://github.com/olatunde2/events-be-python",
    Live_Demo: "https://github.com/olatunde2/events-be-python",
  },
  {
    avatar: image4,
    title:
      "This project is a video upload chunks api build with Django Rest FrameWork.",
    GitHub: "https://github.com/olatunde2/new-task",
    Live_Demo: "https://github.com/olatunde2/new-task",
  },
  {
    avatar: image5,
    title: "This Is a school Website build with Django ",
    GitHub: "https://github.com/olatunde2/Economic-website",
    Live_Demo: "https://github.com/olatunde2/Economic-website",
  },
  {
    avatar: image6,
    title: "This Is a profile api build with Django Rest FrameWork. ",
    GitHub: "https://github.com/olatunde2/task3",
    Live_Demo: "https://github.com/olatunde2/task3",
  },
];

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
