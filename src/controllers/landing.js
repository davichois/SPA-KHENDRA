import landing from "../pages/landing.html";

import hero from "../assets/hero-student.svg";
import beneficios from "../assets/beneficios.svg";

const landingView = () => {
  const divElement = document.createElement("div");
  divElement.innerHTML = landing;

  /*
  asignacion a objectos
  */
  divElement.querySelector("#hero").src = `${hero}`;
  divElement.querySelector("#beneficios").src = `${beneficios}`;

  return divElement;
};

export default landingView;
