import courseContent from "../pages/courseContent.html";

import { getCurso } from "../helpers/cursoStorage";
import { Clase } from "../models/Clase";
import { generatorId } from "../utils/generatedID";

const courseContentView = () => {
  const divElement = document.createElement("div");
  divElement.innerHTML = courseContent;

  const titulo_curso = divElement.querySelector("#titulo_curso");
  titulo_curso.setAttribute("readonly", "");
  const img_curso = divElement.querySelector("#img_curso");
  img_curso.setAttribute("readonly", "");
  const descripcion_curso = divElement.querySelector("#desccripcion_curso");
  descripcion_curso.setAttribute("readonly", "");

  //Encontrando curso
  const curso = () => {
    const idCourse = window.location.hash.split("/")[2];
    let listaCurso = getCurso() || [];
    let cursoEncontrado = listaCurso.filter((curso) => {
      return curso.id === idCourse;
    });

    return cursoEncontrado;
  };

  titulo_curso.value = `${curso()[0].nombre_curso}`;
  img_curso.value = `${curso()[0].img_curso}`;
  descripcion_curso.value = `${curso()[0].descripcion_curso}`;

  const nueva_clase = divElement.querySelector("#nueva_clase");
  const content_clase = divElement.querySelector(".form-curso-content");

  nueva_clase.addEventListener("click", () => {
    let content_input = document.createElement(`div`);
    content_input.classList.add("content_input");
    content_input.setAttribute("id", "content_input_class");

    let inputNombre = document.createElement(`input`);
    inputNombre.setAttribute("placeholder", "Nombre de la clase");
    inputNombre.classList.add("inputCourseContent");
    inputNombre.setAttribute("id", "input_nombre");
    inputNombre.setAttribute("required", "");

    let inputDescripcion = document.createElement(`textarea`);
    inputDescripcion.setAttribute("placeholder", "Descripcion de la clase");
    inputDescripcion.classList.add("inputCourseContent");
    inputDescripcion.setAttribute("id", "input_descripcion");
    inputDescripcion.setAttribute("required", "");

    let inputVideo = document.createElement(`input`);
    inputVideo.setAttribute("placeholder", "Video de la clase");
    inputVideo.setAttribute("type", "url");
    inputVideo.classList.add("inputCourseContent");
    inputVideo.setAttribute("id", "input_video");
    inputVideo.setAttribute("required", "");

    content_input.appendChild(inputNombre);
    content_input.appendChild(inputDescripcion);
    content_input.appendChild(inputVideo);

    content_clase.appendChild(content_input);
  });

  //Capturar y guardar clase
  const btn_guardar_clase = divElement.querySelector("#btn_guardar_clase");

  btn_guardar_clase.addEventListener("click", () => {
    let curso_id = window.location.hash
      .slice(1)
      .toLocaleLowerCase()
      .split("/")[2];

    let form_curso = divElement
      .querySelector(".form-curso-content")
      .querySelectorAll(".content_input");

    for (let clase = 0; clase < form_curso.length; clase++) {
      let nombre_clase = form_curso[clase]
        .querySelector("#input_nombre")
        .value.trim();
      let descripcion_clase = form_curso[clase]
        .querySelector("#input_descripcion")
        .value.trim();
      let url = form_curso[clase].querySelector("#input_video").value.trim();

      if ((nombre_clase && descripcion_clase && url) === "") {
        return Swal.fire({
          title: "Rellena los Campos de la clase",
          icon: "warning",
        });
      } else {
        let clase = new Clase({
          id_clase: generatorId(5),
          nombre_clase,
          descripcion_clase,
          url,
          curso_id,
        });
        console.log(clase);
      }
    }
  });

  return divElement;
};

export default courseContentView;
