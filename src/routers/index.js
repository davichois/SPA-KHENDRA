import getHash from "../utils/getHash";
import resolveRoutes from "../utils/resolveRoutes";

import landing from "../controllers/landing";
import home from "../controllers/home";
import login from "../controllers/login";
import register from "../controllers/register";
import notFound404 from "../controllers/404";

const routes = {
  "/": landing,
  "/home": home,
  "/login": login,
  "/register": register,
  "/:id": landing,
};

let content = null || document.querySelector(".root");

const router = () => {
  content.innerHTML = "";

  let hash = getHash();
  let route = resolveRoutes(hash);
  let render = routes[route] ? routes[route] : notFound404;
  content.appendChild(render());
};

export default router;
