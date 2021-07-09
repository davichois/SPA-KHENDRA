import courseContent from "../pages/courseContent.html";

import { getCurso } from "../models/Curso";

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

  titulo_curso.value=`${curso()[0].nombre_curso}`
  img_curso.value=`${curso()[0].img_curso}`
  descripcion_curso.value=`${curso()[0].descripcion_curso}`
  

  console.log(curso());
  return divElement;
};

export default courseContentView;
