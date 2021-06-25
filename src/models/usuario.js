export class Usuario {
    constructor({
      nombre,
      apellido,
      correo,
      dni,
      nickname,
      contraseña,
      fecha_nacimiento,
    }) {
      this.nombre = nombre;
      this.apellido = apellido;
      this.correo = correo;
      this.dni = dni;
      this.nickname = nickname;
      this.fecha_nacimiento = fecha_nacimiento;
      this.contraseña = contraseña;
    }
  }
  