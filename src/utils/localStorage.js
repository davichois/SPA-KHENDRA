export const saveLocalStorage = (usuario) => {
  let ListaUsuarios = [];

  if (localStorage.getItem("DBUsuarios") === null) {
    ListaUsuarios.push(usuario);
    console.log("guardado");
    return localStorage.setItem("DBUsuarios", JSON.stringify(ListaUsuarios));
  } else {
    ListaUsuarios = JSON.parse(localStorage.getItem("DBUsuarios"));
    ListaUsuarios.push(usuario);
    console.log("guardado");
    return localStorage.setItem("DBUsuarios", JSON.stringify(ListaUsuarios));
  }
};

export const compararUsuarioLocalStorage = (correo, contraseña) => {
  let ListaUsuarios = JSON.parse(localStorage.getItem("DBUsuarios"));

  let usuario = ListaUsuarios.filter((res) => {
    return res.correo === correo && res.contraseña === contraseña;
  });

  return usuario;
};

export const isAdmin = (correo) => {
  let ListaUsuarios = JSON.parse(localStorage.getItem("DBUsuarios"));

  let usuario = ListaUsuarios.filter((res) => {
    return res.correo === correo && res.contraseña === contraseña;
  });

  return usuario;
};
