import {Component, EventEmitter, OnInit} from '@angular/core';
import {LoginComponent} from '../login/login.component';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  outputs:['updateInfoEvent']
})
export class RegisterComponent implements OnInit {

  constructor(private routes:Router) { }
  public updateInfoEvent = new EventEmitter;
  localcity:string;
  localstate:string;
  zip :number;
  ngOnInit() {
  }


   register(event){
    console.log('Reached register');
    const username = event.target.elements[0].value;
    const password = event.target.elements[1].value;
    const city = localStorage.getItem("cityname");
    const state = localStorage.getItem("statename");
    const zip = localStorage.getItem("zip");

     this.localcity = localStorage.getItem("cityname");
    console.log('User name -',username,'\n Password -',password,'\n City -',city,'\n state -', state,'\n zip -',zip);
    if(!username){
      alert("Enter Username");
      if(!password){
        alert("enter password");
        if(!city || !state || !zip){
          alert("Your local storage values are empty");
          this.routes.navigate(['register'])
        }
      }
    }else{
      console.log('successfully registered');
      this.routes.navigate(['login']);
    }


  }

}
