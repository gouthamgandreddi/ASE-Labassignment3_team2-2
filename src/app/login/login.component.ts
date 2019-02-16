import {Component, Input, OnInit} from '@angular/core';
import {Route, Router} from '@angular/router';
import {Observable} from 'rxjs';
import {Logindetail} from './logindetail';
import {RegisterComponent} from '../register/register.component';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],

})
export class LoginComponent implements OnInit {
  private existingUser: boolean = false;

  constructor(private routes:Router) { }

  ngOnInit() {
  }

   authorisedFlag:boolean = false;

  loginDetails = [
    new Logindetail('Stuart','creampie'),
    new Logindetail('Jack', 'applepie'),
    new Logindetail('Goutham','Goutham@123')
  ];

  login(event){
    event.preventDefault();
    const target = event.target;
    const uname = target.querySelector('#uname').value;
    const password = target.querySelector('#password').value;
    console.log(uname,password);
     for(var i=0;i<this.loginDetails.length;i++){
        if(this.loginDetails[i].uname==uname){
          this.existingUser = true;
          if(this.loginDetails[i].uname==uname && this.loginDetails[i].password==password){
            this.authorisedFlag = true;
          }
        }
      }
      if(this.authorisedFlag && this.existingUser){
        this.routes.navigate(['nutrition']);
      }else if(this.existingUser){
        alert('Wrong Password');
        this.routes.navigate(['login']);
      }else{
        alert('You are not registered user kindly register');
        this.routes.navigate(['register']);
      }
  }

}
