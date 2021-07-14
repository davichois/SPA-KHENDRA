import infoCourse from "../pages/infoCourse.html";

import header from "./header";
import footer from "./footer";
import getHash from "../utils/getHash";
import { getCurso } from "../helpers/cursoStorage";
import { getClaseOrClases } from "../helpers/claseStorage";

const infoCourseView = () => {
  const divElement = document.createElement("div");
  divElement.innerHTML = infoCourse;

  const btn_inscribirse = divElement.querySelector("#btn-inscribirse");
  const id = getHash();

  const clases = getClaseOrClases() || [];

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
  divElement.querySelector("#foto_perfil").src = `${curso[0].img_docente}`;
  divElement.querySelector(
    "#nombre_docente"
  ).textContent = `${curso[0].nombre_docente}`;

  //evento del bootton incribirse
  btn_inscribirse.addEventListener("click", () => {
    btn_inscribirse.innerHTML = `INSCRITO <i class='bx bx-check'></i>`;
  });

  //crear contenido de clase
  const content_clase = divElement.querySelector(".content-clases");
  clases.map((clase) => {
    content_clase.innerHTML += `
    <a href="#/clase/${clase.id_clase}">
      <li><span>${clase.nombre_clase}</span><i class='bx bx-play-circle'></i></li>
    </a>
    `;
  });

  return divElement;
};

export default infoCourseView;
