import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-estructuras',
  templateUrl: './estructuras.component.html',
  styleUrls: ['./estructuras.component.css']
})
export class EstructurasComponent implements OnInit {
  verdad : boolean
  edad : number

  constructor() { }

  ngOnInit(): void {
  }
  muestraLog(entrada:number,impar:boolean,primero:boolean,ultimo:boolean): void{
    console.log("Indice:" +entrada)
    console.log(impar? "Posicion impar":"Posicion par")
    if (primero)console.log("Primer elemento del array")
    if (ultimo)console.log("ultimo elemento del array")

  }
  

}
