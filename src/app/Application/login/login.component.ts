import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public route:Router) { }


  pass = "";
  username="";

  ngOnInit() {
  }

  login(){
     if(this.pass=="1234" && this.username=='pombili'){
        alert('Access Granted!');
        this.route.navigate(['dashboard']);
     }else{
      alert('Access denied!');
     }
  }

}
