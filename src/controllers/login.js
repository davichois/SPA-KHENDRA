import login from "../pages/login.html";

const loginView = () => {
  const divElement = document.createElement("div");
  divElement.innerHTML = login;

  return divElement;
};

export default loginView;
