import { generatorId } from "./generatedID";

//Funcion nos ayudara a guardar el objecto usuario en el localStorage, ahi mismo lo exportamos a la funcion usando lo nuevo de JS, este se usa en el register
export const saveLocalStorage = (usuario) => {
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
    console.log("guardado");
    return localStorage.setItem("DBUsuarios", JSON.stringify(ListaUsuarios));
  } else {
    ListaUsuarios = JSON.parse(localStorage.getItem("DBUsuarios"));
    ListaUsuarios.push(usuario);
    console.log("guardado");
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
//Funcion nos ayuda a ver si el usuario guardado en el localStorage es Admin o no es, de acuerdo a este valor sse aplicaran algunas cosas por detras, por ekemplo si no es se le quitara opciones masters
export const isAdmin = (correo) => {
  let ListaUsuarios = JSON.parse(localStorage.getItem("DBUsuarios"));

  let usuario = ListaUsuarios.filter((res) => {
    return res.correo === correo && res.contraseña === contraseña;
  });

  return usuario;
};
