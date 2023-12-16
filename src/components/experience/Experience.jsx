import React from "react";
import "./experience.css";
import { BsFiletypeHtml } from "react-icons/bs";
import { IoLogoCss3 } from "react-icons/io5";
import { TbBrandJavascript } from "react-icons/tb";
import { BiLogoTailwindCss } from "react-icons/bi";
import { GrReactjs } from "react-icons/gr";
import { TbBrandReactNative } from "react-icons/tb";
import { TbBrandDjango } from "react-icons/tb";
import { SiMysql } from "react-icons/si";
import { IoLogoPython } from "react-icons/io";

const Experience = () => {
  return (
    <section id="exprience">
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>
      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsFiletypeHtml className="experience__details-icon" />
              <div>
                <h4>HTML</h4>
                <small className="text-light">Experience</small>
              </div>
            </article>

            <article className="experience__details">
              <IoLogoCss3 className="experience__details-icon" />
              <div>
                <h4>CSS</h4>
                <small className="text-light">Experience</small>
              </div>
            </article>

            <article className="experience__details">
              <TbBrandJavascript className="experience__details-icon" />
              <div>
                <h4>JavaScript</h4>
                <small className="text-light">Experience</small>
              </div>
            </article>

            <article className="experience__details">
              <BiLogoTailwindCss className="experience__details-icon" />
              <div>
                <h4>Tailwind</h4>
                <small className="text-light">intermediate</small>
              </div>
            </article>

            <article className="experience__details">
              <GrReactjs className="experience__details-icon" />
              <div>
                <h4>React</h4>
                <small className="text-light">Experience</small>
              </div>
            </article>

            <article className="experience__details">
              <TbBrandReactNative className="experience__details-icon" />
              <div>
                <h4>React Native</h4>
                <small className="text-light">intermediate</small>
              </div>
            </article>
          </div>
        </div>

        {/* End of Frontend  */}

        <div className="experience__backend">
          <h3>Backend Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <IoLogoPython className="experience__details-icon" />
              <div>
                <h4>Python</h4>
                <small className="text-light">Experience</small>
              </div>
            </article>

            <article className="experience__details">
              <SiMysql className="experience__details-icon" />
              <div>
                <h4>MySQL</h4>
                <small className="text-light">intermediate</small>
              </div>
            </article>

            <article className="experience__details">
              <TbBrandDjango className="experience__details-icon" />
              <div>
                <h4>Django</h4>
                <small className="text-light">Experience</small>
              </div>
            </article>

            <article className="experience__details">
              <TbBrandDjango className="experience__details-icon" />
              <div>
                <h4>Django Rest FrameWork</h4>
                <small className="text-light">Experience</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
