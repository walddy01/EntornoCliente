import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Fruta } from './fruta';
@Injectable({
  providedIn: 'root'
})
export class ServicioFService {

  constructor(private httpCliente: HttpClient) { }
  leerProductos(): Observable<Fruta[]> {
    return this.httpCliente.get<Fruta[]>('http://moralo.atwebpages.com/menuAjax/productos2/index.php');

  }

  createProduct(producto: Fruta): Observable<Fruta>{
    console.log("producto"+producto.id)
        return this.httpCliente.post<Fruta>('http://moralo.atwebpages.com/menuAjax/productos2/create_product.php', producto);
    }
  updateProduct(producto: Fruta){
      return this.httpCliente.put<Fruta>('http://moralo.atwebpages.com/menuAjax/productos2/update_product.php', producto);
  }

  // deleteProduct(id: string){
  //     return this.httpClient.delete<Producto>('http://moralo.atwebpages.com/menuAjax/productos2/delete_product.php/?id='+id);
  // }



}
