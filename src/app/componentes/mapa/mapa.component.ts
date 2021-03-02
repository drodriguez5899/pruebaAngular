import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.css']
})
export class MapaComponent implements OnInit {
  mapa: any
  marcador:any

  constructor() { }

  ngOnInit(): void {
    this.mapa = L.map('posicionMapa').setView([39.39171215926296, -3.221865487572638], 13);
     L.marker([39.39171215926296, -3.221865487572638]).addTo(this.mapa).bindPopup('Instituto').openPopup();
    const trozos = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19
  })
    trozos.addTo(this.mapa)   
  }

}
