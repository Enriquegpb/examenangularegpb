import { Injectable } from '@angular/core';
import { Login } from '../models/login';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Token } from '../models/token';

@Injectable()
export class AuthService{
    constructor(private _http:HttpClient){}

    login(user:Login){
        //Deserializamos el objeto para enviarlo con el formato correcto 
        var json=JSON.stringify(user);
        var request="/api/Manage/Login";
        //Creamos los campos de cabeceras a nivel de transporte para su correcto formato
        var header= new HttpHeaders().set('Content-Type','application/json');
        var url=environment.urlApiCubos+request;
        return this._http.post(url,json,{headers:header})
    }
    singUp(user:Login){
        //Deserializamos el objeto para enviarlo con el formato correcto 
        var json=JSON.stringify(user);
        var request="/api/Manage/RegistroUsuario";
        //Creamos los campos de cabeceras a nivel de transporte para su correcto formato
        var header= new HttpHeaders().set('Content-Type','application/json');
        var url=environment.urlApiCubos+request;
        return this._http.post(url,json,{headers:header})
    }

    setToken(token:Token){
        //Este metodo establecerá el token de usuario a lo largo de su sesión
        console.log(token);
        localStorage.setItem('token',token.response);
    }
    getToken():string|null{
        //obtendrá el token del usuario cada vez que nuestro usuario requiera consumir un servicio premium
        let token=localStorage.getItem("token");
        if(token!=null){
            return token;
        }
        return null
    }
}