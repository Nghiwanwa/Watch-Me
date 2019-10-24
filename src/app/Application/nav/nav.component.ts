import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  time = new Date();

  constructor() { }

  ngOnInit() {
    setInterval(()=>{
      this.time = new Date();
    },1)
  }

 
}
