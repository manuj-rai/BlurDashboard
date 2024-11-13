<<<<<<< HEAD
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
    if (menu === 'dashboard') {
      this.router.navigate(['/dashboard']);
    } else if (menu === 'components') {
      this.router.navigate(['/components']);
    } else if (menu === 'charts') {
      this.router.navigate(['/charts']);
    } else if (menu === 'features') {
      this.router.navigate(['/features']);
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

=======
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
>>>>>>> 9ed240678e279fddec5fe3b25db25c6590c220f1
