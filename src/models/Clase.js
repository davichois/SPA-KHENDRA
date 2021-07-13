// Modelo de Clase
export class Clase {
  constructor({ id_clase, nombre_clase, descripcion_clase, url, curso_id }) {
    this.id_clase = id_clase;
    this.nombre_clase = nombre_clase;
    this.descripcion_clase = descripcion_clase;
    this.url = url;
    this.curso_id = curso_id;
  }
}
