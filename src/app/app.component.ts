
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, 
    NavbarComponent,
    SidebarComponent,
    FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',

})
export class AppComponent {
  title = 'Dashboard';
  isSidebarVisible = true;

  onSidebarToggle() {
    this.isSidebarVisible = !this.isSidebarVisible; // Toggle sidebar visibility
  }
}

