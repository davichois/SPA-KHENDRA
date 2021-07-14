import editCourse from "../pages/editCourse.html";

import { getCurso, saveCursoAccion } from "../helpers/cursoStorage";

const editCourseView = () => {
  const divElement = document.createElement("div");
  divElement.innerHTML = editCourse;

  let cursosData = getCurso() || [];

  const titulo_curso = divElement.querySelector("#titulo_curso");
  const img_curso = divElement.querySelector("#img_curso");
  const descripcion_curso = divElement.querySelector("#desccripcion_curso");

  const idCourse = window.location.hash.split("/")[2];

  //Encontrando curso
  const curso = () => {
    let listaCurso = getCurso() || [];
    let cursoEncontrado = listaCurso.filter((curso) => {
      return curso.id === idCourse;
    });

    return cursoEncontrado;
  };

  //Pintamos data del curso encontrado
  titulo_curso.value = `${curso()[0].nombre_curso}`;
  img_curso.value = `${curso()[0].img_curso}`;
  descripcion_curso.value = `${curso()[0].descripcion_curso}`;

  const btn_actualizar_curso = divElement.querySelector(
    "#btn_actualizar_curso"
  );

  btn_actualizar_curso.addEventListener("click", () => {
    let titulo = titulo_curso.value.trim();
    let url = img_curso.value.trim();
    let descripcion = descripcion_curso.value.trim();

    let indexArray;
    cursosData.map((elemento, index) => {
      if (elemento.id === idCourse) {
        indexArray = index;
        cursosData.splice(indexArray, 1);
        cursosData.push({
          id: idCourse,
          nombre_curso: titulo,
          descripcion_curso: descripcion,
          img_curso: url,
        });
        saveCursoAccion(cursosData);
      } else {
        return;
      }
    });
    console.log(cursosData);
  });

  return divElement;
};

export default editCourseView;
