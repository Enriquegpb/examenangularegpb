import { Cubos } from 'src/app/services/cubos.service';
import { Component, OnInit,ViewChild,ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { Login } from 'src/app/models/login';
import { Token } from 'src/app/models/token';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  public marcas!:Array<string>;
  constructor(private _service:Cubos) { }
  rellenarMarcas():void{
    this._service.getMarcas().subscribe(res=>{
      this.marcas=res;
    })
  }
  ngOnInit(): void {
    this.rellenarMarcas();
  }

}
