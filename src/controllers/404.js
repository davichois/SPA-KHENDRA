import notFound404 from "../pages/404.html";
import astronauta from "../assets/astronauta.svg";

const notFound404View = () => {
  const divElement = document.createElement("div");
  divElement.innerHTML = notFound404;

  divElement.querySelector("#astronauta").src = `${astronauta}`;

  return divElement;
};

export default notFound404View;
