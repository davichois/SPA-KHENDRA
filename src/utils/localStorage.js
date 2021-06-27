import { generatorId } from "./generatedID";

//USUARIO
//Funcion nos ayudara a guardar el objecto usuario en el localStorage, ahi mismo lo exportamos a la funcion usando lo nuevo de JS, este se usa en el register
export const saveLocalStorageUsuario = (usuario) => {
  let ListaUsuarios = [
    {
      id: generatorId(3),
      nombre: "david",
      apellido: "prada",
      correo: "davidprali27@gmail.com",
      dni: "74228778",
      nickname: "davichois",
      contraseña: "admin123",
      fecha_nacimiento: "27/03/2002",
      isAdmin: true,
    },
  ];

  if (localStorage.getItem("DBUsuarios") === null) {
    ListaUsuarios.push(usuario);
    return localStorage.setItem("DBUsuarios", JSON.stringify(ListaUsuarios));
  } else {
    ListaUsuarios = JSON.parse(localStorage.getItem("DBUsuarios"));
    ListaUsuarios.push(usuario);
    return localStorage.setItem("DBUsuarios", JSON.stringify(ListaUsuarios));
  }
};
//Funcion nos ayudara a ver si el usuario existe en el localStorage o no, de acuerdo a eso validaremos, este se usa en el login
export const compararUsuarioLocalStorage = (correo, contraseña) => {
  let ListaUsuarios = JSON.parse(localStorage.getItem("DBUsuarios"));

  let usuario = ListaUsuarios.filter((res) => {
    return res.correo === correo && res.contraseña === contraseña;
  });

  return usuario;
};

//Funcion de guardar al usuario authenticado
export const saveAuthUser = (usuario) => {
  let usuarioAuth = [];

  if (localStorage.getItem("DBAuthUser") === null) {
    usuarioAuth.push(usuario);
    return localStorage.setItem("DBAuthUser", JSON.stringify(usuarioAuth));
  } else {
    usuarioAuth = JSON.parse(localStorage.getItem("DBAuthUser"));
    usuarioAuth.push(usuario);
    return localStorage.setItem("DBAuthUser", JSON.stringify(usuarioAuth));
  }
};

export const getUserAuth = () => {
  let ListaAuthUser = JSON.parse(localStorage.getItem("DBAuthUser"));

  let usuarioAuth = ListaAuthUser.find((res) => {
    return res[0];
  });

  return usuarioAuth;
};


//CURSO
export const saveLocalStorageCurso = (curso) => {
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
