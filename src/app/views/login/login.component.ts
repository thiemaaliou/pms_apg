import { Component } from '@angular/core';
import {Router} from '@angular/router';

import { User } from '../../classes/user.class';
import { LoginService } from '../../services/login.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: 'login.component.html',
  providers: [LoginService],
  styleUrls: ['./login.component.css'],
})
export class LoginComponent { 
  userCredentials: User = new User();
  isloged: boolean = false;
  processing: boolean = false;
  tokenValid: boolean = false;
  btnText: string = "Connexion";
  constructor(private loginService: LoginService, private router: Router){
    if(window.localStorage.getItem('sessionId'))
        this.router.navigate(['/dashboard']);
  }

  /* Login function */
  login(form){
    if(this.isloged){
      this.submitToken();
      return;
    }
    this.btnText = "En cours ...";
    this.processing = true;
    this.loginService.login(this.userCredentials.credentials).subscribe(response => {
      if(response["code"] == "0000"){
        this.btnText = "Valider";
        this.processing = false;
        this.isloged = !this.isloged;
      }else{
        this.btnText = "Connexion";
        this.processing = false;
      }
      
    }, error => {
        this.btnText = "Connexion";
         this.processing = false;
    });
   
  }

  submitToken(){
    this.loginService.submitToken(this.userCredentials.credentials.token).subscribe(response => {
      if(response["code"] == "0000"){
        this.tokenValid = !this.tokenValid;
       setTimeout(()=>{
          window.localStorage.setItem('sessionId', response["sessionId"]);
          this.router.navigate(['/dashboard']);
        }, 1000);
      }
    }, error => {

    });
  }
}
