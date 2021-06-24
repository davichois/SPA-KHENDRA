import notFound404 from "../pages/404.html";

const notFound404View = () => {
  const divElement = document.createElement("div");
  divElement.innerHTML = notFound404;

  return divElement;
};

export default notFound404View;
