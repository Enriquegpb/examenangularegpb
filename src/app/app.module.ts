import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { MenuComponent } from './components/menu/menu.component';
import { Cubos } from './services/cubos.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { DetallescubomarcaComponent } from './components/detallescubomarca/detallescubomarca.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { AuthService } from './services/authService.service';
import { PerfilComponent } from './components/perfil/perfil.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuComponent,
    DetallescubomarcaComponent,
    LoginComponent,
    SignupComponent,
    PerfilComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [Cubos,AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
