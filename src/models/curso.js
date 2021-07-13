// Modelo de Curso
export class Curso {
  constructor({
    id,
    nombre_curso,
    descripcion_curso,
    duracion,
    img_curso,
    img_docente,
    nombre_docente,
  }) {
    this.id = id;
    this.nombre_curso = nombre_curso;
    this.descripcion_curso = descripcion_curso;
    this.duracion = duracion;
    this.img_curso = img_curso;
    this.img_docente = img_docente;
    this.nombre_docente = nombre_docente;
  }
}
