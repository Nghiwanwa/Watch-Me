import { Injectable } from '@angular/core';
import { RestService } from './rest.service';
import { User } from '../models/user';
import { HttpClient } from '@angular/common/http';
import { Parents } from '../models/parents';


@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  selectedUser = new User();
  users = new Array<User>();

  selectedParent = new Parents();
  parents = new Array<Parents>();

  roles = [
    'Super User',
    'User'
  ]
  
  constructor(private rest:RestService, private http:HttpClient) { }

  addUser(){
    this.http.post<User>(this.rest.REST_ENDPOINT+"/users", this.selectedUser).subscribe(
      user => {
        this.selectedUser = user;
        this.getUsers();
      }
    )
  }

  getUsers(){

      this.http.get<Array<User>>(this.rest.REST_ENDPOINT+"/users?deleted=false").subscribe(
        users => {
          this.users = users;
        }
      )
  }

  updateUser(){
    this.http.put<User>(this.rest.REST_ENDPOINT+"/users/"+this.selectedUser._id,this.selectedUser).subscribe(
      user => {
        this.selectedUser = user;
        this.getUsers();
      }
    )
  }

  deleteUser(){
    this.selectedUser.deleted = true;
    this.http.put<User>(this.rest.REST_ENDPOINT+"/users/"+this.selectedUser._id,this.selectedUser).subscribe(
      user => {
        this.selectedUser = user;
        this.getUsers();
      }
    )
  }

  addParents(){
    this.http.post<Parents>(this.rest.REST_ENDPOINT+"/parents", this.selectedParent).subscribe(
      parents => {
        this.selectedParent = parents;
        this.getParents();
      }
    )
  }

  getParents(){

      this.http.get<Array<Parents>>(this.rest.REST_ENDPOINT+"/parents?blocked=false").subscribe(
        parents => {
          this.parents = parents;
        }
      )
  }

  updateParents(){
    this.http.put<Parents>(this.rest.REST_ENDPOINT+"/parents/"+this.selectedParent._id,this.selectedParent).subscribe(
      parents => {
        this.selectedParent = parents;
      }
    )
  }

  blockParents(){
    this.selectedParent.blocked = true;
    this.http.put<Parents>(this.rest.REST_ENDPOINT+"/parents/"+this.selectedParent._id,this.selectedParent).subscribe(
      parents => {
        this.selectedParent = parents;
      }
    )
  }
}
