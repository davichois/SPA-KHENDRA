import register from "../pages/register.html";

const registerView = () => {
  const divElement = document.createElement("div");
  divElement.innerHTML = register;

  return divElement;
};

export default registerView;
