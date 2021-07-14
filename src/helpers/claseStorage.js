export const saveClases = (clase) => {
  let ListaClase = [];

  if (localStorage.getItem("DBClase") === null) {
    ListaClase.push(clase);
    return localStorage.setItem("DBClase", JSON.stringify(ListaClase));
  } else {
    ListaClase = JSON.parse(localStorage.getItem("DBClase"));
    ListaClase.push(clase);
    return localStorage.setItem("DBClase", JSON.stringify(ListaClase));
  }
};

export const getClaseOrClases = (id) => {
  let ListaClase = JSON.parse(localStorage.getItem("DBClase"));

  if (id) {
    let clase = ListaClase.filter((res) => {
      return id === res.id_clase;
    });
    return clase;
  } else {
    return ListaClase;
  }
};

export const getClaseOrCourse = (id_course) => {
  let ListaClase = JSON.parse(localStorage.getItem("DBClase")) || [];
  let clase = ListaClase.filter((res) => {
    return id_course === res.curso_id;
  });
  return clase;
};

export const saveDataClases = (data) => {
  let ListaClase = data;

  if (localStorage.getItem("DBClase") === null) {
    return localStorage.setItem("DBClase", JSON.stringify(ListaClase));
  } else {
    ListaClase = JSON.parse(localStorage.getItem("DBClase"));
    return localStorage.setItem("DBClase", JSON.stringify(ListaClase));
  }
};
