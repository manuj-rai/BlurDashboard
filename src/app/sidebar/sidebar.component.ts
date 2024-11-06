import { Component, Input  } from '@angular/core';
import { CommonModule } from "@angular/common";
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports:[CommonModule],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
 @Input() isSidebarVisible: boolean = true;
  activeMenu: string = 'Dashboard'; // Default active menu

constructor(private router: Router) {}

  setActiveMenu(menu: string) {
    this.activeMenu = menu;
    if (menu === 'Dashboard') {
      this.router.navigate(['/dashboard']); 
    } 
  }
}
