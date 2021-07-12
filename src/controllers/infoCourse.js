import infoCourse from "../pages/infoCourse.html";

import header from "./header.js";
import footer from "./footer.js";
import getHash from "../utils/getHash.js";
import { getCurso } from "../models/Curso.js";

const infoCourseView = () => {
  const divElement = document.createElement("div");
  divElement.innerHTML = infoCourse;

  const btn_inscribirse = divElement.querySelector("#btn-inscribirse");
  const id = getHash();

  //Damos el header template al header del home
  const header_home = divElement.querySelector(".header-home");
  header_home.appendChild(header());
  //Damos el footer template al footer del home
  const footer_info = divElement.querySelector("#footer_info");
  footer_info.appendChild(footer());

  //Pintar course en pantalla
  let curso = getCurso(id);

  divElement.querySelector("#img_course").src = `${curso[0].img_curso}`;
  divElement.querySelector(
    "#texto_course"
  ).textContent = `${curso[0].nombre_curso}`;
  divElement.querySelector(
    "#description_course"
  ).textContent = `${curso[0].descripcion_curso}`;

  //evento del bootton incribirse
  btn_inscribirse.addEventListener("click", () => {
    btn_inscribirse.innerHTML = `INSCRITO <i class='bx bx-check'></i>`;
  });

  return divElement;
};

export default infoCourseView;
