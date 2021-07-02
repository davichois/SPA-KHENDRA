import footer from "../templates/footer.html";

const footerView = () => {
  const divElement = document.createElement("div");
  divElement.innerHTML = footer;

  return divElement;
};

export default footerView;
