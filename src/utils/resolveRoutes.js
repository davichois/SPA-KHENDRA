//este sera el que resolvera las rutas y indentificara entre una pagina o un objecto id
const resolveRoutes = (route) => {
  //si la ruta pasada desde routers/index.js es menor o igual a 3 validamos, es el landing page o un id
  if (route.length <= 3) {
    let validRoute = route === "/" ? route : "/:id";
    //Una vez indentificado el valor si es el landing page o id lo devolvemos el valor
    //ID puede ser menor a 3 dijistos osea 999 ese es el valor maximo, esta por verse esta parte aun.
    return validRoute;
  }
  //sino retornamos la ruta que se la paso normal
  return `/${route}`;
};

// exportamos la funcion y la usaremos en routers/index.js
export default resolveRoutes;
