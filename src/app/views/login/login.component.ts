import { Component } from '@angular/core';
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
  btnText: string = "Connexion";
  constructor(private loginService: LoginService){}

  /* Login function */
  login(form){
    this.btnText = "En cours ...";
    this.processing = true;
    this.loginService.login(this.userCredentials.credentials).subscribe(response => {
      //console.log(response);
      this.btnText = "Valider";
      this.processing = false;
    }, error => {
        this.btnText = "Connexion";
         this.processing = false;
    });
    this.isloged = !this.isloged;
  }
}
