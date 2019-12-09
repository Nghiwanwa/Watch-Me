import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  latitude= -21.20101;
  longitude = 17.288762;
  zoom=8;

  onChoseLocation(event){
    this.latitude = event.coords.lat;
    this.latitude = event.coords.log;
  }

  constructor() { }

  ngOnInit() {
  }

  
}
