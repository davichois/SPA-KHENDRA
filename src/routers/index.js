//Custom modulos; getHash nos ayudara a saber en que nos encontramos leyendo la URL, resolveRoutes ayudara a indentificar entre un Id o pagina
import getHash from "../utils/getHash";
import resolveRoutes from "../utils/resolveRoutes";

//Paginas usadas
import landing from "../controllers/landing";
import home from "../controllers/home";
import login from "../controllers/login";
import register from "../controllers/register";
import notFound404 from "../controllers/404";
import panel from "../controllers/panel";

//Rutas instanciadas en objecto lo cual servira para la comparacion
const routes = {
  "/": landing,
  "/home": panel,
  "/login": login,
  "/register": register,
  "/:id": landing,
};

//traemos la etiqueta root, aca se pintara el contenido; root se encuentra en public/index.html
let content = null || document.querySelector(".root");

const router = () => {
  //cada ve que llame a esta funcion lo que el root tenia adentro como hijo se limpiara.
  content.innerHTML = "";

  //traemos nuestro modulo getHash para saber donde estamos, lo guardamos en una variable hash
  let hash = getHash();
  //traemos nuestra variable hash y lo entregamos a resolve routes, resolve routes se encuentra en utils.
  let route = resolveRoutes(hash);
  //vemos si la pagina existe en nuestro objecto routes[route], si no existe el valor del objecto devolvemos 404.
  let render = routes[route] ? routes[route] : notFound404;
  //Obteniendo la pagina en la variable render, lo pasamos como hijo del root a la pagina y listo, este se pintara sin recargar.
  content.appendChild(render());
};

//exportamos el router y lo llamamos en el main.js .....
export default router;
