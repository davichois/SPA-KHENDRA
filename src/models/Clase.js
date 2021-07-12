// Modelo de Clase
export class Clase {
  constructor({ id, nombre_clase, descripcion_clase, url, curso_id }) {
    this.id = id;
    this.nombre_clase = nombre_clase;
    this.descripcion_clase = descripcion_clase;
    this.url = url;
    this.curso_id = curso_id;
  }
}
