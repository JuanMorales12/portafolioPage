import React from "react";
import image from "../../assets/image/screenshot/memo.png";
import Proyect from "./Proyect";
const URL = "https://juanmorales12.github.io/memory_card/";
const urlRepo = "https://github.com/JuanMorales12/memory_card";

const Proyect08 = () => {
  return (
    <Proyect
      srcImg={image}
      proyectTile="Memo test"
      proyectDesc="Memo test creado con React y Tailwind"
      tecn="Tecnologías utilizadas: HTML, CSS, JavaScript, React JS, Git/Github"
      urlPage={URL}
      urlRepo={urlRepo}
    />
  );
};

export default Proyect08;
