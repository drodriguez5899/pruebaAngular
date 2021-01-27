import { Component, OnInit } from '@angular/core';
import { Articulos } from 'src/app/clases/articulos';

@Component({
  selector: 'app-articulos',
  templateUrl: './articulos.component.html',
  styleUrls: ['./articulos.component.css']
})
export class ArticulosComponent implements OnInit {
  articuloNuevo:Articulos = new Articulos
  articulos:Articulos[] = []
  articuloSeleccionado:Articulos = new Articulos()

  constructor() { }

  ngOnInit(): void {
    if (localStorage.getItem('articulos')!=null){
      this.articulos = JSON.parse(localStorage.getItem('articulos'))
    }  
  }
  insertarArticulo():void{    
    this.articulos.push(this.articuloNuevo)
    this.articuloNuevo = new Articulos()
    localStorage.setItem('articulos', JSON.stringify(this.articulos)) 
  }
  editarArticulo(articuloEntrada:Articulos):void{  
   
        this.articuloSeleccionado = new Articulos()
        localStorage.setItem('articulos', JSON.stringify(this.articulos))      
    
  }
  
  borrarArticulo(articuloEntrada:Articulos):void{
    this.articuloSeleccionado = new Articulos()
    localStorage.setItem('articulos', JSON.stringify(this.articulos))      
    
  }
}


