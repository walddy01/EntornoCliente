import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 visor:string="";
 operador:number=0;
 guardar:number=0;
 arrastra:boolean=false;
   operar(valor:string){
     if (Number(valor)>=0){
          this.visor+=valor;
     }else
     {
       switch(valor){
        case "-1":{
          //dividir

          break;
        }
        case "-2":{
          //multiplicar
          break;
        }
        case "-3":{
          //sumar
          if (this.arrastra==true){
            this.visor=String(Number(this.visor)+this.guardar);
            //versión de acumular más de 2 operandos
            this.guardar=Number(this.visor);
            //después de cada número reseteo el visor para que no concatenea
            this.visor="";

          }else
          {
            this.guardar=Number(this.visor);
            this.visor="";
            this.arrastra=true;
          }
          this.operador=-3;
          break;
        }
        case "-4":{
          //decimal
          break;
        }

        case "-5":{
          //igual
          console.log(this.visor);
          if (this.operador==-3){
            this.visor=String(Number(this.visor)+this.guardar);
          }
          break;
        }
        case "-6":{
          //restrar
          break;
        }
        case "-7":{
          //reseteo total
          break;
        }
        case "-8":{
          //eliminar el visor
          break;
        }

       }

     }
   }
  }


