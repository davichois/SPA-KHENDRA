import landing from "../pages/landing.html";
import footer from "./footer";

const landingView = () => {
  const divElement = document.createElement("div");
  divElement.innerHTML = landing;

  const footer_home = divElement.querySelector(".footer-landing");
  footer_home.appendChild(footer());

  return divElement;
};

export default landingView;
