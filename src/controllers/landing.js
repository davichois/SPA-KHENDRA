import landing from "../pages/landing.html";

const landingView = () => {
  const divElement = document.createElement("div");
  divElement.innerHTML = landing;

  return divElement;
};

export default landingView;
