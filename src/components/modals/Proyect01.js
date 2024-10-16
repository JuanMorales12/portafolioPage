import React from "react";
import image from "../../assets/image/screenshot/heroes_banner.png";
import "../styles/Modal.css";
import Proyect from "./Proyect";
const URL =
  "https://juanmorales12.github.io/heroes-spa/";

const urlRepo =
  "https://github.com/JuanMorales12/heroes-spa";
const Proyect01 = () => {
  return (
    <Proyect
      srcImg={image}
      proyectTile="Superheroes SPA"
      proyectDesc="Superheroes SPA es una aplicación web que permite buscar superhéroes y villanos de los cómics de Marvel y DC."
      tecn="Tecnologías utilizadas: HTML, CSS, JavaScript,React, Git/Github."
      urlPage={URL}
      urlRepo={urlRepo}
    />
  );
};

export default Proyect01;
