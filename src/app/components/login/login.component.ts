import { Component, OnInit,ViewChild,ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { Login } from 'src/app/models/login';
import { Token } from 'src/app/models/token';
import { AuthService } from 'src/app/services/authService.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public token!:Token;
  @ViewChild("cajauser") cajaUser!:ElementRef;
  @ViewChild("cajapassword") cajaPassword!:ElementRef;
  constructor(private _service:AuthService, private _router:Router) { }

  login():void{
    var userName=this.cajaUser.nativeElement.value;
    var password=this.cajaPassword.nativeElement.value;
    var log= new Login(userName,password);
    this._service.login(log).subscribe(res=>{
      //Le decimos que el toke de este login es el de la respuesta
      console.log(res);
      this._service.setToken(this.token);
      this.comprobarLogin();

      
    })
  }
  comprobarLogin():void{
    if(this._service.getToken()){
      this._router.navigate(['/perfilusuario']);
    }
  }
  ngOnInit(): void {
    this.comprobarLogin();
  }

}
