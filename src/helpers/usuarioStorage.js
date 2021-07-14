import { generatorId } from "../utils/generatedID";

export const saveUser = (usuario) => {
  let ListaUsuarios = [];

  if (localStorage.getItem("DBUsuarios") === null) {
    ListaUsuarios.push(usuario);
    return localStorage.setItem("DBUsuarios", JSON.stringify(ListaUsuarios));
  } else {
    ListaUsuarios = JSON.parse(localStorage.getItem("DBUsuarios"));
    ListaUsuarios.push(usuario);
    return localStorage.setItem("DBUsuarios", JSON.stringify(ListaUsuarios));
  }
};

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

export const comparerUser = (correo, contraseña) => {
  let ListaUsuarios = JSON.parse(localStorage.getItem("DBUsuarios")) || [];

  let usuario = ListaUsuarios.filter((res) => {
    return res.correo === correo && res.contraseña === contraseña;
  });

  return usuario;
};

export const getUserAuth = () => {
  let ListaAuthUser = JSON.parse(localStorage.getItem("DBAuthUser"));

  let usuarioAuth = ListaAuthUser.find((res) => {
    return res;
  });

  return usuarioAuth;
};

export const saveDataUser = (data) => {
  let ListaUsuarios = data;

  if (localStorage.getItem("DBUsuarios") === null) {
    return localStorage.setItem("DBUsuarios", JSON.stringify(ListaUsuarios));
  } else {
    ListaUsuarios = JSON.parse(localStorage.getItem("DBUsuarios"));
    return localStorage.setItem("DBUsuarios", JSON.stringify(ListaUsuarios));
  }
};
