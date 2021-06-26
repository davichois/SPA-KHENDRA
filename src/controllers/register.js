import { generatorId } from "../utils/generatedID";

import register from "../pages/register.html";
import { Usuario } from "../models/Usuario";
import { saveLocalStorage } from "../utils/localStorage";

const registerView = () => {
  const divElement = document.createElement("div");
  divElement.innerHTML = register;

  const btnRegister = divElement.querySelector(".form-auth");

  btnRegister.addEventListener("submit", (e) => {
    e.preventDefault();

    const nombre = divElement.querySelector("#nombre").value.trim();
    const apellido = divElement.querySelector("#apellido").value.trim();
    const correo = divElement.querySelector("#correo").value.trim();
    const dni = divElement.querySelector("#dni").value.trim();
    const nickname = divElement.querySelector("#nickname").value.trim();
    const fecha_nacimiento = divElement
      .querySelector("#fecha_nacimiento")
      .value.trim();
    const contraseña = divElement.querySelector("#contraseña").value.trim();

    const usuario = new Usuario({
      id: generatorId(3),
      nombre,
      apellido,
      correo,
      dni,
      nickname,
      fecha_nacimiento,
      contraseña,
      isAdmin: false,
    });

    if (
      (usuario.nombre &&
        usuario.apellido &&
        usuario.correo &&
        usuario.dni &&
        usuario.nickname &&
        usuario.fecha_nacimiento &&
        usuario.contraseña &&
        usuario.isAdmin) === ""
    ) {
      return Swal.fire({
        title: "Complete los campos...",
        icon: "warning",
      });
    } else {
      saveLocalStorage(usuario);
      Swal.fire({
        title: "Usuario Registrado Correctamente",
        icon: "success",
      });
      return (window.location.hash = "#/login");
    }
  });

  return divElement;
};

export default registerView;
