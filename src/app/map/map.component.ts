
import { Component } from '@angular/core';


@Component({
  selector: 'app-map',
  standalone: true,
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent { 
  toggleFullScreen(): void {
    const mapbox = document.querySelector<HTMLElement>('.mapbox');

    if (mapbox) {
      // Toggle the "fullscreen" class
      if (mapbox.classList.contains('fullscreen')) {
        mapbox.classList.remove('fullscreen');
      } else {
        mapbox.classList.add('fullscreen');
      }
    } else {
      console.error("Element with class 'mapbox' not found.");
    }
  }
}





