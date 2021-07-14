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

export const saveDataCurso = (data) => {
  let ListaCurso = data;

  if (localStorage.getItem("DBCurso") === null) {
    return localStorage.setItem("DBCurso", JSON.stringify(ListaCurso));
  } else {
    ListaCurso = JSON.parse(localStorage.getItem("DBCurso"));
    return localStorage.setItem("DBCurso", JSON.stringify(ListaCurso));
  }
};
