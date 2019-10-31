import { Component, OnInit } from '@angular/core';
import { PeopleService } from '../services/people.service';
import { Sos } from '../models/sos';

@Component({
  selector: 'app-sos',
  templateUrl: './sos.component.html',
  styleUrls: ['./sos.component.css']
})
export class SOSComponent implements OnInit {

  constructor(public peopleService: PeopleService) { }

  ngOnInit() {
      this.peopleService.getSoS();
  }

  newSoS(){
    this.peopleService.selectedSos = new Sos();
  }
}
