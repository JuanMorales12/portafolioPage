import React, { useEffect } from "react";
import logoGithub from "../assets/image/github (3).png";
import logoLinkedin from "../assets/image/linkedin.png";
import HeroButton from "./HeroButton";
import HeroSocial from "./HeroSocial";
import userPhoto from "../assets/image/personal.jpg";
import "./styles/Hero.css";

const linkedinLink = "https://www.linkedin.com/in/juansfff/";
const gihubLink = "https://github.com/JuanMorales12";

const ArgentinaFlag = () => (
  <svg className="argentina-flag" viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg">
    <rect width="300" height="66.67" fill="#74ACDF" y="0"/>
    <rect width="300" height="66.67" fill="#74ACDF" y="133.33"/>
    <rect width="300" height="66.67" fill="white" y="66.67"/>
    <circle cx="150" cy="100" r="25" fill="#FCB514"/>
    <g fill="#FCB514">
      <path d="M150 65 L150 75 M150 125 L150 135
               M115 100 L125 100 M175 100 L185 100
               M125 75 L132 82 M168 118 L175 125
               M125 125 L132 118 M168 82 L175 75"/>
      <path d="M140 70 Q145 73 143 77 Q141 81 146 84
               M160 70 Q155 73 157 77 Q159 81 154 84
               M140 130 Q145 127 143 123 Q141 119 146 116
               M160 130 Q155 127 157 123 Q159 119 154 116
               M110 90 Q113 95 117 93 Q121 91 124 96
               M110 110 Q113 105 117 107 Q121 109 124 104
               M190 90 Q187 95 183 93 Q179 91 176 96
               M190 110 Q187 105 183 107 Q179 109 176 104"/>
    </g>
  </svg>
);

const Hero = () => {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    handleScrollToTop()
  }, [])

  return (
    <section id="hero" className="s-hero target-section">
      <div className="s-hero__bg rellax" data-rellax-speed={-7} />
      <div className="row s-hero__content">
        <div className="s-hero__content-about">
          <h1>
            <span className="font-500">Juan Morales</span>
          </h1>
          <h3>
            <span>Full Stack Web Developer</span>
            <br />
            <span>JavaScript | React JS | Node | Redux | PostgreSQL | MongoDB | SCRUM</span>
          </h3>
          <div className="s-hero__content-social">
            <HeroSocial
              href={linkedinLink}
              src={logoLinkedin}
              alt="logo de linkedin"
              title="LinkedIn"
            />
            <HeroSocial
              href={gihubLink}
              src={logoGithub}
              alt="logo de github"
              title="Github"
            />
          </div>
              <div className="s-hero__scroll links">
        <HeroButton
          path="/contact"
          text="Contáctame"
        />
        <HeroButton
          path="/portfolio"
          text="Proyectos"
        />
      </div>
        </div>
        <div className="profile-container">
          <div className="flag-container">
            <ArgentinaFlag />
          </div>
          <div className="profile-image">
            <img src={userPhoto} alt="Juan Morales" />
          </div>
        </div>
      </div>

    </section>
  );
};

export default Hero;