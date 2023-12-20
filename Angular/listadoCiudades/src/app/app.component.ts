import { Component } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Listado';

  pueblitodos:any;
  constructor(private http: HttpClient) {}
    ngOnInit (): void {
      this.http.get("http://camacho.atwebpages.com/jumbotronAleatorio/getImages.php")
      .subscribe(data => {

      })
    }
}
