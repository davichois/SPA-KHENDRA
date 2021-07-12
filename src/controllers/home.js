import home from "../pages/home.html";

import header from "./header.js";
import footer from "./footer.js";
import { getCurso } from "../helpers/cursoStorage";

const homeView = () => {
  const divElement = document.createElement("div");
  divElement.innerHTML = home;

  //Damos el header template al header del home
  const header_home = divElement.querySelector(".header-home");
  header_home.appendChild(header());

  const footer_home = divElement.querySelector("#footer_home");
  footer_home.appendChild(footer());

  //Cursos carrusel
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

  //Slider automatico
  const hero_container_course = divElement.querySelector(
    "#hero_container_course"
  );
  curso.map((curso) => {
    hero_container_course.innerHTML += `
    <div class="hero-item-course">
    <img src="${curso.img_curso}"alt="">
    <div class="textos-hero-home">
        <h3>${curso.nombre_curso}</h3>
        <a href="#/${curso.id}" class="btn">VER AHORA <i class='bx bx-play-circle'></i></a>
    </div>
    </div>
    `;
  });

  let contador = 100;
  function moveCarrusel() {
    hero_container_course.style.transform = `translateX(-${contador}%)`;
    contador += 100;

    if (contador == curso.length * 100) {
      contador = 0;
    }
  }
  setInterval(moveCarrusel, 5000);

  return divElement;
};

export default homeView;
