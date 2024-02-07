export class Correo {
  id!: number;
  origen!: String;
  destinatario!: String;
  mensaje!: String;
  asunto!: String;
  fecha!: String;
  leido!: number;

  constructor(id:number, origen:String, destinatario:String, mensaje:String, asunto:String, fecha:String, leido:number) {
    // this.id = id;
    // this.origen = origen;
    // this.destinatario = destinatario;
    // this.mensaje = mensaje;
    // this.asunto = asunto;
    // this.fecha = fecha;
    // this.leido = leido;
  }
}
