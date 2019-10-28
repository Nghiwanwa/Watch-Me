import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  REST_ENDPOINT = 'http://209.97.191.218:6700/api'

  constructor() { }
}
