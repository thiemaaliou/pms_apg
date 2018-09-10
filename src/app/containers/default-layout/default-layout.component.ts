import { Component, Input } from '@angular/core';
import {Router} from '@angular/router'
import { navItems } from './../../_nav';

@Component({
  selector: 'app-dashboard',
  templateUrl: './default-layout.component.html'
})
export class DefaultLayoutComponent {
  public navItems = navItems;
  public sidebarMinimized = true;
  private changes: MutationObserver;
  public element: HTMLElement = document.body;
  constructor( private router: Router) {

    if(window.localStorage.getItem('sessionId') == null || window.localStorage.getItem('sessionId') == undefined)
        this.router.navigate(['/login']);

    this.changes = new MutationObserver((mutations) => {
      this.sidebarMinimized = document.body.classList.contains('sidebar-minimized');
    });

    this.changes.observe(<Element>this.element, {
      attributes: true
    });
  }

  logout(){
    window.localStorage.setItem('sessionId', null);
    this.router.navigate(['/login']);
  }
}
