import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";

@Injectable()
export class Cubos{
    constructor(private _http:HttpClient){}

    getCubos():Observable<any>{
        var request="/api/Cubos";
        var url=environment.urlApiCubos+request;
        return this._http.get(url);
    }
    getMarcas():Observable<any>{
        var request="/api/Cubos/Marcas";
        var url=environment.urlApiCubos+request;
        return this._http.get(url);
    }
    getCubosMarca(marca:string):Observable<any>{
        var request="/api/Cubos/CubosMarca/"+marca;
        var url=environment.urlApiCubos+request;
        return this._http.get(url);
    }
    getComentarios(idCubo:number):Observable<any>{
        var request="/api/ComentariosCubo/GetComentariosCubo/"+idCubo;
        var url=environment.urlApiCubos+request;
        return this._http.get(url);
    }
}