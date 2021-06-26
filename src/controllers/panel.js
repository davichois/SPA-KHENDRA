import panel from "../pages/panel.html";

const panelView = () => {
  const divElement = document.createElement("div");
  divElement.innerHTML = panel;

  return divElement;
};

export default panelView;
