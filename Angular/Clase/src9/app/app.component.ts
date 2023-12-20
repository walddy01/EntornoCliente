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
          if (this.arrastra==true){
            this.visor=String(Number(this.visor)/this.guardar);
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
          this.operador=-1;
          break;
        }
        case "-2":{
          //multiplicar
          if (this.arrastra==true){
            this.visor=String(Number(this.visor)*this.guardar);
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
          this.operador=-2;
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
          this.visor+=".";
          break;
        }

        case "-5":{
          //igual
          console.log(this.visor);
          if (this.operador==-3){
            this.visor=String(Number(this.visor)+this.guardar);
          }else if(this.operador == -2){
            this.visor=String(Number(this.visor)*this.guardar);
          }else if(this.operador == -1){
            this.visor=String(Number(this.visor)/this.guardar);
          }else if(this.operador == -6){
            this.visor=String(Number(this.visor)-this.guardar);
          }
          break;
        }
        case "-6":{
          //restrar
          if (this.arrastra==true){
            this.visor=String(Number(this.visor)-this.guardar);
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
          this.operador=-6;
          break;
        }
        case "-7":{
          //reseteo total
          this.visor = "";
          this.arrastra = false;
          this.operador = 0;
          this.guardar = 0;
          break;
        }
        case "-8":{
          //eliminar el visor
          this.visor = ""
          break;
        }

       }

     }
   }
  }


