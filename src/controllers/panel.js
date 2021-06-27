import panel from "../pages/panel.html";

import { generatorId } from "../utils/generatedID";
import { saveLocalStorageCurso } from "../utils/localStorage";
import { Curso } from "../models/Curso";

const panelView = () => {
  const divElement = document.createElement("div");
  divElement.innerHTML = panel;

  const btn_nuevoCurso = divElement.querySelector(".btn-nuevocurso");
  const btn_cancelar = divElement.querySelector("#btn_cancelar");
  const btn_guardar = divElement.querySelector("#btn_guardar");

  //EVENTOS

  //ocultar el container de creacion de curso
  btn_nuevoCurso.addEventListener("click", () => {
    const content_option = divElement.querySelector(".nuevo-curso-container");
    content_option.classList.toggle("none");
  });

  //guardar curso en localstorage
  btn_guardar.addEventListener("click", (e) => {
    e.preventDefault();

    const nombre_curso = divElement.querySelector("#nombre_curso").value.trim();
    const img_curso = divElement.querySelector("#imagen_curso").value.trim();
    const descripcion_curso = divElement
      .querySelector("#descripcion_curso")
      .value.trim();

    const curso = new Curso({
      id: generatorId(3),
      nombre_curso,
      descripcion_curso,
      img_curso,
      duracion: "6h",
    });

    if (
      (curso.nombre_curso && curso.descripcion_curso && curso.img_curso) === ""
    ) {
      return Swal.fire({
        title: "Complete los campos...",
        icon: "warning",
      });
    } else {
      saveLocalStorageCurso(curso);
      Swal.fire({
        title: "Curso Registrado Correctamente",
        icon: "success",
      });
      return (window.location.hash = "#/panel");
    }
  });

  //cancelar y limpiar campos
  btn_cancelar.addEventListener("click", (e) => {
    e.preventDefault();
    divElement.querySelector("#nombre_curso").value = "";
    divElement.querySelector("#imagen_curso").value = "";
    divElement.querySelector("#descripcion_curso").value = "";

    const content_option = divElement.querySelector(".nuevo-curso-container");
    content_option.classList.toggle("none");
  });

  return divElement;
};

export default panelView;
