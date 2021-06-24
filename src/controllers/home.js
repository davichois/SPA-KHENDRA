import home from "../pages/home.html";

const homeView = () => {
  const divElement = document.createElement("div");
  divElement.innerHTML = home;

  return divElement;
};

export default homeView;
