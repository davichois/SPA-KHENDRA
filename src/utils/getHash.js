//Funcion de indentificar el hash o sacar el valor que tiene
const getHash = () =>
  //traemos la localizacion del hash de la ventana en la que se encuentra
  /**
   * slice(1) = cortamos la primera pocicion y empezamos a contar desde ahi
   * toLocaleLowerCase() = transformamos la palabras o URL en minuscula
   * split() = transforma en un array y empieza a separa a los objectos cada vez que encuentra un "/", el resultado es [#,home], cojemos la pocision 1
   *            la posicion 1 es home lo cual en routes, el objecto routes tiene la page home a pintar.
   *
   * SI NO HAY NINGUN VALOR LO REDIRECIONAMOS Y LE DAMOS UN VALOR DE SOLO "/" LO CUAL ES EL LANDING PAGE.
   */
  window.location.hash.slice(1).toLocaleLowerCase().split("/")[1] || "/";

// exportamos la funcion getHash la cual la usaremos en el archivo principal de rutas el cual se encuentra en routers/index.js
export default getHash;
