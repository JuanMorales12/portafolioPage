import React from "react";
import image from "../../assets/image/screenshot/gif_completa.png";
import Proyect from "./Proyect";
const URL = "https://juanmorales12.github.io/React-gif-expert-app/";
const urlRepo = "https://github.com/JuanMorales12/React-gif-expert-app";

const Proyect12 = () => {
  return (
    <Proyect
      srcImg={image}
      proyectTile="Buscador de Gifs"
      proyectDesc="App móvil simple para buscar películas y guardarlas en favoritos."
      tecn="Tecnologías utilizadas: JavaScript, React Native, TypeScript, Node JS, Git/Github."
      urlPage={URL}
      urlRepo={urlRepo}
      btnPage="Visit Demo"
    />
  );
};

export default Proyect12;
