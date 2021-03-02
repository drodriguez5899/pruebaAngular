import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  variable: string = "texto de prueba"
   x: number =0
   y: number=0
   activado:boolean=false;
   letras: string[] = ["a","b","c"]
   usuarios=[
     {nombre:"Manolo", apellido:"Lopez"},
     {nombre:"Juan", apellido:"Garcia"},
     {nombre:"jose", apellido:"Rodriguez"}
   ]
 
  
    
  constructor() { }

  ngOnInit(): void {
  }
 

}
 
