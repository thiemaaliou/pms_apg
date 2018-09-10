import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { UserComponent } from './user.component';
import { UserRoutingModule } from './user-routing.module';
import { CollapseModule } from 'ngx-bootstrap/collapse/collapse.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    UserRoutingModule,
    CollapseModule.forRoot(),
  ],
  declarations: [ UserComponent ]
})
export class UserModule { }
