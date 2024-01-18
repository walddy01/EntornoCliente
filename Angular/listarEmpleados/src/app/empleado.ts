export class Empleado {
  id!: number;
  nombre!: string;
  direccion!: string;
  cargo!: string;
  edad!: number;
  imagen!: string;

  constructor(id: number, nombre: string, direccion: string, cargo: string, edad: number, imagen: string) {
    this.id = id;
    this.nombre = nombre;
    this.direccion = direccion;
    this.cargo = cargo;
    this.edad = edad;
    this.imagen = imagen;
  }
}
