import { Component } from '@angular/core';
import { User } from '../../classes/user.class';

@Component({
  templateUrl: 'user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  isCollapsed: boolean = true;
  user: User = new User();
  genres: Array<any> = [{id: 1, name: 'Mr'}, {id: 2, name: 'Mme'}, {id: 3, name: 'Mlle'}];
  constructor(){}
  
  collapsed(event: any): void {
    // console.log(event);
  }

  expanded(event: any): void {
    // console.log(event);
  }

  /*add or edit user function*/
  AddUser(form){
    console.log(form, this.user);
  }

  /** resetACTION ON USER FORM FUNCTION*/
  resetAddUserAction(){
    this.user = new User();
    this.isCollapsed = !this.isCollapsed;
  }
}
