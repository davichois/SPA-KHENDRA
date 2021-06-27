import home from "../pages/home.html";

import header from "./header";

const homeView = () => {
  const divElement = document.createElement("div");
  divElement.innerHTML = home;

  //Damos el header template al header del home
  const header_home = divElement.querySelector(".header-home")
  header_home.appendChild(header())

  
  

  return divElement;
};

export default homeView;
