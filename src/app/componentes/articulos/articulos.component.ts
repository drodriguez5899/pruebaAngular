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
  indice:number
  articuloSeleccionado:Articulos = new Articulos()
  activado:boolean=false
  mensaje:string

  constructor() { }

  ngOnInit(): void {
    if (localStorage.getItem('articulos')!=null){
      this.articulos = JSON.parse(localStorage.getItem('articulos'))
      this.indice = this.articulos[this.articulos.length-1].id + 1
    }  else this.indice=0
  }
  insertarArticulo():void{  
    this.articuloNuevo.id = this.indice
    this.indice++  
    this.articulos.push(this.articuloNuevo)
    this.articuloNuevo = new Articulos()
    localStorage.setItem('articulos', JSON.stringify(this.articulos)) 
    this.mensaje="Se ha creado un nuevo articulo"
    this.activado=true
  }
  editarArticulo(articuloEntrada:Articulos):void{ 
    for(let i in this.articulos){
      if(this.articulos[i].id==articuloEntrada.id){
        this.articulos[i]=articuloEntrada
        this.articuloSeleccionado = new Articulos()
        localStorage.setItem('articulos', JSON.stringify(this.articulos))
        this.mensaje="Se ha editado el articulo correctamente"
        this.activado=true
      }
    }
  }
  
  borrarArticulo(articuloEntrada:Articulos):void{
    for(let i in this.articulos){
      if(this.articulos[i].id == articuloEntrada.id){
        this.articulos.splice(parseInt(i),1)
        this.articuloSeleccionado = new Articulos()
        localStorage.setItem('articulos',JSON.stringify(this.articulos))
        this.mensaje="Se ha borrado el articulo correctamente"
        this.activado=true
      }
    }
     
    
  }
}


