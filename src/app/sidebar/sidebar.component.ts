import { Component, Input, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { CommonModule } from "@angular/common";

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  @Input() isSidebarVisible: boolean = true;
  activeMenu: string = 'dashboard'; // Default active menu

  constructor(private router: Router) {}

  ngOnInit() {
    // Listen to router events to set the active menu based on the current route
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        const currentRoute = event.urlAfterRedirects.split('/')[1]?.toLowerCase();
        this.activeMenu = currentRoute || 'dashboard'; // Default to 'dashboard' if no route is found
      }
    });
  }

  toggleSidebar() {
    this.isSidebarVisible = !this.isSidebarVisible;
  }

  setActiveMenu(menu: string) {
    this.activeMenu = menu.toLowerCase(); // Ensure menu names are lowercase for consistency

    // Navigate to the selected menu route
    if (menu === 'dashboard') {
      this.router.navigate(['/dashboard']);
    } else if (menu === 'components') {
      this.router.navigate(['/components']);
    } else if (menu === 'charts') {
      this.router.navigate(['/charts']);
    } else if (menu === 'news') {
      this.router.navigate(['/news']);
    } else if (menu === 'tables') {
      this.router.navigate(['/tables']);
    } else if (menu === 'maps') {
      this.router.navigate(['/maps']);
    } else if (menu === 'pages') {
      this.router.navigate(['/pages']);
    } else if (menu === 'menuLevel1') {
      this.router.navigate(['/menuLevel1']);
    }
  }
}


