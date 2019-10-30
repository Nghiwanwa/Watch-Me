import { Component, OnInit } from '@angular/core';
import { WatchesService } from '../services/watches.service';
import { Watches } from '../models/watches';

@Component({
  selector: 'app-watches',
  templateUrl: './watches.component.html',
  styleUrls: ['./watches.component.css']
})
export class WatchesComponent implements OnInit {

  constructor(public watchesService: WatchesService) { }

  ngOnInit() {
    this.watchesService.getWatches();
  }

  newWatch(){
    this.watchesService.selectedWatch = new Watches();
  }

}
