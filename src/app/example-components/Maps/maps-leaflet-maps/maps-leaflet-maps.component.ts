import { Component } from '@angular/core';
import { tileLayer, latLng } from 'leaflet';

@Component({
  selector: 'app-maps-leaflet-maps',
  templateUrl: './maps-leaflet-maps.component.html',
})
export class MapsLeafletComponent {
  options = {
    layers: [
      tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap contributors'
      })
    ],
    zoom: 7,
    center: latLng([ 46.879966, -121.726909 ])
  };
}
