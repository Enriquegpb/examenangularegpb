import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetallescubomarcaComponent } from './components/detallescubomarca/detallescubomarca.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { PerfilComponent } from './components/perfil/perfil.component';

const routes: Routes = [
  {
    path:"",component:HomeComponent,
  },
  {
    path:"detallescubomarca/:marca",component:DetallescubomarcaComponent,
  },
  {
    path:"login",component:LoginComponent,
  },
  {
    path:"perfilusuario",component:PerfilComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
