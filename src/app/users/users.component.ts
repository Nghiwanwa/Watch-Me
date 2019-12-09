import { Component, OnInit } from '@angular/core';
import { PeopleService } from '../Application/services/people.service';
import { User } from '../Application/models/user';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {


 
  constructor(public peopleService: PeopleService) { }

  ngOnInit() {
    this.peopleService.getUsers();
  }

  newUser(){
    this.peopleService.selectedUser = new User();
  }

}
