import { Component, OnInit } from '@angular/core';
import { PeopleService } from '../../services/people.service';
import { Children } from '../../models/children';

@Component({
  selector: 'app-children',
  templateUrl: './children.component.html',
  styleUrls: ['./children.component.css']
})
export class ChildrenComponent implements OnInit {

  constructor(public peopleService: PeopleService) { }

  ngOnInit() {
    this.peopleService.getChildren();
  }

  newChildren(){
    this.peopleService.selectedChildren = new Children()
  }
}
