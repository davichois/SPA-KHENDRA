import header from "../templates/header.html";
import perfil from "../assets/perfil.png";

const headerView = () => {
  const divElement = document.createElement("div");
  divElement.innerHTML = header;

  divElement.querySelector("#perfil").src = `${perfil}`;

  /*
   * Acciones del sistema
   */

  const arrow_down = divElement.querySelector(".bxs-down-arrow");

  /*
   * Eventos del sistema
   */

  arrow_down.addEventListener("click", () => {
    const content_option = divElement.querySelector("#options");
    content_option.classList.toggle("none");
  });

  return divElement;
};

export default headerView;
