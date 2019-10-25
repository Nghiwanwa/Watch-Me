import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  time = new Date();

  constructor(public route:Router) { }

  ngOnInit() {
    setInterval(()=>{
      this.time = new Date();
    },1)
  }



  goTo(link){
      this.route.navigate([link]);
  }

 
}
