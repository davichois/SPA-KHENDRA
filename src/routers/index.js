//Custom modulos; getHash nos ayudara a saber en que nos encontramos leyendo la URL, resolveRoutes ayudara a indentificar entre un Id o pagina
import getHash from "../utils/getHash";
import resolveRoutes from "../utils/resolveRoutes";

import { saveDataUser } from "../helpers/usuarioStorage";
import { saveDataCurso } from "../helpers/cursoStorage";
import { saveDataClases } from "../helpers/claseStorage";

//Paginas usadas
import landing from "../controllers/landing";
import home from "../controllers/home";
import login from "../controllers/login";
import register from "../controllers/register";
import notFound404 from "../controllers/404";
import panel from "../controllers/panel";
import infoCourse from "../controllers/infoCourse";
import courseContent from "../controllers/courseContent";
import previusClases from "../controllers/previusClases";

//Rutas instanciadas en objecto lo cual servira para la comparacion
const routes = {
  "/": landing,
  "/home": home,
  "/panel": panel,
  "/login": login,
  "/register": register,
  "/content": courseContent,
  "/:id": infoCourse,
  "/clase": previusClases,
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

function DataIndexada() {
  const dataUsuario = [
    {
      id: "kda",
      nombre: "khendra",
      apellido: "khendra",
      correo: "khendra@gmail.com",
      dni: "30482145",
      nickname: "khendra",
      contraseña: "admin123",
      fecha_nacimiento: "29/01/2002",
      isAdmin: true,
    },
  ];

  saveDataUser(dataUsuario);

  const dataCurso = [
    {
      id: "vw9",
      nombre_curso: "Curso de React JS",
      descripcion_curso: "Curso de React Js la libreria mas popular de JS",
      duracion: "6h",
      img_curso:
        "https://images.unsplash.com/photo-1552308995-2baac1ad5490?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fHJlYWN0fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
      img_docente:
        "https://images.unsplash.com/photo-1588534510807-86dfb5ed5d5b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDd8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
      nombre_docente: "Luis Felipe",
    },
    {
      id: "wij",
      nombre_curso: "Curso de PySpark",
      descripcion_curso: "Curso de PySpark de 0 a avanzado, 100% practica.",
      duracion: "6h",
      img_curso: "https://i.imgur.com/3CGuvki.jpg",
      img_docente:
        "https://images.unsplash.com/photo-1588534510807-86dfb5ed5d5b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDd8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
      nombre_docente: "Luis Felipe",
    },
    {
      id: "st8",
      nombre_curso: "Curso de Practica de GitHub Copilot",
      descripcion_curso:
        "Curso practico de GITHUB COPILOT para aprender la AI la cual cambiara el desarrollo del software.",
      duracion: "6h",
      img_curso: "https://i.ytimg.com/vi/vMN0rVY0g4Y/maxresdefault.jpg",
      img_docente:
        "https://images.unsplash.com/photo-1598564773643-c3d0bba37f6a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80",
      nombre_docente: "Donisio Laguaña",
    },
    {
      id: "v1w",
      nombre_curso: "Curso de Python en el Backend",
      descripcion_curso:
        "Este es el curso de Python del lado del servidor, crea potentes Backends en tan solo un video.",
      duracion: "6h",
      img_curso:
        "https://www.freecodecamp.org/news/content/images/2021/06/backendpython.png",
      img_docente:
        "https://images.unsplash.com/photo-1535325019257-3f8a7994a3f3?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bWlndWVsfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
      nombre_docente: "Roman Dolio",
    },
    {
      id: "hnl",
      nombre_curso: "Curso de POO en C++",
      descripcion_curso: "Este es el curso de POO en C++ de 0 a Avanzado.",
      duracion: "6h",
      img_curso:
        "https://images.unsplash.com/photo-1527957557037-d079c24f24be?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      img_docente:
        "https://images.unsplash.com/photo-1544248638-70a48022a54a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bmF0YWxpZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
      nombre_docente: "Nathali porthman",
    },
    {
      id: "f6k",
      nombre_curso: "Curso de Postman",
      descripcion_curso:
        "Este es el curso de Postman de 0 a avanzado para testear tus API's.",
      duracion: "6h",
      img_curso:
        "https://www.luisllamas.es/wp-content/uploads/2017/10/postman-logo.png",
      img_docente:
        "https://images.unsplash.com/photo-1535325019257-3f8a7994a3f3?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bWlndWVsfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
      nombre_docente: "Roberto Vilariño",
    },
    {
      id: "aoq",
      nombre_curso: "Curso de Java",
      descripcion_curso: "Este es el curso de JAVA de 0 a avanzado.",
      duracion: "6h",
      img_curso:
        "https://www.profesionalreview.com/wp-content/uploads/2018/03/Java-1280x720.jpg",
      img_docente:
        "https://images.unsplash.com/photo-1588534510807-86dfb5ed5d5b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDd8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
      nombre_docente: "Sandro Fidel",
    },
  ];
  saveDataCurso(dataCurso);

  const dataClase = [
    {
      id_clase: "7n7ra",
      nombre_clase: "Clase de React JS todo en uno...",
      descripcion_clase: "Este es el curso de React JS todo en uno.",
      url: "https://youtu.be/nTeuhbP7wdE",
      curso_id: "vw9",
    },
    {
      id_clase: "aa7bs",
      nombre_clase: "Clase de  PySpark todo en uno...",
      descripcion_clase:
        "Clase de  PySpark todo en uno para principiantes y los que quieres practicar.",
      url: "https://youtu.be/_C8kWso4ne4",
      curso_id: "wij",
    },
    {
      id_clase: "27a6d",
      nombre_clase: "Github copilot en una sola clase de practica.",
      descripcion_clase:
        "Esta es la clase de practica de Github copilot la nueva AI el cual cambiará el mundo del desarrollo del software.",
      url: "https://youtu.be/vN7tk0ufLTM",
      curso_id: "st8",
    },
    {
      id_clase: "9lbyw",
      nombre_clase: "Clase de Python del Lado del Backend todo en uno....",
      descripcion_clase:
        "Clase de Python del Lado del Backend todo en uno con DJango como Framework",
      url: "https://youtu.be/jBzwzrDvZ18",
      curso_id: "v1w",
    },
    {
      id_clase: "ecc6c",
      nombre_clase: "Clase de POO en C++ todo en uno....",
      descripcion_clase:
        "Clase de POO en C++ donde aprenderas acerca de como funciona esto en C++",
      url: "https://youtu.be/wN0x9eZLix4",
      curso_id: "hnl",
    },
    {
      id_clase: "ch692",
      nombre_clase: "Clase de  Postman todo en uno...",
      descripcion_clase:
        "Esta es la clase de Postman todo en uno para aprender a testear tus API's Rest.",
      url: "https://youtu.be/VywxIQ2ZXw4",
      curso_id: "f6k",
    },
    {
      id_clase: "6e6vb",
      nombre_clase: "Presentación del curso de Java",
      descripcion_clase: "Esta es la presentación del curso de Java.",
      url: "https://youtu.be/4sZHxFEyEiE",
      curso_id: "aoq",
    },
    {
      id_clase: "scsnd",
      nombre_clase: "Introducción a Java",
      descripcion_clase: "Clase Introductoria del curso de JAVA",
      url: "https://youtu.be/xZFSFu9EVUs",
      curso_id: "aoq",
    },
    {
      id_clase: "359io",
      nombre_clase: "Hola mundo en Java",
      descripcion_clase:
        "En esta clase aprenderás a hacer tu primer HOLA MUNDO en JAVA",
      url: "https://youtu.be/s50th-MSkpg",
      curso_id: "aoq",
    },
    {
      id_clase: "lt1sg",
      nombre_clase: "Variables en JAVA",
      descripcion_clase: "En este curso crearas variables en Java",
      url: "https://youtu.be/Wf9vIRjD_5s",
      curso_id: "aoq",
    },
  ];
  saveDataClases(dataClase);
}

DataIndexada();

//exportamos el router y lo llamamos en el main.js .....
export default router;
