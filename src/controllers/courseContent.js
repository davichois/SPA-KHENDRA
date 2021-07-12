import courseContent from "../pages/courseContent.html";

import { getCurso } from "../helpers/cursoStorage";

const courseContentView = () => {
  const divElement = document.createElement("div");
  divElement.innerHTML = courseContent;

  const titulo_curso = divElement.querySelector("#titulo_curso");
  const img_curso = divElement.querySelector("#img_curso");
  const descripcion_curso = divElement.querySelector("#desccripcion_curso");

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

    let inputNombre = document.createElement(`input`);
    inputNombre.setAttribute("placeholder", "Nombre de la clase");
    let inputDescripcion = document.createElement(`input`);
    inputDescripcion.setAttribute("placeholder", "Descripcion de la clase");

    content_input.appendChild(inputNombre);
    content_input.appendChild(inputDescripcion);

    content_clase.appendChild(content_input);
  });

  return divElement;
};

export default courseContentView;
