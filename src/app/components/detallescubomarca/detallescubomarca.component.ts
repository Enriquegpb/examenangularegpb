import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Route, Router } from '@angular/router';
import { Comentario } from 'src/app/models/comentario';
import { Cubo } from 'src/app/models/cubo';
import { Cubos } from 'src/app/services/cubos.service';

@Component({
  selector: 'app-detallescubomarca',
  templateUrl: './detallescubomarca.component.html',
  styleUrls: ['./detallescubomarca.component.css']
})
export class DetallescubomarcaComponent implements OnInit {
  public cubosMarcas!:Array<Cubo>;
  public comentarios!:Array<Comentario>;

  constructor(private _service:Cubos, private _activatedRoute:ActivatedRoute) { }

  obtenerCubosPorMarca():void{

    this._activatedRoute.params.subscribe(( parametros: Params ) => {
      
      if (parametros['marca'] != null){
        var params=parametros['marca'];
        console.log(params);
        this._service.getCubosMarca(parametros['marca']).subscribe(res=>{
          this.cubosMarcas=res;
        })
      }
    });
  }

  verComentarios(idCubo:number):void{
    this._service.getComentarios(idCubo).subscribe(res=>{
      this.comentarios=res;
      console.log(this.comentarios);
      
    })
  }

  ngOnInit(): void {
    this.obtenerCubosPorMarca();
  }

}
