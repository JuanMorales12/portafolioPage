import React, { useEffect } from "react";
import logoGithub from "../assets/image/github (3).png";
import logoLinkedin from "../assets/image/linkedin.png";
import logoTwitter from "../assets/image/twitter.png";
import HeroButton from "./HeroButton";
import HeroSocial from "./HeroSocial";
import "./styles/Hero.css";
const linkedinLink = "https://www.linkedin.com/in/juansfff/";
const gihubLink = "https://github.com/JuanMorales12";

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
        <div className="column">
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
          </div>
        </div>
      </div>
      <div className="s-hero__scroll links">
        <HeroButton
          path="/contact"
          // text="Hire Me"
          text="Contáctame"
        />
        <HeroButton
          path="/portfolio"
          //text="Explore Me"
          text="Proyectos"
        />
      </div>
    </section>
  );
};

export default Hero;
