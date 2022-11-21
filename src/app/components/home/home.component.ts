import { Component, OnInit } from '@angular/core';
import { Cubo } from 'src/app/models/cubo';
import { Cubos } from 'src/app/services/cubos.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public cubos!:Array<Cubo>;
  constructor(private _service:Cubos) { }

  obtenerCubos(){
    this._service.getCubos().subscribe(res=>{
      this.cubos=res;
      console.log(this.cubos);
    })
  }
  ngOnInit(): void {
    this.obtenerCubos();
  }

}
