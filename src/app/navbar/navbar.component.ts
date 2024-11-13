<<<<<<< HEAD
import { Component, Output, EventEmitter, HostListener } from '@angular/core';
import { CommonModule } from "@angular/common";

@Component({
  selector: 'app-navbar',
  standalone: true, 
  imports:[CommonModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  @Output() sidebarToggle = new EventEmitter<void>();

  toggleSidebar() {
    this.sidebarToggle.emit();
  }

  isDropdownVisible = false;

  toggleDropdown() {
    this.isDropdownVisible = !this.isDropdownVisible;
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: Event) {
    const target = event.target as HTMLElement;
    if (!target.closest('.profile-dropdown')) {
      this.isDropdownVisible = false;
    }
  }
}

=======
import { Component, Output, EventEmitter, HostListener } from '@angular/core';
import { CommonModule } from "@angular/common";

@Component({
  selector: 'app-navbar',
  standalone: true, 
  imports:[CommonModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  @Output() sidebarToggle = new EventEmitter<void>();

  toggleSidebar() {
    this.sidebarToggle.emit();
  }

  isDropdownVisible = false;

  toggleDropdown() {
    this.isDropdownVisible = !this.isDropdownVisible;
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: Event) {
    const target = event.target as HTMLElement;
    if (!target.closest('.profile-dropdown')) {
      this.isDropdownVisible = false;
    }
  }
}

>>>>>>> 9ed240678e279fddec5fe3b25db25c6590c220f1
