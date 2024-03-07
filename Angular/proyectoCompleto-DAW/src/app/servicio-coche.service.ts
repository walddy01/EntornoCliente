import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Coche } from './coches';

@Injectable({
  providedIn: 'root'
})
export class ServicioCocheService {

  constructor(private httpCoche:HttpClient) { }

  insertarCoche(coche:Coche){
    return this.httpCoche.post('http://moralo.atwebpages.com/vehiculos/insertarCoche.php',coche,{responseType:"text"});
  }

  obtenerCoche():Observable<Coche[]>{
    return this.httpCoche.get<Coche[]>('http://moralo.atwebpages.com/vehiculos/obtenerCoches.php');
  }
}
