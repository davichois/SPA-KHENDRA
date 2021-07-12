// Modelo de Usuario
export class Usuario {
  constructor({
    id,
    nombre,
    apellido,
    correo,
    dni,
    nickname,
    contraseña,
    fecha_nacimiento,
    isAdmin,
  }) {
    this.id = id;
    this.nombre = nombre;
    this.apellido = apellido;
    this.correo = correo;
    this.dni = dni;
    this.nickname = nickname;
    this.fecha_nacimiento = fecha_nacimiento;
    this.contraseña = contraseña;
    this.isAdmin = isAdmin;
  }
}
