import panel from "../pages/panel.html";

import { generatorId } from "../utils/generatedID";
import { getCurso, saveCurso, saveCursoAccion } from "../helpers/cursoStorage";
import Curso from "../models/Curso";

const panelView = () => {
  const divElement = document.createElement("div");
  divElement.innerHTML = panel;

  let cursos = getCurso() || [];

  const btn_nuevoCurso = divElement.querySelector(".btn-nuevocurso");
  const btn_cancelar = divElement.querySelector("#btn_cancelar");
  const btn_guardar = divElement.querySelector("#btn_guardar");
  const table_content = divElement.querySelector("#table_curso");

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
      id: generatorId(3).toLowerCase(),
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
      saveCurso(curso);
      Swal.fire({
        title: "Curso Registrado Correctamente",
        icon: "success",
      });
      OcultarYLimpiar();
      return (window.location.hash = "#/panel"), window.location.reload();
    }
  });

  //cancelar y limpiar campos
  btn_cancelar.addEventListener("click", (e) => {
    e.preventDefault();
    OcultarYLimpiar();
  });

  function OcultarYLimpiar() {
    const content_option = divElement.querySelector(".nuevo-curso-container");
    content_option.classList.toggle("none");

    divElement.querySelector("#nombre_curso").value = "";
    divElement.querySelector("#imagen_curso").value = "";
    divElement.querySelector("#descripcion_curso").value = "";
  }

  table_content.innerHTML = ` <tr> <th>ID</th> <th>Nombre</th> <th>URL</th> <th>Descripcion</th> <th>Contenido</th> <th>Editar</th> <th>Eliminar</th> </tr>`;
  cursos.map((curso) => {
    table_content.innerHTML += `
        <tr>
            <td>${curso.id}</td>
            <td>${curso.nombre_curso}</td>
            <td>${curso.img_curso}</td>
            <td>${curso.descripcion_curso}</td>
            <td><i class='bx bxs-book-content' title="add"></i></td>
            <td><i class='bx bxs-edit' title="edit"></i></td>
            <td><i class='bx bxs-trash' title="delete"></i></td>
        </tr>`;
  });

  //Acciones
  table_content.addEventListener("click", (e) => {
    e.preventDefault();
    if (e.target.title === "add") {
      console.log("add");
      window.location.hash = `#/content/${e.path[3].childNodes[0].childNodes[1].innerHTML}`;
    } else if (e.target.title === "edit") {
      console.log("edit");
      window.location.hash = `#/content/${e.path[3].childNodes[0].childNodes[1].innerHTML}`;
    } else if (e.target.title === "delete") {
      EliminarDB(e.path[3].childNodes[0].childNodes[1].innerHTML);
    }
  });

  //Eliminar
  const EliminarDB = (id) => {
    let indexArray;
    cursos.map((elemento, index) => {
      if (elemento.id === id) {
        indexArray = index;
      }
    });
    cursos.splice(indexArray, 1);
    console.log(cursos);
    saveCursoAccion(cursos);
    window.location.reload();
  };

  return divElement;
};

export default panelView;
