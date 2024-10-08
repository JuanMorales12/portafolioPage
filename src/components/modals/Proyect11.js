import React from "react";
import image from "../../assets/image/screenshot/ecommerce.png";
import Proyect from "./Proyect";
const URL = "https://tienda-gz.netlify.app/";
const urlRepo = "https://github.com/JuanMorales12/CoderH_MoralesJuan";

const Proyect11 = () => {
  return (
    <Proyect
      srcImg={image}
      proyectTile="E-Commerce"
      proyectDesc="E-Commerce hecho con react y tailwind, conectado a base de datos de firebase"
      tecn="Tecnologías utilizadas: HTML, CSS, JavaScript, React JS, Git/Github, Firebase"
      urlPage={URL}
      urlRepo={urlRepo}
    />
  );
};

export default Proyect11;
