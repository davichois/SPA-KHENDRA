import { generatorId } from "../utils/generatedID";

export const saveCurso = (curso) => {
  let ListaCurso = [
    {
      id: generatorId(3),
      nombre_curso: "Curso de fotografia",
      descripcion_curso: "Curso de fotografia para fotógrafos.",
      duracion: "6h",
      img_curso:
        "https://images.unsplash.com/photo-1586983975767-9545011b31e3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80",
    },
  ];

  if (localStorage.getItem("DBCurso") === null) {
    ListaCurso.push(curso);
    return localStorage.setItem("DBCurso", JSON.stringify(ListaCurso));
  } else {
    ListaCurso = JSON.parse(localStorage.getItem("DBCurso"));
    ListaCurso.push(curso);
    return localStorage.setItem("DBCurso", JSON.stringify(ListaCurso));
  }
};

export const getCurso = (id) => {
  let ListaCurso = JSON.parse(localStorage.getItem("DBCurso"));

  if (id) {
    let cursos = ListaCurso.filter((res) => {
      return id === res.id;
    });
    return cursos;
  } else {
    return ListaCurso;
  }
};

export const saveCursoAccion = (cursosArray) => {
  localStorage.setItem("DBCurso", JSON.stringify(cursosArray));
};
