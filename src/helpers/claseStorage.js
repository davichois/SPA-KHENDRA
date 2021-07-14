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
