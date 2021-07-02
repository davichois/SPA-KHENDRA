// Modelo de Curso
export class Curso {
  constructor({ id, nombre_curso, descripcion_curso, duracion, img_curso }) {
    this.id = id;
    this.nombre_curso = nombre_curso;
    this.descripcion_curso = descripcion_curso;
    this.duracion = duracion;
    this.img_curso = img_curso;
  }
}

export const saveCurso = (curso) => {
  let ListaCurso = [];

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
