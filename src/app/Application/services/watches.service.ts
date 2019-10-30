import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RestService } from './rest.service';
import { Watches } from '../models/watches';

@Injectable({
  providedIn: 'root'
})
export class WatchesService {

  selectedWatch = new Watches();
  watches = new Array<Watches>();

  constructor(private rest:RestService, private http:HttpClient) { }

  addWatch(){
    this.http.post<Watches>(this.rest.REST_ENDPOINT+"/watches", this.selectedWatch).subscribe(
      watches => {
        this.selectedWatch = watches;
        this.getWatches();
      }
    )
  }

  getWatches(){

      this.http.get<Array<Watches>>(this.rest.REST_ENDPOINT+"/watches?deleted=false").subscribe(
        watches => {
          this.watches = watches;
        }
      )
  }

  updateWatches(){
    this.http.put<Watches>(this.rest.REST_ENDPOINT+"/watches/"+this.selectedWatch._id,this.selectedWatch).subscribe(
      watches => {
        this.selectedWatch = watches;
        this.getWatches();
      }
    )
  }

  deleteWatches(){
    this.selectedWatch.deleted = true;
    this.http.put<Watches>(this.rest.REST_ENDPOINT+"/watches/"+this.selectedWatch._id,this.selectedWatch).subscribe(
      watches => {
        this.selectedWatch = watches;
        this.getWatches();
      }
    )
  }
}
