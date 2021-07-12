import previusClases from "../pages/previusClases.html";

import header from "./header.js";
import footer from "./footer.js";

const previusClasesView = () => {
  const divElement = document.createElement("div");
  divElement.innerHTML = previusClases;

  //Damos el header template al header del home
  const header_home = divElement.querySelector(".header-previusClases");
  header_home.appendChild(header());

  const footer_home = divElement.querySelector("#footer_previusClases");
  footer_home.appendChild(footer());

  return divElement;
};

export default previusClasesView;
