import courseContent from "../pages/courseContent.html";

const courseContentView = () => {
  const divElement = document.createElement("div");
  divElement.innerHTML = courseContent;

  return divElement;
};

export default courseContentView;
