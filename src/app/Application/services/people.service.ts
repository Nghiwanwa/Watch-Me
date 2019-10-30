import { Injectable } from '@angular/core';
import { RestService } from './rest.service';
import { User } from '../models/user';
import { HttpClient } from '@angular/common/http';
import { Parents } from '../models/parents';
import { Children } from '../models/children';


@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  selectedUser = new User();
  users = new Array<User>();

  selectedParent = new Parents();
  parents = new Array<Parents>();

  selectedChildren = new Children();
  child = new Array<Children>();

  roles = [
    'Super User',
    'User'
  ]
  
  gender=[
    'Male',
    'Female'
  ]
  getWatches: any;
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

      this.http.get<Array<Parents>>(this.rest.REST_ENDPOINT+"/parents").subscribe(
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

  blockParent(){
    this.selectedParent.blocked = true;
    this.http.put<Parents>(this.rest.REST_ENDPOINT+"/parents/"+this.selectedParent._id,this.selectedParent).subscribe(
      parents => {
        this.selectedParent = parents;
        this.getParents();
      }
    )
  }

  unblockParent(){
    this.selectedParent.blocked = false;
    this.http.put<Parents>(this.rest.REST_ENDPOINT+"/parents/"+this.selectedParent._id,this.selectedParent).subscribe(
      parents => {
        this.selectedParent = parents;
        this.getParents();
      }
    )
  }

  addChildren(){
    this.http.post<Children>(this.rest.REST_ENDPOINT+"/children", this.selectedChildren).subscribe(
      child => {
        this.selectedChildren = child;
        this.getChildren();
      }
    )
  }

  getChildren(){
      this.http.get<Array<Children>>(this.rest.REST_ENDPOINT+"/children?deleted=false").subscribe(
        child => {
          this.child = child;
        }
      )
  }

  updateChildren(){
    this.http.put<Children>(this.rest.REST_ENDPOINT+"/children/"+this.selectedChildren._id,this.selectedChildren).subscribe(
      child => {
        this.selectedChildren = child;
        this.getChildren();
      }
    )
  }

  deleteChildren(){
    this.selectedChildren.deleted = true;
    this.http.put<Children>(this.rest.REST_ENDPOINT+"/children/"+this.selectedChildren._id,this.selectedChildren).subscribe(
      child => {
        this.selectedChildren = child;
        this.getChildren();
      }
    )
  }
}
