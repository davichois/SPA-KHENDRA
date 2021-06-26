//Traemos la pagina del login y lo dibujamos desde el DOM
import login from "../pages/login.html";
//Traemos la funcion de compararUsuario mandado vs el que existe en el LocalStorage
import { compararUsuarioLocalStorage } from "../utils/localStorage";

//creamos una variable la cual almacenara una funcion a realizar, la funcion es contruir la pagina.
const loginView = () => {
  const divElement = document.createElement("div");
  divElement.innerHTML = login;

  //Etiquetas traidas desde el DOM del mismo documento login del page.
  const btnInicioSesion = divElement.querySelector(".form-auth");

  //Eventos del archivo y lo que pasara
  btnInicioSesion.addEventListener("submit", (e) => {
    //preemos el efecto para que no recargue la pagina, asi mejoramos la optimizacion de la pagina
    e.preventDefault();

    //Etiquetas traidas desde el DOM del mismo documento login del page.
    const correo = divElement.querySelector("#correo").value.trim();
    const contraseña = divElement.querySelector("#contraseña").value.trim();
    //Condicionales del login y efectos que pasaran
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
        return (window.location.hash = "#/home");
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

//Exportamos por defecto esta funcion LoginView la cual usaremos en las rutas en routers/index.js
export default loginView;
