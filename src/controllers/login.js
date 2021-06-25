import login from "../pages/login.html";
import { compararUsuarioLocalStorage } from "../utils/localStorage";

const loginView = () => {
  const divElement = document.createElement("div");
  divElement.innerHTML = login;


  const btnInicioSesion = divElement.querySelector(".form-auth");

  btnInicioSesion.addEventListener("submit", (e) => {
    e.preventDefault();

    const correo = divElement.querySelector("#correo").value.trim();
    const contraseña = divElement.querySelector("#contraseña").value.trim();

    if ((correo && contraseña) === "") {
      return Swal.fire({
        title: "Rellena los Campos...",
        icon: "warning",
      });
    } else {
      let response = compararUsuarioLocalStorage(correo, contraseña);

      if (response.length > 0) {
         Swal.fire({
          title: "Bienvenido",
          icon: "success",
        });
        return window.location.hash = "#/home"
      } else {
        return Swal.fire({
          title: "No encontramos tu cuenta",
          icon: "error",
        });
      }
    }
  });

  return divElement;
};

export default loginView;
