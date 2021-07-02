import header from "../templates/header.html";
//Traemos la funcion de compararUsuario mandado vs el que existe en el LocalStorage
import { getUserAuth } from "../models/Usuario";

const headerView = () => {
  const divElement = document.createElement("div");
  divElement.innerHTML = header;

  //Etiquetas para acceder al DOM
  const arrow_down = divElement.querySelector(".bxs-down-arrow");
  const creators = divElement.querySelector("#kcreators");
  const salir_system = divElement.querySelector("#salir-system");

  //Eventos
  arrow_down.addEventListener("click", () => {
    const content_option = divElement.querySelector("#options");
    content_option.classList.toggle("none");
  });

  salir_system.addEventListener("click", () => {
    window.localStorage.removeItem("DBAuthUser");
  });

  //ADMIN
  let response = getUserAuth();
  let admin = response[0].isAdmin;

  if (admin === true) {
    creators.classList.remove("none");
  }

  return divElement;
};

export default headerView;
