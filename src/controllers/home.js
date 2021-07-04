import home from "../pages/home.html";

import header from "./header";
import footer from "./footer";
import { getCurso } from "../models/Curso";

const homeView = () => {
  const divElement = document.createElement("div");
  divElement.innerHTML = home;

  //Damos el header template al header del home
  const header_home = divElement.querySelector(".header-home");
  header_home.appendChild(header());

  const footer_home = divElement.querySelector("#footer_home");
  footer_home.appendChild(footer());

  let curso = getCurso() || [];
  const carrusel_home = divElement.querySelector("#carrusel_home");

  curso.map((curso) => {
    carrusel_home.innerHTML += `
    <a href="/#/${curso.id}">
    <div class="card-item">
      <div class="card-image">
          <img src="${curso.img_curso}"
            alt="">
      </div>
      <div class="card-info">
          <div class="title">
              <p>${curso.nombre_curso}</p>
          </div>
          <div class="icon">
              <i class='bx bx-time'></i>
              <p>6h</p>
          </div>
      </div>
    </div>
    </a>
    `;
  });

  const btn_siguiente = divElement.querySelector("#btn_siguiente");
  btn_siguiente.addEventListener("click", (e) => {
    console.log(e);
  });

  return divElement;
};

export default homeView;
