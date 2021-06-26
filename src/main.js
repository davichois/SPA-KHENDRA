//importamos la funcion router enviada desde routers/index.js y este se ejecutara en este archivo
import router from "./routers";

import "./assets/logo.svg";

//Aca se encuentran todos nuestros estilos, empezando desde el global hasta los modularizados o de cada pagina.
import "./style.css";
import "./css/landing.css";
import "./css/404.css";
import "./css/login.css";
import "./css/panel.css"
//este es el estilo del template header.
import "./css/header.css";

//llamamos window.addEventListener para escuchar al evento cargar, osea escuchar cuando recarga la ventana del navegador(refresh)
window.addEventListener("load", () => {
  //ejecutamos nuestra funcion router cada vez que se recarga el navegador
  router();
});
//llamamos window.addEventListener para escuchar al evento cambio de URL o hash, osea escuchar cuando cambiamos la ruta o hash, mientras cambiemos la pagina seran diferente
window.addEventListener("hashchange", () => {
  //ejecutamos nuestra funcion router cada vez que cambia el hash
  router();
});
