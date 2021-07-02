import { generatorId } from "../utils/generatedID";

// Modelo de Usuario
export class Usuario {
  constructor({
    id,
    nombre,
    apellido,
    correo,
    dni,
    nickname,
    contraseña,
    fecha_nacimiento,
    isAdmin,
  }) {
    this.id = id;
    this.nombre = nombre;
    this.apellido = apellido;
    this.correo = correo;
    this.dni = dni;
    this.nickname = nickname;
    this.fecha_nacimiento = fecha_nacimiento;
    this.contraseña = contraseña;
    this.isAdmin = isAdmin;
  }
}

export const saveUser = (usuario) => {
  let ListaUsuarios = [
    {
      id: generatorId(3),
      nombre: "khendra",
      apellido: "khendra",
      correo: "khendra@gmail.com",
      dni: "30482145",
      nickname: "khendra",
      contraseña: "admin123",
      fecha_nacimiento: "29/01/2002",
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
  let ListaUsuarios = JSON.parse(localStorage.getItem("DBUsuarios"));

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