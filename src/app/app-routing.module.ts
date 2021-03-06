import { registerLocaleData } from '@angular/common';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserRouterGuard } from './auth/user-router.guard';
import { AboutComponent } from './componentes/about/about.component';
import { ArticulosComponent } from './componentes/articulos/articulos.component';
import { LoginComponent } from './componentes/auth/login/login.component';
import { PerfilComponent } from './componentes/auth/perfil/perfil.component';
import { RegisterComponent } from './componentes/auth/register/register.component';
import { CalculadoraComponent } from './componentes/calculadora/calculadora.component';
import { CrudLocalComponent } from './componentes/crud-local/crud-local.component';
import { CrudComponent } from './componentes/crud/crud.component';
import { EstructurasComponent } from './componentes/estructuras/estructuras.component';
import { FormularioClaseComponent } from './componentes/formulario-clase/formulario-clase.component';
import { GraficaComponent } from './componentes/grafica/grafica.component';
import { HolaComponent } from './componentes/hola/hola.component';
import { HomeComponent } from './componentes/home/home.component';
import { ListadoComponent } from './componentes/listado/listado.component';
import { LoteriaComponent } from './componentes/loteria/loteria.component';
import { MapaComponent } from './componentes/mapa/mapa.component';
import { MultiplicarComponent } from './componentes/multiplicar/multiplicar.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { TuberiasComponent } from './componentes/tuberias/tuberias.component';

const routes: Routes = [
  {path: "", component:HomeComponent},
  {path:"about", component:AboutComponent},
  {path:"loteria",component:LoteriaComponent},
  {path:"calculadora",component:CalculadoraComponent},
  {path:"multiplicar/:factor",component:MultiplicarComponent},
  {path:"hola/:nombre/:apellidos",component:HolaComponent},   
  {path:"tuberias",component:TuberiasComponent},
  {path:"estructuras",component:EstructurasComponent},
  {path:"formulario",component:FormularioClaseComponent},
  {path:"crudlocal",component:CrudLocalComponent},
  {path:"articulos",component:ArticulosComponent},
  {path:"registro",component:RegisterComponent},
  {path:"login",component:LoginComponent},
  {path:"perfil",component:PerfilComponent, canActivate:[UserRouterGuard]},
  {path:"crud",component:CrudComponent},
  {path:"listado",component:ListadoComponent},
  {path:"grafica",component:GraficaComponent},
  {path:"mapa",component:MapaComponent},
  {path:"",component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
