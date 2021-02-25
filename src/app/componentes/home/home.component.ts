import { Component, OnDestroy, OnInit } from '@angular/core';
import { Usuario } from 'src/app/clases/usuario';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy{
  variable: string = "texto de prueba"
   x: number =0
   y: number=0
   usuarioSeleccionado
   activado:boolean=false;
   letras: string[] = ["a","b","c"]
   usuarios=[
     {nombre:"Manolo", apellido:"Lopez"},
     {nombre:"Juan", apellido:"Garcia"},
     {nombre:"jose", apellido:"Rodriguez"}
   ]
   usuarios2:Usuario[]=[
    {nombre:"Manolo", apellido:"Lopez"},
    {nombre:"Juan", apellido:"Garcia"},
    {nombre:"jose", apellido:"Rodriguez"}
   ]
   usuarioSel
   usuario3: Usuario = new Usuario("Regina","Marin")
   nombreSeleccionado(usuario):void {
     this.usuarioSeleccionado = usuario.nombre + " " + usuario.apellido
     this.activado=true;
  } 
    
  constructor() { }

  ngOnInit(): void {
  }
  ngOnDestroy():void {
    alert("Hasta luego")
  }

}
 
