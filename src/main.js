import router from "./routers";

import "./assets/logo.svg";

import "./style.css";
import "./css/landing.css";
import "./css/404.css";
import "./css/login.css";

import "./css/header.css";

window.addEventListener("load", () => {
  router();
});

window.addEventListener("hashchange", () => {
  router();
});
