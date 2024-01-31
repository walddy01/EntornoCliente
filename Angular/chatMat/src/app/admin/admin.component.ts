import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private router:Router){}
  ngOnInit(): void {
    if (sessionStorage.getItem('Nombre')==null){
      this.router.navigate(['login']);
    }else{
      if (sessionStorage.getItem('Nombre')!="admin"){
        this.router.navigate(['chat']);
      }else {
        this.router.navigate(['admin']);
      }
    }
  }


}
