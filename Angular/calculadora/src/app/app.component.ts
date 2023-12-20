import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  patron = /^[0-9+\-*./\s]+$/;
  visor: string = "";
  error: string = "";

  introducir(valor: string) {
    this.visor += valor;
  }

  calcular() {
    if (this.varificarVisor(this.visor)) {
      this.visor = eval(this.visor);
      this.visor = String(this.visor);
    }
  }

  // Verificar que solo se introducen caracteres validos
  varificarVisor(valor: string) {
    let resultado: boolean = false;
    if (this.patron.test(this.visor)) {
      this.error = "";
      resultado = true;
    } else {
      this.error = "Error";
      resultado = false;
    }
    return resultado;
  }

  // Borrar uno a uno
  borrarChar() {
    this.visor = this.visor.slice(0, -1);
  }

  //Borrar todo
  reset() {
    this.visor = "";
    this.error = "";
  }


  // operador: number = 0;
  // guardar: number = 0;
  // arrastra: boolean = false;
  // operar(valor: string) {
  //   if (Number(valor) >= 0) {
  //     this.visor += valor;
  //   } else {
  //     switch (valor) {
  //       case "-1": {
  //         //dividir

  //         break;
  //       }
  //       case "-2": {
  //         //multiplicar
  //         break;
  //       }
  //       case "-3": {
  //         //sumar
  //         if (this.arrastra == true) {
  //           this.visor = String(Number(this.visor) + this.guardar);
  //           //versión de acumular más de 2 operandos
  //           this.guardar = Number(this.visor);
  //           //después de cada número reseteo el visor para que no concatenea
  //           this.visor = "";

  //         } else {
  //           this.guardar = Number(this.visor);
  //           this.visor = "";
  //           this.arrastra = true;
  //         }
  //         this.operador = -3;
  //         break;
  //       }
  //       case "-4": {
  //         //decimal
  //         break;
  //       }

  //       case "-5": {
  //         //igual
  //         console.log(this.visor);
  //         if (this.operador == -3) {
  //           this.visor = String(Number(this.visor) + this.guardar);
  //           this.guardar = 0;
  //         }
  //         break;
  //       }
  //       case "-6": {
  //         //restrar
  //         break;
  //       }
  //       case "-7": {
  //         //reseteo total
  //         break;
  //       }
  //       case "-8": {
  //         //eliminar el visor
  //         break;
  //       }

  //     }

  //   }
  // }
}


