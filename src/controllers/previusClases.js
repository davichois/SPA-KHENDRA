import previusClases from "../pages/previusClases.html";

import header from "./header";
import footer from "./footer";
import { getClaseOrClases } from "../helpers/claseStorage";

const previusClasesView = () => {
  const divElement = document.createElement("div");
  divElement.innerHTML = previusClases;

  //Damos el header template al header del home
  const header_home = divElement.querySelector(".header-previusClases");
  header_home.appendChild(header());

  const footer_home = divElement.querySelector("#footer_previusClases");
  footer_home.appendChild(footer());

  const id_clase = window.location.hash
    .slice(1)
    .toLocaleLowerCase()
    .split("/")[2];

  const getClase = getClaseOrClases(id_clase);

  function pintarInfoClase() {
    divElement.querySelector(
      "#titulo_clase"
    ).innerHTML = `${getClase[0].nombre_clase}`;
    divElement.querySelector(
      "#descricion_clase"
    ).innerHTML = `${getClase[0].descripcion_clase}`;
    const video = divElement.querySelector(".video");

    const url = getClase[0].url.slice(1).split("/")[3];

    video.innerHTML = `<iframe
    src="https://www.youtube.com/embed/${url}"
    title="KHENDRA video player"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope"
    allowfullscreen
  ></iframe>;`;
  }

  pintarInfoClase();

  return divElement;
};

export default previusClasesView;
