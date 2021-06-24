import router from "./routers";

import "./style.css";
import "./css/landing.css";

window.addEventListener("load", () => {
  router();
});

window.addEventListener("hashchange", () => {
  router();
});
