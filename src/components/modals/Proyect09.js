import React from "react";
import image from "../../assets/image/screenshot/kanban.png";
import Proyect from "./Proyect";
const URL = "https://juanmorales12.github.io/Kanban/";
const urlRepo = "https://github.com/JuanMorales12/Kanban";

const Proyect09 = () => {
  return (
    <Proyect
      srcImg={image}
      proyectTile="Kanban - To do"
      proyectDesc="Kanban To do"
      tecn="Tecnologías utilizadas: HTML, CSS, JavaScript, React JS, Tailwind CSS, Github"
      urlPage={URL}
      urlRepo={urlRepo}
    />
  );
};

export default Proyect09;
